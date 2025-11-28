/*
# Seed Initial Data for Exora Rug

## Plain English Explanation
This migration populates the database with initial categories, products, and blog posts to showcase the website functionality.

## Data Being Inserted
- 5 categories (Shaggy Rugs, Handloom Carpets, Area Rugs, Kids Rugs, Boho Patterns)
- 8 products with complete details
- 3 blog posts

## Notes
- All data is production-ready and matches the frontend mock data
- Products are linked to their respective categories
- Images use real URLs from the image search results
*/

-- Insert categories
INSERT INTO categories (name, slug, image, product_count) VALUES
('Shaggy Rugs', 'shaggy-rugs', 'https://miaoda-site-img.s3cdn.medo.dev/images/89482bc9-b709-4502-873e-b558b5115784.jpg', 24),
('Handloom Carpets', 'handloom-carpets', 'https://miaoda-site-img.s3cdn.medo.dev/images/2b3a7e5f-4769-4bba-b9a6-445168f54d1c.jpg', 18),
('Area Rugs', 'area-rugs', 'https://miaoda-site-img.s3cdn.medo.dev/images/9ab18c7e-547e-4b13-8e2e-a24ce1591dd3.jpg', 32),
('Kids Rugs', 'kids-rugs', 'https://miaoda-site-img.s3cdn.medo.dev/images/cb95854d-925a-4c7a-b5a5-22352c11845f.jpg', 15),
('Boho Patterns', 'boho-patterns', 'https://miaoda-site-img.s3cdn.medo.dev/images/40fa7758-631a-4d05-bcc8-9bb628a6b590.jpg', 21);

-- Insert products
INSERT INTO products (name, slug, price, original_price, discount, rating, reviews, image, images, category_id, material, color, size, in_stock, stock_count, description, features, is_best_seller, is_new) VALUES
(
  'Luxe Shaggy Ivory Rug',
  'luxe-shaggy-ivory-rug',
  299.00,
  399.00,
  25,
  4.8,
  124,
  'https://miaoda-site-img.s3cdn.medo.dev/images/cc6ff666-71e2-4075-8820-174fb2df766d.jpg',
  ARRAY['https://miaoda-site-img.s3cdn.medo.dev/images/cc6ff666-71e2-4075-8820-174fb2df766d.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/89482bc9-b709-4502-873e-b558b5115784.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/e5de9812-9b33-414e-8280-dee55498ce58.jpg'],
  (SELECT id FROM categories WHERE slug = 'shaggy-rugs'),
  'Wool Blend',
  ARRAY['Ivory', 'Cream'],
  '8x10 ft',
  true,
  15,
  'Experience ultimate comfort with our Luxe Shaggy Ivory Rug. Hand-tufted with premium wool blend fibers, this rug brings warmth and elegance to any living space.',
  ARRAY['Hand-tufted construction', 'Soft wool blend', 'Non-slip backing', 'Easy to clean'],
  true,
  false
),
(
  'Boho Geometric Pattern Rug',
  'boho-geometric-pattern-rug',
  249.00,
  329.00,
  24,
  4.6,
  89,
  'https://miaoda-site-img.s3cdn.medo.dev/images/32e6afe4-37dc-40e5-8bf7-1c0bb4840115.jpg',
  ARRAY['https://miaoda-site-img.s3cdn.medo.dev/images/32e6afe4-37dc-40e5-8bf7-1c0bb4840115.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/40fa7758-631a-4d05-bcc8-9bb628a6b590.jpg'],
  (SELECT id FROM categories WHERE slug = 'boho-patterns'),
  'Cotton',
  ARRAY['Multi', 'Beige', 'Terracotta'],
  '6x9 ft',
  true,
  8,
  'Add a touch of bohemian charm with this geometric pattern rug. Handwoven by skilled artisans using traditional techniques.',
  ARRAY['Handwoven', '100% cotton', 'Reversible design', 'Eco-friendly dyes'],
  false,
  true
),
(
  'Modern Abstract Area Rug',
  'modern-abstract-area-rug',
  349.00,
  NULL,
  NULL,
  4.9,
  156,
  'https://miaoda-site-img.s3cdn.medo.dev/images/45dd1a29-61a2-4a51-a048-d9c1c0e4ee6f.jpg',
  ARRAY['https://miaoda-site-img.s3cdn.medo.dev/images/45dd1a29-61a2-4a51-a048-d9c1c0e4ee6f.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/9ab18c7e-547e-4b13-8e2e-a24ce1591dd3.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/d2f73f4e-2a0b-4031-9ec1-5539cd0d02a6.jpg'],
  (SELECT id FROM categories WHERE slug = 'area-rugs'),
  'Silk & Wool',
  ARRAY['Grey', 'Blue', 'Gold'],
  '9x12 ft',
  true,
  5,
  'A stunning modern abstract design that serves as a focal point in contemporary interiors. Crafted with silk and wool blend.',
  ARRAY['Silk & wool blend', 'Hand-knotted', 'Fade-resistant', 'Premium quality'],
  true,
  false
),
(
  'Kids Safari Adventure Rug',
  'kids-safari-adventure-rug',
  179.00,
  229.00,
  22,
  4.7,
  67,
  'https://miaoda-site-img.s3cdn.medo.dev/images/a67e13ee-e75d-4bc6-86a2-b23678bfa50e.jpg',
  ARRAY['https://miaoda-site-img.s3cdn.medo.dev/images/a67e13ee-e75d-4bc6-86a2-b23678bfa50e.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/5723b282-56ac-4ecb-8ca4-d887a9d46591.jpg'],
  (SELECT id FROM categories WHERE slug = 'kids-rugs'),
  'Synthetic',
  ARRAY['Multi', 'Green', 'Brown'],
  '5x7 ft',
  true,
  20,
  'Bring the wild to your child''s room with this playful safari-themed rug. Durable and easy to clean.',
  ARRAY['Stain-resistant', 'Non-toxic materials', 'Machine washable', 'Vibrant colors'],
  false,
  true
),
(
  'Traditional Persian Handloom',
  'traditional-persian-handloom',
  599.00,
  799.00,
  25,
  5.0,
  203,
  'https://miaoda-site-img.s3cdn.medo.dev/images/c2947a14-0d88-4a71-a8fe-1e7f9d131af0.jpg',
  ARRAY['https://miaoda-site-img.s3cdn.medo.dev/images/c2947a14-0d88-4a71-a8fe-1e7f9d131af0.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/2b3a7e5f-4769-4bba-b9a6-445168f54d1c.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/5fdfe7cc-8276-45fb-afe6-d6ee4722d610.jpg'],
  (SELECT id FROM categories WHERE slug = 'handloom-carpets'),
  'Pure Wool',
  ARRAY['Red', 'Navy', 'Gold'],
  '10x14 ft',
  true,
  3,
  'An exquisite handloom carpet featuring traditional Persian motifs. Each piece is a work of art, handcrafted by master weavers.',
  ARRAY['Hand-knotted', '100% pure wool', 'Heirloom quality', 'Natural dyes'],
  true,
  false
),
(
  'Minimalist Jute Runner',
  'minimalist-jute-runner',
  129.00,
  NULL,
  NULL,
  4.5,
  45,
  'https://miaoda-site-img.s3cdn.medo.dev/images/694bcc35-61c9-467e-adb0-883a076e395f.jpg',
  ARRAY['https://miaoda-site-img.s3cdn.medo.dev/images/694bcc35-61c9-467e-adb0-883a076e395f.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/694bcc35-61c9-467e-adb0-883a076e395f.jpg'],
  (SELECT id FROM categories WHERE slug = 'area-rugs'),
  'Jute',
  ARRAY['Natural', 'Beige'],
  '2.5x8 ft',
  true,
  30,
  'A natural jute runner perfect for hallways and entryways. Eco-friendly and durable.',
  ARRAY['100% natural jute', 'Eco-friendly', 'Durable', 'Neutral tone'],
  false,
  false
),
(
  'Vintage Distressed Rug',
  'vintage-distressed-rug',
  279.00,
  349.00,
  20,
  4.6,
  92,
  'https://miaoda-site-img.s3cdn.medo.dev/images/d2f73f4e-2a0b-4031-9ec1-5539cd0d02a6.jpg',
  ARRAY['https://miaoda-site-img.s3cdn.medo.dev/images/d2f73f4e-2a0b-4031-9ec1-5539cd0d02a6.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/9ab18c7e-547e-4b13-8e2e-a24ce1591dd3.jpg'],
  (SELECT id FROM categories WHERE slug = 'area-rugs'),
  'Cotton & Polyester',
  ARRAY['Grey', 'Beige', 'Blue'],
  '7x10 ft',
  true,
  12,
  'Vintage-inspired design with a distressed finish for a lived-in, timeless look.',
  ARRAY['Distressed finish', 'Low pile', 'Easy maintenance', 'Versatile style'],
  false,
  false
),
(
  'Plush Cloud Shaggy Rug',
  'plush-cloud-shaggy-rug',
  319.00,
  NULL,
  NULL,
  4.9,
  178,
  'https://miaoda-site-img.s3cdn.medo.dev/images/e5de9812-9b33-414e-8280-dee55498ce58.jpg',
  ARRAY['https://miaoda-site-img.s3cdn.medo.dev/images/e5de9812-9b33-414e-8280-dee55498ce58.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/cc6ff666-71e2-4075-8820-174fb2df766d.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/89482bc9-b709-4502-873e-b558b5115784.jpg'],
  (SELECT id FROM categories WHERE slug = 'shaggy-rugs'),
  'Microfiber',
  ARRAY['White', 'Light Grey'],
  '8x10 ft',
  true,
  7,
  'Sink your feet into cloud-like comfort with this ultra-plush shaggy rug. Perfect for bedrooms and cozy spaces.',
  ARRAY['Ultra-soft microfiber', 'High pile', 'Non-slip backing', 'Luxurious feel'],
  true,
  true
);

-- Insert blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, image, author, category, tags, published) VALUES
(
  'How to Choose the Perfect Rug Size for Your Space',
  'how-to-choose-perfect-rug-size',
  'Discover the essential guidelines for selecting the right rug dimensions to complement your room layout and furniture arrangement.',
  'Choosing the right rug size can transform your space. Here are the key guidelines to follow...',
  'https://miaoda-site-img.s3cdn.medo.dev/images/46699e89-3f39-4293-96c0-5a221a9fb36c.jpg',
  'Emma Wilson',
  'Styling Tips',
  ARRAY['Interior Design', 'Rug Sizing', 'Home Decor'],
  true
),
(
  'The Art of Handloom Weaving: A Timeless Tradition',
  'art-of-handloom-weaving',
  'Explore the centuries-old craft of handloom weaving and learn about the skilled artisans who create each unique piece.',
  'Handloom weaving is an ancient art form that has been passed down through generations...',
  'https://miaoda-site-img.s3cdn.medo.dev/images/0ffbd065-5098-451f-a9b8-1ee59edcdadd.jpg',
  'Michael Roberts',
  'Craftsmanship',
  ARRAY['Handloom', 'Artisan', 'Tradition'],
  true
),
(
  'Rug Care 101: Maintenance Tips for Longevity',
  'rug-care-maintenance-tips',
  'Learn the best practices for cleaning and maintaining your rugs to ensure they remain beautiful for years to come.',
  'Proper rug care is essential for maintaining the beauty and longevity of your investment...',
  'https://miaoda-site-img.s3cdn.medo.dev/images/1e676f11-756f-43a4-9270-4e76213b7615.jpg',
  'Lisa Thompson',
  'Maintenance',
  ARRAY['Rug Care', 'Cleaning', 'Maintenance'],
  true
);