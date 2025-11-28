/*
# Create Core E-commerce Tables for Exora Rug

## Plain English Explanation
This migration creates the foundational database structure for the Exora Rug e-commerce website, including tables for products, categories, blog posts, contact submissions, and newsletter subscriptions.

## Table List & Column Descriptions

### 1. categories
- `id` (uuid, primary key, default: gen_random_uuid())
- `name` (text, not null, unique) - Category name
- `slug` (text, not null, unique) - URL-friendly identifier
- `image` (text) - Category image URL
- `product_count` (integer, default: 0) - Number of products in category
- `created_at` (timestamptz, default: now())
- `updated_at` (timestamptz, default: now())

### 2. products
- `id` (uuid, primary key, default: gen_random_uuid())
- `name` (text, not null) - Product name
- `slug` (text, not null, unique) - URL-friendly identifier
- `price` (numeric(10,2), not null) - Current price
- `original_price` (numeric(10,2)) - Original price before discount
- `discount` (integer) - Discount percentage
- `rating` (numeric(3,2), default: 0) - Average rating (0-5)
- `reviews` (integer, default: 0) - Number of reviews
- `image` (text, not null) - Main product image URL
- `images` (text[]) - Array of additional image URLs
- `category_id` (uuid, references categories) - Category reference
- `material` (text) - Product material
- `color` (text[]) - Array of available colors
- `size` (text) - Product dimensions
- `in_stock` (boolean, default: true) - Stock availability
- `stock_count` (integer, default: 0) - Available quantity
- `description` (text) - Product description
- `features` (text[]) - Array of product features
- `is_best_seller` (boolean, default: false) - Best seller flag
- `is_new` (boolean, default: false) - New arrival flag
- `deal_end_time` (timestamptz) - Deal expiration time
- `created_at` (timestamptz, default: now())
- `updated_at` (timestamptz, default: now())

### 3. blog_posts
- `id` (uuid, primary key, default: gen_random_uuid())
- `title` (text, not null) - Post title
- `slug` (text, not null, unique) - URL-friendly identifier
- `excerpt` (text) - Short summary
- `content` (text) - Full post content
- `image` (text) - Featured image URL
- `author` (text, not null) - Author name
- `category` (text) - Post category
- `tags` (text[]) - Array of tags
- `published` (boolean, default: false) - Publication status
- `created_at` (timestamptz, default: now())
- `updated_at` (timestamptz, default: now())

### 4. contact_submissions
- `id` (uuid, primary key, default: gen_random_uuid())
- `name` (text, not null) - Sender name
- `email` (text, not null) - Sender email
- `message` (text, not null) - Message content
- `status` (text, default: 'new') - Submission status (new, read, replied)
- `created_at` (timestamptz, default: now())

### 5. newsletter_subscriptions
- `id` (uuid, primary key, default: gen_random_uuid())
- `email` (text, not null, unique) - Subscriber email
- `subscribed` (boolean, default: true) - Subscription status
- `created_at` (timestamptz, default: now())

## Security Changes
- All tables are PUBLIC (no RLS enabled) as this is a showcase website
- Anyone can read all data
- No authentication required for viewing products and content
- Contact submissions and newsletter subscriptions are write-only for public

## Notes
- Timestamps use timestamptz for timezone awareness
- Slugs are unique for SEO-friendly URLs
- Arrays used for flexible multi-value fields (colors, features, tags)
- Numeric types for precise price calculations
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  image text,
  product_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  price numeric(10,2) NOT NULL,
  original_price numeric(10,2),
  discount integer,
  rating numeric(3,2) DEFAULT 0,
  reviews integer DEFAULT 0,
  image text NOT NULL,
  images text[],
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  material text,
  color text[],
  size text,
  in_stock boolean DEFAULT true,
  stock_count integer DEFAULT 0,
  description text,
  features text[],
  is_best_seller boolean DEFAULT false,
  is_new boolean DEFAULT false,
  deal_end_time timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt text,
  content text,
  image text,
  author text NOT NULL,
  category text,
  tags text[],
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  subscribed boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_best_seller ON products(is_best_seller);
CREATE INDEX IF NOT EXISTS idx_products_new ON products(is_new);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();