# API Quick Reference Guide

## Import Statement

```typescript
import { categoriesApi, productsApi, blogApi, contactApi, newsletterApi } from '@/db/api';
import type { Category, Product, BlogPost, ContactSubmission, NewsletterSubscription } from '@/types/database';
```

## Categories API

### Get All Categories
```typescript
const categories = await categoriesApi.getAll();
// Returns: Category[]
```

### Get Category by Slug
```typescript
const category = await categoriesApi.getBySlug('living-room-rugs');
// Returns: Category | null
```

## Products API

### Get All Products
```typescript
// Basic usage
const products = await productsApi.getAll();

// With filters
const products = await productsApi.getAll({
  categoryId: 'uuid-here',
  isBestSeller: true,
  isNew: false,
  limit: 10,
  offset: 0
});
// Returns: Product[]
```

### Get Product by Slug
```typescript
const product = await productsApi.getBySlug('luxe-velvet-area-rug');
// Returns: ProductWithCategory | null
```

## Blog API

### Get All Blog Posts
```typescript
const posts = await blogApi.getAll();
// Returns: BlogPost[]
```

### Get Blog Post by Slug
```typescript
const post = await blogApi.getBySlug('how-to-choose-perfect-rug');
// Returns: BlogPost | null
```

### Get Recent Blog Posts
```typescript
const recentPosts = await blogApi.getRecent(5);
// Returns: BlogPost[]
```

## Contact API

### Submit Contact Form
```typescript
const submission = await contactApi.submit({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'I have a question about...'
});
// Returns: ContactSubmission
```

## Newsletter API

### Subscribe to Newsletter
```typescript
const subscription = await newsletterApi.subscribe('user@example.com');
// Returns: NewsletterSubscription
```

## Common Usage Patterns

### Loading Data in a Component

```typescript
import { useState, useEffect } from 'react';
import { productsApi } from '@/db/api';
import type { Product } from '@/types/database';

function MyComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productsApi.getAll();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Form Submission

```typescript
import { useState } from 'react';
import { contactApi } from '@/db/api';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactApi.submit(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {success && <p>Message sent successfully!</p>}
    </form>
  );
}
```

## Type Definitions

### Category
```typescript
interface Category {
  id: string;
  name: string;
  slug: string;
  image: string | null;
  product_count: number;
  created_at: string;
  updated_at: string;
}
```

### Product
```typescript
interface Product {
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
  category?: string | null; // Joined from categories table
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
```

### BlogPost
```typescript
interface BlogPost {
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
```

### ContactSubmission
```typescript
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  created_at: string;
}
```

### NewsletterSubscription
```typescript
interface NewsletterSubscription {
  id: string;
  email: string;
  subscribed: boolean;
  created_at: string;
}
```

## Property Name Conventions

⚠️ **Important**: Database fields use `snake_case`, not `camelCase`

### Correct Usage
```typescript
product.original_price  // ✅
product.is_new          // ✅
product.in_stock        // ✅
product.stock_count     // ✅
category.product_count  // ✅
post.created_at         // ✅
```

### Incorrect Usage
```typescript
product.originalPrice   // ❌
product.isNew           // ❌
product.inStock         // ❌
product.stockCount      // ❌
category.productCount   // ❌
post.date               // ❌
```

## Error Handling

All API methods can throw errors. Always wrap in try-catch:

```typescript
try {
  const data = await productsApi.getAll();
  // Handle success
} catch (error) {
  console.error('Error:', error);
  // Handle error
}
```

## Null Safety

Many fields are nullable. Always check before using:

```typescript
// Safe access
const price = product.original_price || product.price;
const images = product.images || [product.image];
const features = product.features || [];
const tags = post.tags || [];

// Optional chaining
const categoryName = product.category?.toLowerCase();
```

## Common Queries

### Get Best Sellers
```typescript
const bestSellers = await productsApi.getAll({ isBestSeller: true, limit: 4 });
```

### Get New Arrivals
```typescript
const newArrivals = await productsApi.getAll({ isNew: true, limit: 8 });
```

### Get Products by Category
```typescript
const category = await categoriesApi.getBySlug('living-room-rugs');
if (category) {
  const products = await productsApi.getAll({ categoryId: category.id });
}
```

### Get Recent Blog Posts
```typescript
const recentPosts = await blogApi.getRecent(3);
```

## Performance Tips

1. **Use pagination** for large lists:
```typescript
const products = await productsApi.getAll({ limit: 20, offset: 0 });
```

2. **Filter at the API level** when possible:
```typescript
// Good - filtered in database
const bestSellers = await productsApi.getAll({ isBestSeller: true });

// Less efficient - filtered in client
const allProducts = await productsApi.getAll();
const bestSellers = allProducts.filter(p => p.is_best_seller);
```

3. **Cache category data** as it changes infrequently:
```typescript
const [categories, setCategories] = useState<Category[]>([]);

useEffect(() => {
  const fetchCategories = async () => {
    const data = await categoriesApi.getAll();
    setCategories(data);
  };
  fetchCategories();
}, []); // Empty dependency array - only fetch once
```

## Debugging

### Check Supabase Connection
```typescript
import { supabase } from '@/db/supabase';

// Test connection
const { data, error } = await supabase.from('categories').select('count');
console.log('Connection test:', { data, error });
```

### Log API Responses
```typescript
const products = await productsApi.getAll();
console.log('Products loaded:', products.length);
console.log('First product:', products[0]);
```

### Check Environment Variables
```typescript
console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Has anon key:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
```

---

**Quick Links**:
- Full Documentation: [BACKEND_DOCUMENTATION.md](./BACKEND_DOCUMENTATION.md)
- Supabase Dashboard: https://supabase.com/dashboard/project/yiqjhgxrfjzqshwenxht
- Type Definitions: [src/types/database.ts](./src/types/database.ts)
- API Implementation: [src/db/api.ts](./src/db/api.ts)
