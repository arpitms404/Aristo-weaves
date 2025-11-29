# Exora Rug Website Requirements Document

## 1. Website Overview

### 1.1 Website Name\nExora Rug\n
### 1.2 Website Description
A premium handcrafted carpet and rug e-commerce website showcasing artisan craftsmanship, timeless textures, natural fibers, and elegant home aesthetics. The platform positions Exora Rug as a luxury brand with minimal, curated, and interior-design inspired visual language.
\n### 1.3 Core Features

#### 1.3.1 Homepage
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

#### 1.3.10 Footer
- Newsletter subscription bar\n- Four-column layout: Contact, Shop, Account, Policy
- Social media icons
- Payment method logos

## 2. Design Specifications
\n### 2.1 Color Palette
- Primary Accent: Soft Sage Green (#8FA08F) - buttons, active states, badges
- Secondary Accent: Deep Olive/Charcoal Black - Buy Now buttons, emphasis elements
- Light Grey Background: #F7F7F7
- Mid-Grey Borders: #E5E5E5
- Muted Grey Text: #777777
- Pure White: #FFFFFF for cards\n- Near-Black Grey for headings

### 2.2 Layout & Spacing\n- Large open spacing using 24px, 32px, 48px scale
- Grid system: 4-column desktop, 2-column tablet, 1-column mobile
- White cards with soft shadows and gentle rounded corners
- Thin dividers for content separation\n- Strong negative space throughout

### 2.3 Visual Style
- Minimal, luxurious, light and airy aesthetic
- Calm, handcrafted, modern and elegant tone
- Interior-design inspired imagery
- Soft shadows and subtle elevation effects
- Consistent vertical rhythm across all sections

### 2.4 Micro-Interactions & Animations
- Soft fade-in on scroll (0.4s duration, gentle easing)
- Slight upward motion (12px to 0)
- Product hover: scale 1.00 to 1.03
- Button hover: subtle shadow with color fill
- Mega-menu: opacity fade with slide-down (150-200ms)\n- Accordion: smooth height transition with icon rotation
- Tab switching: underline glide animation
- Horizontal slide for tabbed product sections
- Image zoom on product detail hover

### 2.5 Component Styling\n- Discount badges: soft green rounded pills
- Rating stars: consistent styling across all cards
- Countdown timers: soft neutral tone tiles
- Category icons: circular thumbnails with pastel backgrounds
- Testimonial cards: white with minimal shadow
- Blog cards: large images with crisp serif headlines\n- Form inputs: clean borders with subtle focus states
- CTAs: sage green primary, solid black secondary
- Icon set: muted tones, consistent line weight

## 3. Backend System & Database Integration

### 3.1 Data Models\n\n#### 3.1.1 Product Model
- Product ID, Name, Description, Category, Material, Color, Size, Price, Discount Price, Stock Quantity, Rating, Review Count, Images (array), Related Products (array), Created Date, Updated Date

#### 3.1.2 Category Model
- Category ID, Name, Description, Icon Image, Parent Category ID, Display Order

#### 3.1.3 User Model
- User ID, Email, Password (hashed), First Name, Last Name, Phone, Address, Registration Date, Last Login
\n#### 3.1.4 Order Model
- Order ID, User ID, Order Date, Status, Total Amount, Shipping Address, Payment Method, Order Items (array), Tracking Number

#### 3.1.5 Cart Model
- Cart ID, User ID, Product ID, Quantity, Added Date

#### 3.1.6 Wishlist Model
- Wishlist ID, User ID, Product ID, Added Date

#### 3.1.7 Review Model
- Review ID, Product ID, User ID, Rating, Comment, Review Date

#### 3.1.8 Blog Model
- Blog ID, Title, Content, Author, Category, Tags (array), Feature Image, Published Date\n
#### 3.1.9 Newsletter Model
- Subscription ID, Email, Subscription Date, Status

#### 3.1.10 Contact Message Model
- Message ID, Name, Email, Message Content, Submitted Date, Status

### 3.2 API Endpoints

#### 3.2.1 Product APIs\n- GET /api/products - Retrieve all products with filtering and sorting
- GET /api/products/:id - Retrieve single product details
- GET /api/products/category/:categoryId - Retrieve products by category
- GET /api/products/related/:id - Retrieve related products
- GET /api/products/search - Search products by keyword

#### 3.2.2 Category APIs
- GET /api/categories - Retrieve all categories
- GET /api/categories/:id - Retrieve single category details

#### 3.2.3 User APIs
- POST /api/users/register - User registration
- POST /api/users/login - User login
- GET /api/users/profile - Retrieve user profile
- PUT /api/users/profile - Update user profile
- POST /api/users/logout - User logout

#### 3.2.4 Cart APIs
- GET /api/cart - Retrieve user cart items
- POST /api/cart - Add item to cart
- PUT /api/cart/:id - Update cart item quantity
- DELETE /api/cart/:id - Remove item from cart\n
#### 3.2.5 Wishlist APIs\n- GET /api/wishlist - Retrieve user wishlist
- POST /api/wishlist - Add item to wishlist
- DELETE /api/wishlist/:id - Remove item from wishlist

#### 3.2.6 Order APIs
- POST /api/orders - Create new order
- GET /api/orders - Retrieve user order history
- GET /api/orders/:id - Retrieve single order details

#### 3.2.7 Review APIs
- GET /api/reviews/product/:productId - Retrieve product reviews
- POST /api/reviews - Submit product review

#### 3.2.8 Blog APIs
- GET /api/blogs - Retrieve all blog posts
- GET /api/blogs/:id - Retrieve single blog post
- GET /api/blogs/category/:category - Retrieve blogs by category

#### 3.2.9 Newsletter APIs
- POST /api/newsletter/subscribe - Subscribe to newsletter

#### 3.2.10 Contact APIs
- POST /api/contact - Submit contact form message\n
### 3.3 Database Integration
- Relational database structure with proper indexing on frequently queried fields
- Foreign key relationships between User, Product, Order, Cart, Wishlist, and Review tables
- Transaction support for order processing and inventory management
- Data validation and sanitization on all inputs
- Secure password storage using hashing algorithms
- Session management for user authentication
- Database backup and recovery procedures

### 3.4 Communication Logic\n- RESTful API architecture with JSON response format
- JWT-based authentication for secure API access
- Rate limiting on API endpoints to prevent abuse
- Error handling with standardized error codes and messages
- Request validation middleware
- CORS configuration for frontend-backend communication
- API versioning support for future updates

## 4. Backend Admin Panel Design

### 4.1 Admin Panel Overview
A comprehensive backend management system for administrators to manage products, orders, users, content, and site settings with a clean, data-focused interface.

### 4.2 Admin Panel Features

#### 4.2.1 Dashboard
- Key metrics cards: Total Sales, Orders, Products, Active Users
- Sales chart with date range selector
- Recent orders table with quick actions
- Low stock alerts\n- Top selling products widget

#### 4.2.2 Product Management
- Product list table with search, filter, and bulk actions
- Add/Edit product form with image uploader, category selector, pricing fields, inventory management
- Product variant management for sizes and colors
- Related products assignment interface
- Product status toggle (Active/Draft/Out of Stock)

#### 4.2.3 Category Management
- Hierarchical category tree view
- Drag-and-drop reordering\n- Category form with icon uploader and description editor
- Category visibility toggle
\n#### 4.2.4 Order Management
- Order list with status filters (Pending/Processing/Shipped/Delivered/Cancelled)
- Order detail view with customer info, items, shipping address, payment details
- Order status update workflow
- Print invoice and packing slip functionality
- Order tracking number assignment

#### 4.2.5 User Management
- User list table with role filters (Customer/Admin)\n- User profile view with order history\n- User account status management (Active/Suspended)\n- Admin role assignment interface

#### 4.2.6 Review Management
- Review list with product filters and rating filters
- Review approval/rejection workflow
- Bulk moderation actions\n\n#### 4.2.7 Blog Management
- Blog post list with status filters (Published/Draft)\n- Rich text editor for blog content creation
- Feature image uploader\n- Category and tag assignment
- SEO meta fields

#### 4.2.8 Newsletter Management
- Subscriber list with export functionality
- Subscription status management
- Email campaign creation interface (basic)
\n#### 4.2.9 Contact Messages
- Message inbox with status filters (New/Read/Replied)
- Message detail view with reply functionality
- Message archiving\n\n#### 4.2.10 Settings
- Site settings: site name, logo, contact information\n- Payment gateway configuration
- Shipping method and rate management
- Email notification templates
- SEO settings

### 4.3 Admin Panel Design Specifications

#### 4.3.1 Color Palette
- Primary: Deep Charcoal (#2C3E50) for sidebar and headers
- Accent: Soft Sage Green (#8FA08F) for active states and primary actions
- Background: Light Grey (#F8F9FA)\n- Card Background: Pure White (#FFFFFF)
- Border: Light Grey (#DEE2E6)
- Text: Dark Grey (#495057) for body, Near-Black (#212529) for headings
- Status Colors: Green for success, Yellow for warning, Red for error, Blue for info

#### 4.3.2 Layout Structure
- Fixed left sidebar (240px width) with collapsible menu
- Top header bar with search, notifications, and admin profile dropdown
- Main content area with breadcrumb navigation
- Card-based content sections with consistent padding (24px)
- Responsive table layouts with horizontal scroll on mobile

#### 4.3.3 Component Styling
- Data tables: striped rows, hover states, sortable columns, pagination
- Form inputs: clean borders with focus states matching accent color
- Buttons: primary (sage green), secondary (outlined), danger (red for delete actions)
- Status badges: rounded pills with appropriate status colors
- Modal dialogs: centered overlay with white card and subtle shadow
- Dropdown menus: white background with soft shadow
- Charts: clean line and bar charts with muted color palette

#### 4.3.4 Navigation Structure
- Sidebar menu items: Dashboard, Products, Categories, Orders, Users, Reviews, Blog, Newsletter, Messages, Settings
- Icon-based navigation with text labels
- Active state highlighting with accent color and left border indicator
- Collapsible sub-menus for nested sections
\n#### 4.3.5 Interactions
- Smooth transitions for sidebar collapse/expand (300ms)
- Table row hover with subtle background change
- Button hover with slight shadow elevation
- Form validation with inline error messages
- Success/error toast notifications in top-right corner
- Loading spinners for async operations
- Confirmation dialogs for destructive actions

### 4.4 Admin API Endpoints

#### 4.4.1 Admin Product APIs
- POST /api/admin/products - Create new product
- PUT /api/admin/products/:id - Update product
- DELETE /api/admin/products/:id - Delete product
- PATCH /api/admin/products/:id/status - Update product status
\n#### 4.4.2 Admin Category APIs
- POST /api/admin/categories - Create new category
- PUT /api/admin/categories/:id - Update category
- DELETE /api/admin/categories/:id - Delete category
- PUT /api/admin/categories/reorder - Update category order

#### 4.4.3 Admin Order APIs
- GET /api/admin/orders - Retrieve all orders with filters
- PUT /api/admin/orders/:id/status - Update order status
- GET /api/admin/orders/stats - Retrieve order statistics
\n#### 4.4.4 Admin User APIs
- GET /api/admin/users - Retrieve all users\n- PUT /api/admin/users/:id/status - Update user status
- PUT /api/admin/users/:id/role - Update user role
\n#### 4.4.5 Admin Review APIs
- PUT /api/admin/reviews/:id/approve - Approve review
- DELETE /api/admin/reviews/:id - Delete review

#### 4.4.6 Admin Blog APIs
- POST /api/admin/blogs - Create new blog post
- PUT /api/admin/blogs/:id - Update blog post
- DELETE /api/admin/blogs/:id - Delete blog post

#### 4.4.7 Admin Settings APIs
- GET /api/admin/settings - Retrieve all settings
- PUT /api/admin/settings - Update settings
\n#### 4.4.8 Admin Dashboard APIs
- GET /api/admin/dashboard/stats - Retrieve dashboard statistics
- GET /api/admin/dashboard/sales - Retrieve sales data for charts
\n## 5. Reference Files
- Navigation image: image.png