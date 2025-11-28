export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string | null;
  product_count: number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  original_price: number | null;
  discount: number | null;
  rating: number;
  reviews: number;
  image: string;
  images: string[] | null;
  category_id: string | null;
  category?: string | null;
  material: string | null;
  color: string[] | null;
  size: string | null;
  in_stock: boolean;
  stock_count: number;
  description: string | null;
  features: string[] | null;
  is_best_seller: boolean;
  is_new: boolean;
  deal_end_time: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  image: string | null;
  author: string;
  category: string | null;
  tags: string[] | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  created_at: string;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  subscribed: boolean;
  created_at: string;
}

export interface ProductWithCategory extends Omit<Product, 'category'> {
  category?: Category;
}
