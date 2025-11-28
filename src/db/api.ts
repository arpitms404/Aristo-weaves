import { supabase } from './supabase';
import type {
  Category,
  Product,
  ProductWithCategory,
  BlogPost,
  ContactSubmission,
  NewsletterSubscription
} from '@/types/database';

export const categoriesApi = {
  async getAll(): Promise<Category[]> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true });

    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getBySlug(slug: string): Promise<Category | null> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (error) throw error;
    return data;
  }
};

export const productsApi = {
  async getAll(params?: {
    categoryId?: string;
    isBestSeller?: boolean;
    isNew?: boolean;
    limit?: number;
    offset?: number;
  }): Promise<Product[]> {
    let query = supabase
      .from('products')
      .select(`
        *,
        category:categories(name)
      `)
      .eq('in_stock', true)
      .order('created_at', { ascending: false });

    if (params?.categoryId) {
      query = query.eq('category_id', params.categoryId);
    }
    if (params?.isBestSeller !== undefined) {
      query = query.eq('is_best_seller', params.isBestSeller);
    }
    if (params?.isNew !== undefined) {
      query = query.eq('is_new', params.isNew);
    }
    if (params?.limit) {
      query = query.limit(params.limit);
    }
    if (params?.offset) {
      query = query.range(params.offset, params.offset + (params.limit || 10) - 1);
    }

    const { data, error } = await query;

    if (error) throw error;
    const products = Array.isArray(data) ? data : [];
    return products.map(p => ({
      ...p,
      category: p.category?.name || null
    }));
  },

  async getBySlug(slug: string): Promise<ProductWithCategory | null> {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        category:categories(*)
      `)
      .eq('slug', slug)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async getByCategory(categorySlug: string, limit?: number): Promise<Product[]> {
    const { data: category } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', categorySlug)
      .maybeSingle();

    if (!category) return [];

    let query = supabase
      .from('products')
      .select('*')
      .eq('category_id', category.id)
      .eq('in_stock', true)
      .order('created_at', { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getRelated(productId: string, categoryId: string, limit: number = 4): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category_id', categoryId)
      .neq('id', productId)
      .eq('in_stock', true)
      .order('rating', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async search(query: string, limit: number = 20): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
      .eq('in_stock', true)
      .order('rating', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return Array.isArray(data) ? data : [];
  }
};

export const blogApi = {
  async getAll(limit?: number): Promise<BlogPost[]> {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async getRecent(limit: number = 5): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return Array.isArray(data) ? data : [];
  }
};

export const contactApi = {
  async submit(submission: {
    name: string;
    email: string;
    message: string;
  }): Promise<ContactSubmission> {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        name: submission.name,
        email: submission.email,
        message: submission.message,
        status: 'new'
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};

export const newsletterApi = {
  async subscribe(email: string): Promise<NewsletterSubscription> {
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .upsert(
        { email, subscribed: true },
        { onConflict: 'email' }
      )
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async unsubscribe(email: string): Promise<void> {
    const { error } = await supabase
      .from('newsletter_subscriptions')
      .update({ subscribed: false })
      .eq('email', email);

    if (error) throw error;
  }
};
