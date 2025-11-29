# Aristo Weaves and Art E-commerce Backend System Documentation

## Overview

The Aristo Weaves and Art e-commerce website is now fully integrated with a Supabase backend database system. This document provides a comprehensive overview of the backend architecture, database schema, API layer, and integration points.

## Technology Stack

- **Database**: Supabase (PostgreSQL)
- **API Client**: Supabase JavaScript Client
- **Type Safety**: TypeScript with strict type definitions
- **State Management**: React Hooks (useState, useEffect)

## Database Architecture

### Supabase Configuration

**Endpoint**: `yiqjhgxrfjzqshwenxht.supabase.co`

The Supabase client is initialized in `/src/db/supabase.ts` with environment variables:
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Public anonymous key for client-side access

### Database Schema

#### 1. Categories Table (`categories`)

Stores product categories with hierarchical organization support.

**Columns**:
- `id` (uuid, primary key): Unique identifier
- `name` (text, not null): Category display name
- `slug` (text, unique, not null): URL-friendly identifier
- `image` (text): Category image URL
- `product_count` (integer, default 0): Cached count of products in category
- `created_at` (timestamptz): Record creation timestamp
- `updated_at` (timestamptz): Last update timestamp

**Sample Data**: 5 categories (Living Room Rugs, Bedroom Rugs, Outdoor Rugs, Runner Rugs, Kids Rugs)

#### 2. Products Table (`products`)

Stores all product information including pricing, inventory, and metadata.

**Columns**:
- `id` (uuid, primary key): Unique identifier
- `name` (text, not null): Product display name
- `slug` (text, unique, not null): URL-friendly identifier
- `price` (numeric, not null): Current selling price
- `original_price` (numeric): Original price before discount
- `discount` (numeric): Discount percentage (0-100)
- `rating` (numeric, default 0): Average customer rating (0-5)
- `reviews` (integer, default 0): Number of customer reviews
- `image` (text, not null): Primary product image URL
- `images` (text[]): Array of additional product images
- `category_id` (uuid, foreign key): References categories table
- `material` (text): Product material (e.g., Wool, Cotton, Silk)
- `color` (text[]): Array of available colors
- `size` (text): Product dimensions
- `in_stock` (boolean, default true): Inventory availability
- `stock_count` (integer, default 0): Current inventory count
- `description` (text): Detailed product description
- `features` (text[]): Array of product features/highlights
- `is_best_seller` (boolean, default false): Best seller flag
- `is_new` (boolean, default false): New arrival flag
- `deal_end_time` (timestamptz): Limited-time deal expiration
- `created_at` (timestamptz): Record creation timestamp
- `updated_at` (timestamptz): Last update timestamp

**Sample Data**: 8 products across various categories

#### 3. Blog Posts Table (`blog_posts`)

Stores blog content for the website's content marketing.

**Columns**:
- `id` (uuid, primary key): Unique identifier
- `title` (text, not null): Blog post title
- `slug` (text, unique, not null): URL-friendly identifier
- `excerpt` (text): Short summary for listings
- `content` (text): Full blog post content (supports Markdown/HTML)
- `image` (text): Featured image URL
- `author` (text, not null): Author name
- `category` (text): Blog category (e.g., Design Tips, Care Guide)
- `tags` (text[]): Array of tags for filtering
- `published` (boolean, default false): Publication status
- `created_at` (timestamptz): Record creation timestamp
- `updated_at` (timestamptz): Last update timestamp

**Sample Data**: 3 published blog posts

#### 4. Contact Submissions Table (`contact_submissions`)

Stores customer inquiries from the contact form.

**Columns**:
- `id` (uuid, primary key): Unique identifier
- `name` (text, not null): Customer name
- `email` (text, not null): Customer email address
- `message` (text, not null): Inquiry message
- `status` (text, default 'new'): Processing status (new, in_progress, resolved)
- `created_at` (timestamptz): Submission timestamp

**Features**:
- Email validation on client-side
- Status tracking for admin follow-up
- Chronological ordering for admin review

#### 5. Newsletter Subscriptions Table (`newsletter_subscriptions`)

Manages email newsletter subscriber list.

**Columns**:
- `id` (uuid, primary key): Unique identifier
- `email` (text, unique, not null): Subscriber email address
- `subscribed` (boolean, default true): Subscription status
- `created_at` (timestamptz): Subscription timestamp

**Features**:
- Duplicate email prevention (unique constraint)
- Unsubscribe support via subscribed flag
- GDPR-compliant data structure

## API Layer

### Location
All database operations are encapsulated in `/src/db/api.ts`

### API Modules

#### 1. Categories API (`categoriesApi`)

**Methods**:

```typescript
// Get all categories
async getAll(): Promise<Category[]>

// Get single category by slug
async getBySlug(slug: string): Promise<Category | null>
```

**Features**:
- Ordered by name alphabetically
- Includes product count for each category
- Null-safe return values

#### 2. Products API (`productsApi`)

**Methods**:

```typescript
// Get all products with optional filters
async getAll(params?: {
  categoryId?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  limit?: number;
  offset?: number;
}): Promise<Product[]>

// Get single product by slug
async getBySlug(slug: string): Promise<ProductWithCategory | null>
```

**Features**:
- Advanced filtering by category, best seller status, new arrivals
- Pagination support with limit and offset
- Automatic category name joining
- Only returns in-stock products by default
- Sorted by creation date (newest first)

**Category Integration**:
The `getAll` method automatically joins with the categories table to include the category name in each product object:

```typescript
{
  ...productFields,
  category: "Living Room Rugs" // Joined from categories table
}
```

#### 3. Blog API (`blogApi`)

**Methods**:

```typescript
// Get all published blog posts
async getAll(): Promise<BlogPost[]>

// Get single blog post by slug
async getBySlug(slug: string): Promise<BlogPost | null>

// Get recent blog posts
async getRecent(limit: number = 5): Promise<BlogPost[]>
```

**Features**:
- Only returns published posts
- Sorted by creation date (newest first)
- Supports limiting for homepage/sidebar widgets

#### 4. Contact API (`contactApi`)

**Methods**:

```typescript
// Submit contact form
async submit(submission: {
  name: string;
  email: string;
  message: string;
}): Promise<ContactSubmission>
```

**Features**:
- Automatic timestamp generation
- Default status assignment ('new')
- Returns created submission with ID

#### 5. Newsletter API (`newsletterApi`)

**Methods**:

```typescript
// Subscribe to newsletter
async subscribe(email: string): Promise<NewsletterSubscription>
```

**Features**:
- Duplicate email handling (returns existing subscription)
- Automatic timestamp generation
- Returns subscription record with ID

## TypeScript Type Definitions

### Location
All database types are defined in `/src/types/database.ts`

### Type Interfaces

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

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  created_at: string;
}

interface NewsletterSubscription {
  id: string;
  email: string;
  subscribed: boolean;
  created_at: string;
}

interface ProductWithCategory extends Omit<Product, 'category'> {
  category?: Category;
}
```

### Type Safety Features

- **Strict null checking**: All nullable fields explicitly typed
- **Array types**: Proper typing for images, colors, features, tags
- **Timestamp types**: Consistent string type for all timestamps
- **Optional fields**: Clear distinction between required and optional data
- **Type composition**: ProductWithCategory extends Product for detailed views

## Frontend Integration

### Integration Pattern

All pages follow a consistent pattern for database integration:

1. **Import dependencies**:
```typescript
import { useState, useEffect } from "react";
import { productsApi } from "@/db/api";
import type { Product } from "@/types/database";
```

2. **State management**:
```typescript
const [data, setData] = useState<Product[]>([]);
const [loading, setLoading] = useState(true);
```

3. **Data fetching**:
```typescript
useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await productsApi.getAll();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
```

4. **Loading state**:
```typescript
if (loading) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
```

### Integrated Pages

#### 1. Home Page (`/src/pages/Home.tsx`)
- Fetches featured categories
- Loads best-selling products
- Displays new arrivals
- Shows recent blog posts
- All data loaded from database

#### 2. Shop Page (`/src/pages/Shop.tsx`)
- Loads all products with filtering
- Fetches categories for filter sidebar
- Client-side filtering by category, material, color, price
- Sorting by price, rating, newest
- Loading state with spinner

#### 3. Category Page (`/src/pages/Category.tsx`)
- Dynamic category loading by slug
- Filters products by category
- Sorting functionality
- Category-specific product display

#### 4. Product Detail Page (`/src/pages/ProductDetail.tsx`)
- Loads single product by slug
- Displays full product information
- Shows related products from same category
- Stock availability checking
- Price display with original price strikethrough

#### 5. Blog Page (`/src/pages/Blog.tsx`)
- Loads all published blog posts
- Displays recent posts sidebar
- Category and tag filtering
- Full blog post listing

#### 6. Contact Page (`/src/pages/Contact.tsx`)
- Form state management
- Async form submission to database
- Success/error message display
- Loading state during submission
- Form reset after successful submission

#### 7. Footer Component (`/src/components/common/Footer.tsx`)
- Newsletter subscription form
- Async email submission
- Success/error toast notifications
- Duplicate email handling
- Form validation

### Component Updates

#### ProductCard Component
Updated to use database types:
- `is_new` instead of `isNew`
- `original_price` instead of `originalPrice`
- Proper null checking for optional fields
- Price formatting with `.toFixed(2)`

#### CategoryCard Component
Updated to use database types:
- `product_count` instead of `productCount`
- Proper type imports from `@/types/database`

#### BlogCard Component
Updated to use database types:
- `created_at` instead of `date`
- Proper date formatting
- Type-safe props

## Error Handling

### API Layer Error Handling

All API methods include error handling:

```typescript
const { data, error } = await supabase
  .from('table_name')
  .select('*');

if (error) throw error;
return Array.isArray(data) ? data : [];
```

### Frontend Error Handling

All pages include try-catch blocks:

```typescript
try {
  const data = await api.getAll();
  setData(data);
} catch (error) {
  console.error('Error fetching data:', error);
  // Error is logged but doesn't crash the app
} finally {
  setLoading(false);
}
```

### User-Facing Error Messages

- **Contact form**: Toast notifications for success/error
- **Newsletter**: Toast notifications with specific messages
- **Product not found**: Friendly message with back button
- **Category not found**: Centered error message
- **Loading errors**: Silent failure with empty state

## Data Validation

### Client-Side Validation

1. **Contact Form**:
   - Name: Required, non-empty
   - Email: Required, valid email format
   - Message: Required, non-empty

2. **Newsletter Form**:
   - Email: Required, valid email format
   - Duplicate handling on server-side

3. **Product Filters**:
   - Price range: Numeric validation
   - Category selection: Valid category IDs only

### Database Constraints

1. **Unique Constraints**:
   - Category slugs
   - Product slugs
   - Blog post slugs
   - Newsletter emails

2. **Not Null Constraints**:
   - All required fields enforced at database level
   - Prevents incomplete data insertion

3. **Foreign Key Constraints**:
   - Products reference valid categories
   - Maintains referential integrity

## Performance Optimizations

### Database Queries

1. **Selective Field Loading**:
   - Only load required fields for list views
   - Full data loading for detail views

2. **Pagination Support**:
   - Limit and offset parameters
   - Prevents loading excessive data

3. **Indexed Fields**:
   - Slugs indexed for fast lookups
   - Category IDs indexed for joins

### Frontend Optimizations

1. **Loading States**:
   - Immediate feedback to users
   - Prevents multiple requests

2. **Error Boundaries**:
   - Graceful error handling
   - App remains functional on errors

3. **Memoization Opportunities**:
   - Category lists can be cached
   - Product filters can be memoized

## Security Considerations

### Row Level Security (RLS)

Currently, RLS is not enabled as this is a public e-commerce site. All data is publicly readable.

**Future Considerations**:
- Enable RLS for admin-only tables
- Add authentication for order management
- Protect customer data with user-specific policies

### API Key Security

- Anonymous key used for public data access
- Service role key stored securely (not in client code)
- Environment variables for sensitive configuration

### Input Sanitization

- All user inputs validated on client-side
- Supabase client handles SQL injection prevention
- XSS protection through React's built-in escaping

## Sample Data

### Categories (5 total)
1. Living Room Rugs
2. Bedroom Rugs
3. Outdoor Rugs
4. Runner Rugs
5. Kids Rugs

### Products (8 total)
1. Luxe Velvet Area Rug - $299.99 (Living Room)
2. Bohemian Medallion Rug - $189.99 (Living Room)
3. Modern Geometric Runner - $129.99 (Runner)
4. Plush Shag Bedroom Rug - $249.99 (Bedroom)
5. Vintage Persian Style - $399.99 (Living Room)
6. Coastal Stripe Outdoor - $159.99 (Outdoor)
7. Minimalist Scandinavian - $279.99 (Living Room)
8. Playful Kids Safari - $99.99 (Kids)

### Blog Posts (3 total)
1. "How to Choose the Perfect Rug Size for Your Living Room"
2. "5 Tips for Maintaining Your Luxury Rugs"
3. "2024 Rug Design Trends You Need to Know"

## Testing Checklist

### Database Operations
- ✅ Categories load correctly
- ✅ Products load with category names
- ✅ Blog posts filter by published status
- ✅ Contact form submissions save
- ✅ Newsletter subscriptions save
- ✅ Duplicate email handling works

### Frontend Integration
- ✅ Home page loads all data
- ✅ Shop page filters work
- ✅ Category pages display correct products
- ✅ Product detail pages load
- ✅ Blog page displays posts
- ✅ Contact form submits successfully
- ✅ Newsletter form submits successfully

### Type Safety
- ✅ All TypeScript errors resolved
- ✅ Proper type imports throughout
- ✅ Null safety implemented
- ✅ Array types handled correctly

### Error Handling
- ✅ Loading states display
- ✅ Error messages show appropriately
- ✅ Failed requests don't crash app
- ✅ User feedback on form submissions

## Future Enhancements

### Phase 1: User Authentication
- User registration and login
- Order history tracking
- Saved addresses and payment methods
- Wishlist functionality

### Phase 2: E-commerce Features
- Shopping cart with Supabase storage
- Checkout process
- Order management
- Payment integration

### Phase 3: Admin Panel
- Product management CRUD
- Category management
- Blog post editor
- Order fulfillment dashboard
- Customer inquiry management

### Phase 4: Advanced Features
- Product reviews and ratings
- Inventory management
- Email notifications
- Search functionality with full-text search
- Product recommendations
- Analytics and reporting

## Maintenance Guidelines

### Regular Tasks

1. **Database Backups**:
   - Supabase provides automatic backups
   - Consider additional backup strategy for production

2. **Data Cleanup**:
   - Archive old contact submissions
   - Remove unsubscribed newsletter emails (GDPR)
   - Clean up old blog post drafts

3. **Performance Monitoring**:
   - Monitor query performance
   - Check for slow-loading pages
   - Optimize database indexes as needed

4. **Security Updates**:
   - Keep Supabase client library updated
   - Review and update RLS policies
   - Audit API access patterns

### Troubleshooting

**Issue**: Products not loading
- Check Supabase connection
- Verify environment variables
- Check browser console for errors
- Verify products exist in database

**Issue**: Form submissions failing
- Check network tab for API errors
- Verify Supabase permissions
- Check form validation logic
- Verify table structure matches types

**Issue**: Type errors in development
- Run `npm run lint` to identify issues
- Verify type imports are correct
- Check for property name mismatches (camelCase vs snake_case)
- Ensure database types are up to date

## Conclusion

The Aristo Weaves and Art e-commerce backend system is now fully integrated with Supabase, providing a robust, type-safe, and scalable foundation for the application. All pages are connected to the database, forms are functional, and the codebase is free of TypeScript errors.

The system is ready for production deployment and can be extended with additional features as the business grows.

---

**Last Updated**: 2025-11-28
**Version**: 1.0.0
**Status**: Production Ready ✅
