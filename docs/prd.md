# Exora Rug Website Requirements Document

## 1. Website Overview

### 1.1 Website Name
Exora Rug\n
### 1.2 Website Description
A premium handcrafted carpet and rug e-commerce website showcasing artisan craftsmanship, timeless textures, natural fibers, and elegant home aesthetics. The platform positions Exora Rug as a luxury brand with minimal, curated, and interior-design inspired visual language.
\n### 1.3 Core Features
\n#### 1.3.1 Homepage
- Hero section with lifestyle rug imagery and primary CTA
- Feature strip highlighting Free Shipping, Easy Returns, Handmade Quality, 24/7 Support
- Promotional cards for discount campaigns and new arrivals
- Tabbed product section (Latest/Popular/Best Selling)
- Deal of the Day with countdown timer
- Category navigation with circular icons (Shaggy Rugs, Handloom Carpets, Area Rugs, Kids Rugs, Boho Patterns)\n- Customer testimonials section
- Blog preview cards

#### 1.3.2 Shop Page
- Sidebar filters: categories, color swatches, material options, price range slider, rating filter
- Product grid layout (3-4 columns)
- Sorting dropdown functionality
- Product cards with discount badges, countdown bars, pricing, ratings, and Add to Cart CTA

#### 1.3.3 Product Detail Page
- Image gallery with large preview and vertical thumbnails
- Zoom functionality on hover
- Product information panel: title, pricing, rating, stock indicator, quantity selector\n- Dual CTAs: Add to Cart and Buy Now
- Wishlist, Compare, Ask Question, Share icons
- Tabbed content: Description and Reviews
- Lifestyle images within description
- Product comparison table
- Related rugs section

#### 1.3.4 Category Page
- Filtered rug display (2-8 cards)\n- Left sidebar filters
- Sorting options
- Uniform grid layout

#### 1.3.5 Blog Page
- Multi-card layout with feature images
- Right sidebar: Recent Posts, Categories, Tags
- Content topics: rug maintenance, styling tips, weaving traditions

#### 1.3.6 FAQ Page
- Hero section with illustration
- Accordion-style FAQ list
- Service cards: Submit Task, Send Message, Experience

#### 1.3.7 About Page\n- Brand story and heritage narrative\n- Artisanship and weaving process showcase
- Photo collage
- Service cards section

#### 1.3.8 Contact Page
- Embedded map
- Contact form: Name, Email, Message fields
- Contact information tiles: phone, address, email, business hours\n
#### 1.3.9 Header & Navigation
- Centered serif logo
- Search bar (left), account/wishlist/cart icons (right)
- Mega-menu with rug categories and top-selling thumbnails\n- Smooth fade and slide-down animation
- Use navigation image: image.png

#### 1.3.10 Footer\n- Newsletter subscription bar
- Four-column layout: Contact, Shop, Account, Policy
- Social media icons
- Payment method logos

## 2. Design Specifications

### 2.1 Color Palette
- Primary Accent: Soft Sage Green (#8FA08F) - buttons, active states, badges
- Secondary Accent: Deep Olive/Charcoal Black - Buy Now buttons, emphasis elements
- Light Grey Background: #F7F7F7
- Mid-Grey Borders: #E5E5E5
- Muted Grey Text: #777777
- Pure White: #FFFFFF for cards
- Near-Black Grey for headings\n
### 2.2 Layout & Spacing
- Large open spacing using 24px, 32px, 48px scale
- Grid system: 4-column desktop, 2-column tablet, 1-column mobile\n- White cards with soft shadows and gentle rounded corners
- Thin dividers for content separation
- Strong negative space throughout

### 2.3 Visual Style
- Minimal, luxurious, light and airy aesthetic\n- Calm, handcrafted, modern and elegant tone
- Interior-design inspired imagery
- Soft shadows and subtle elevation effects
- Consistent vertical rhythm across all sections

### 2.4 Micro-Interactions & Animations
- Soft fade-in on scroll (0.4s duration, gentle easing)
- Slight upward motion (12px to 0)
- Product hover: scale 1.00 to 1.03\n- Button hover: subtle shadow with color fill
- Mega-menu: opacity fade with slide-down (150-200ms)
- Accordion: smooth height transition with icon rotation
- Tab switching: underline glide animation
- Horizontal slide for tabbed product sections\n- Image zoom on product detail hover

### 2.5 Component Styling
- Discount badges: soft green rounded pills
- Rating stars: consistent styling across all cards
- Countdown timers: soft neutral tone tiles\n- Category icons: circular thumbnails with pastel backgrounds
- Testimonial cards: white with minimal shadow
- Blog cards: large images with crisp serif headlines
- Form inputs: clean borders with subtle focus states
- CTAs: sage green primary, solid black secondary
- Icon set: muted tones, consistent line weight

## 3. Backend System & Database Integration

### 3.1 Data Models
\n#### 3.1.1 Product Model
- Product ID, Name, Description, Category, Material, Color, Size, Price, Discount Price, Stock Quantity, Rating, Review Count, Images (array), Related Products (array), Created Date, Updated Date

#### 3.1.2 Category Model
- Category ID, Name, Description, Icon Image, Parent Category ID, Display Order\n
#### 3.1.3 User Model
- User ID, Email, Password (hashed), First Name, Last Name, Phone, Address, Registration Date, Last Login\n
#### 3.1.4 Order Model
- Order ID, User ID, Order Date, Status, Total Amount, Shipping Address, Payment Method, Order Items (array), Tracking Number\n
#### 3.1.5 Cart Model
- Cart ID, User ID, Product ID, Quantity, Added Date\n
#### 3.1.6 Wishlist Model\n- Wishlist ID, User ID, Product ID, Added Date\n
#### 3.1.7 Review Model
- Review ID, Product ID, User ID, Rating, Comment, Review Date

#### 3.1.8 Blog Model
- Blog ID, Title, Content, Author, Category, Tags (array), Feature Image, Published Date

#### 3.1.9 Newsletter Model
- Subscription ID, Email, Subscription Date, Status\n
#### 3.1.10 Contact Message Model
- Message ID, Name, Email, Message Content, Submitted Date, Status

### 3.2 API Endpoints

#### 3.2.1 Product APIs
- GET /api/products - Retrieve all products with filtering and sorting
- GET /api/products/:id - Retrieve single product details
- GET /api/products/category/:categoryId - Retrieve products by category\n- GET /api/products/related/:id - Retrieve related products
- GET /api/products/search - Search products by keyword
\n#### 3.2.2 Category APIs
- GET /api/categories - Retrieve all categories
- GET /api/categories/:id - Retrieve single category details
\n#### 3.2.3 User APIs
- POST /api/users/register - User registration
- POST /api/users/login - User login
- GET /api/users/profile - Retrieve user profile
- PUT /api/users/profile - Update user profile
- POST /api/users/logout - User logout
\n#### 3.2.4 Cart APIs
- GET /api/cart - Retrieve user cart items
- POST /api/cart - Add item to cart
- PUT /api/cart/:id - Update cart item quantity
- DELETE /api/cart/:id - Remove item from cart

#### 3.2.5 Wishlist APIs
- GET /api/wishlist - Retrieve user wishlist\n- POST /api/wishlist - Add item to wishlist
- DELETE /api/wishlist/:id - Remove item from wishlist\n
#### 3.2.6 Order APIs
- POST /api/orders - Create new order
- GET /api/orders - Retrieve user order history
- GET /api/orders/:id - Retrieve single order details
\n#### 3.2.7 Review APIs
- GET /api/reviews/product/:productId - Retrieve product reviews
- POST /api/reviews - Submit product review
\n#### 3.2.8 Blog APIs
- GET /api/blogs - Retrieve all blog posts
- GET /api/blogs/:id - Retrieve single blog post
- GET /api/blogs/category/:category - Retrieve blogs by category
\n#### 3.2.9 Newsletter APIs
- POST /api/newsletter/subscribe - Subscribe to newsletter
\n#### 3.2.10 Contact APIs
- POST /api/contact - Submit contact form message

### 3.3 Database Integration
- Relational database structure with proper indexing on frequently queried fields
- Foreign key relationships between User, Product, Order, Cart, Wishlist, and Review tables
- Transaction support for order processing and inventory management
- Data validation and sanitization on all inputs
- Secure password storage using hashing algorithms
- Session management for user authentication
- Database backup and recovery procedures

### 3.4 Communication Logic
- RESTful API architecture with JSON response format
- JWT-based authentication for secure API access
- Rate limiting on API endpoints to prevent abuse
- Error handling with standardized error codes and messages
- Request validation middleware\n- CORS configuration for frontend-backend communication
- API versioning support for future updates