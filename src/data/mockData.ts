export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  category: string;
  material: string;
  color: string[];
  size: string;
  inStock: boolean;
  stockCount?: number;
  description: string;
  features?: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
  dealEndTime?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxe Shaggy Ivory Rug',
    slug: 'luxe-shaggy-ivory-rug',
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.8,
    reviews: 124,
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/cc6ff666-71e2-4075-8820-174fb2df766d.jpg',
    images: ['https://miaoda-site-img.s3cdn.medo.dev/images/cc6ff666-71e2-4075-8820-174fb2df766d.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/89482bc9-b709-4502-873e-b558b5115784.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/e5de9812-9b33-414e-8280-dee55498ce58.jpg'],
    category: 'Shaggy Rugs',
    material: 'Wool Blend',
    color: ['Ivory', 'Cream'],
    size: '8x10 ft',
    inStock: true,
    stockCount: 15,
    description: 'Experience ultimate comfort with our Luxe Shaggy Ivory Rug. Hand-tufted with premium wool blend fibers, this rug brings warmth and elegance to any living space.',
    features: ['Hand-tufted construction', 'Soft wool blend', 'Non-slip backing', 'Easy to clean'],
    isBestSeller: true,
    isNew: false
  },
  {
    id: '2',
    name: 'Boho Geometric Pattern Rug',
    slug: 'boho-geometric-pattern-rug',
    price: 249,
    originalPrice: 329,
    discount: 24,
    rating: 4.6,
    reviews: 89,
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/32e6afe4-37dc-40e5-8bf7-1c0bb4840115.jpg',
    images: ['https://miaoda-site-img.s3cdn.medo.dev/images/32e6afe4-37dc-40e5-8bf7-1c0bb4840115.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/40fa7758-631a-4d05-bcc8-9bb628a6b590.jpg'],
    category: 'Boho Patterns',
    material: 'Cotton',
    color: ['Multi', 'Beige', 'Terracotta'],
    size: '6x9 ft',
    inStock: true,
    stockCount: 8,
    description: 'Add a touch of bohemian charm with this geometric pattern rug. Handwoven by skilled artisans using traditional techniques.',
    features: ['Handwoven', '100% cotton', 'Reversible design', 'Eco-friendly dyes'],
    isBestSeller: false,
    isNew: true
  },
  {
    id: '3',
    name: 'Modern Abstract Area Rug',
    slug: 'modern-abstract-area-rug',
    price: 349,
    rating: 4.9,
    reviews: 156,
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/45dd1a29-61a2-4a51-a048-d9c1c0e4ee6f.jpg',
    images: ['https://miaoda-site-img.s3cdn.medo.dev/images/45dd1a29-61a2-4a51-a048-d9c1c0e4ee6f.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/9ab18c7e-547e-4b13-8e2e-a24ce1591dd3.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/d2f73f4e-2a0b-4031-9ec1-5539cd0d02a6.jpg'],
    category: 'Area Rugs',
    material: 'Silk & Wool',
    color: ['Grey', 'Blue', 'Gold'],
    size: '9x12 ft',
    inStock: true,
    stockCount: 5,
    description: 'A stunning modern abstract design that serves as a focal point in contemporary interiors. Crafted with silk and wool blend.',
    features: ['Silk & wool blend', 'Hand-knotted', 'Fade-resistant', 'Premium quality'],
    isBestSeller: true,
    isNew: false
  },
  {
    id: '4',
    name: 'Kids Safari Adventure Rug',
    slug: 'kids-safari-adventure-rug',
    price: 179,
    originalPrice: 229,
    discount: 22,
    rating: 4.7,
    reviews: 67,
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/a67e13ee-e75d-4bc6-86a2-b23678bfa50e.jpg',
    images: ['https://miaoda-site-img.s3cdn.medo.dev/images/a67e13ee-e75d-4bc6-86a2-b23678bfa50e.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/5723b282-56ac-4ecb-8ca4-d887a9d46591.jpg'],
    category: 'Kids Rugs',
    material: 'Synthetic',
    color: ['Multi', 'Green', 'Brown'],
    size: '5x7 ft',
    inStock: true,
    stockCount: 20,
    description: 'Bring the wild to your child\'s room with this playful safari-themed rug. Durable and easy to clean.',
    features: ['Stain-resistant', 'Non-toxic materials', 'Machine washable', 'Vibrant colors'],
    isBestSeller: false,
    isNew: true
  },
  {
    id: '5',
    name: 'Traditional Persian Handloom',
    slug: 'traditional-persian-handloom',
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 5.0,
    reviews: 203,
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/c2947a14-0d88-4a71-a8fe-1e7f9d131af0.jpg',
    images: ['https://miaoda-site-img.s3cdn.medo.dev/images/c2947a14-0d88-4a71-a8fe-1e7f9d131af0.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/2b3a7e5f-4769-4bba-b9a6-445168f54d1c.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/5fdfe7cc-8276-45fb-afe6-d6ee4722d610.jpg'],
    category: 'Handloom Carpets',
    material: 'Pure Wool',
    color: ['Red', 'Navy', 'Gold'],
    size: '10x14 ft',
    inStock: true,
    stockCount: 3,
    description: 'An exquisite handloom carpet featuring traditional Persian motifs. Each piece is a work of art, handcrafted by master weavers.',
    features: ['Hand-knotted', '100% pure wool', 'Heirloom quality', 'Natural dyes'],
    isBestSeller: true,
    isNew: false,
    dealEndTime: '2025-12-31T23:59:59'
  },
  {
    id: '6',
    name: 'Minimalist Jute Runner',
    slug: 'minimalist-jute-runner',
    price: 129,
    rating: 4.5,
    reviews: 45,
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/694bcc35-61c9-467e-adb0-883a076e395f.jpg',
    images: ['https://miaoda-site-img.s3cdn.medo.dev/images/694bcc35-61c9-467e-adb0-883a076e395f.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/694bcc35-61c9-467e-adb0-883a076e395f.jpg'],
    category: 'Area Rugs',
    material: 'Jute',
    color: ['Natural', 'Beige'],
    size: '2.5x8 ft',
    inStock: true,
    stockCount: 30,
    description: 'A natural jute runner perfect for hallways and entryways. Eco-friendly and durable.',
    features: ['100% natural jute', 'Eco-friendly', 'Durable', 'Neutral tone'],
    isBestSeller: false,
    isNew: false
  },
  {
    id: '7',
    name: 'Vintage Distressed Rug',
    slug: 'vintage-distressed-rug',
    price: 279,
    originalPrice: 349,
    discount: 20,
    rating: 4.6,
    reviews: 92,
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/d2f73f4e-2a0b-4031-9ec1-5539cd0d02a6.jpg',
    images: ['https://miaoda-site-img.s3cdn.medo.dev/images/d2f73f4e-2a0b-4031-9ec1-5539cd0d02a6.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/9ab18c7e-547e-4b13-8e2e-a24ce1591dd3.jpg'],
    category: 'Area Rugs',
    material: 'Cotton & Polyester',
    color: ['Grey', 'Beige', 'Blue'],
    size: '7x10 ft',
    inStock: true,
    stockCount: 12,
    description: 'Vintage-inspired design with a distressed finish for a lived-in, timeless look.',
    features: ['Distressed finish', 'Low pile', 'Easy maintenance', 'Versatile style'],
    isBestSeller: false,
    isNew: false
  },
  {
    id: '8',
    name: 'Plush Cloud Shaggy Rug',
    slug: 'plush-cloud-shaggy-rug',
    price: 319,
    rating: 4.9,
    reviews: 178,
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/e5de9812-9b33-414e-8280-dee55498ce58.jpg',
    images: ['https://miaoda-site-img.s3cdn.medo.dev/images/e5de9812-9b33-414e-8280-dee55498ce58.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/cc6ff666-71e2-4075-8820-174fb2df766d.jpg', 'https://miaoda-site-img.s3cdn.medo.dev/images/89482bc9-b709-4502-873e-b558b5115784.jpg'],
    category: 'Shaggy Rugs',
    material: 'Microfiber',
    color: ['White', 'Light Grey'],
    size: '8x10 ft',
    inStock: true,
    stockCount: 7,
    description: 'Sink your feet into cloud-like comfort with this ultra-plush shaggy rug. Perfect for bedrooms and cozy spaces.',
    features: ['Ultra-soft microfiber', 'High pile', 'Non-slip backing', 'Luxurious feel'],
    isBestSeller: true,
    isNew: true
  }
];

export const categories: Category[] = [
  { id: '1', name: 'Shaggy Rugs', slug: 'shaggy-rugs', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/89482bc9-b709-4502-873e-b558b5115784.jpg', productCount: 24 },
  { id: '2', name: 'Handloom Carpets', slug: 'handloom-carpets', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/2b3a7e5f-4769-4bba-b9a6-445168f54d1c.jpg', productCount: 18 },
  { id: '3', name: 'Area Rugs', slug: 'area-rugs', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/9ab18c7e-547e-4b13-8e2e-a24ce1591dd3.jpg', productCount: 32 },
  { id: '4', name: 'Kids Rugs', slug: 'kids-rugs', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/cb95854d-925a-4c7a-b5a5-22352c11845f.jpg', productCount: 15 },
  { id: '5', name: 'Boho Patterns', slug: 'boho-patterns', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/40fa7758-631a-4d05-bcc8-9bb628a6b590.jpg', productCount: 21 }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    avatar: 'https://miaoda-site-img.s3cdn.medo.dev/images/db35b2e6-4eac-4237-94eb-c1a5adc8f86c.jpg',
    rating: 5,
    text: 'Absolutely love my new rug! The quality is exceptional and it completely transformed my living room. The craftsmanship is evident in every detail.',
    date: '2025-11-15'
  },
  {
    id: '2',
    name: 'James Anderson',
    avatar: 'https://miaoda-site-img.s3cdn.medo.dev/images/cfaa82e7-9dfd-41bd-806c-89be4915b941.jpg',
    rating: 5,
    text: 'Best purchase I\'ve made this year. The rug arrived quickly and exceeded all expectations. The colors are vibrant and the texture is luxurious.',
    date: '2025-11-10'
  },
  {
    id: '3',
    name: 'Emily Chen',
    avatar: 'https://miaoda-site-img.s3cdn.medo.dev/images/09a7b756-49f0-4288-a458-610f491decd5.jpg',
    rating: 4,
    text: 'Beautiful handcrafted rug with amazing attention to detail. It\'s the perfect centerpiece for our dining room. Highly recommend Aristo Weaves and Art!',
    date: '2025-11-05'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Choose the Perfect Rug Size for Your Space',
    slug: 'how-to-choose-perfect-rug-size',
    excerpt: 'Discover the essential guidelines for selecting the right rug dimensions to complement your room layout and furniture arrangement.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/46699e89-3f39-4293-96c0-5a221a9fb36c.jpg',
    author: 'Emma Wilson',
    date: '2025-11-20',
    category: 'Styling Tips',
    tags: ['Interior Design', 'Rug Sizing', 'Home Decor']
  },
  {
    id: '2',
    title: 'The Art of Handloom Weaving: A Timeless Tradition',
    slug: 'art-of-handloom-weaving',
    excerpt: 'Explore the centuries-old craft of handloom weaving and learn about the skilled artisans who create each unique piece.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/0ffbd065-5098-451f-a9b8-1ee59edcdadd.jpg',
    author: 'Michael Roberts',
    date: '2025-11-18',
    category: 'Craftsmanship',
    tags: ['Handloom', 'Artisan', 'Tradition']
  },
  {
    id: '3',
    title: 'Rug Care 101: Maintenance Tips for Longevity',
    slug: 'rug-care-maintenance-tips',
    excerpt: 'Learn the best practices for cleaning and maintaining your rugs to ensure they remain beautiful for years to come.',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/1e676f11-756f-43a4-9270-4e76213b7615.jpg',
    author: 'Lisa Thompson',
    date: '2025-11-12',
    category: 'Maintenance',
    tags: ['Rug Care', 'Cleaning', 'Maintenance']
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What materials are your rugs made from?',
    answer: 'Our rugs are crafted from a variety of premium materials including wool, cotton, silk, jute, and eco-friendly synthetic fibers. Each product page specifies the exact material composition.',
    category: 'Products'
  },
  {
    id: '2',
    question: 'Do you offer free shipping?',
    answer: 'Yes! We offer free shipping on all orders within the continental United States. International shipping rates vary by location.',
    category: 'Shipping'
  },
  {
    id: '3',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all rugs. If you\'re not completely satisfied, you can return your rug for a full refund or exchange. The rug must be in its original condition.',
    category: 'Returns'
  },
  {
    id: '4',
    question: 'How do I clean and maintain my rug?',
    answer: 'Regular vacuuming is recommended for most rugs. For spills, blot immediately with a clean cloth. Professional cleaning is recommended annually for high-traffic areas. Specific care instructions are provided with each rug.',
    category: 'Care'
  },
  {
    id: '5',
    question: 'Are your rugs handmade?',
    answer: 'Many of our rugs are handcrafted by skilled artisans using traditional techniques. Each product description indicates whether the rug is handmade, hand-tufted, hand-knotted, or machine-made.',
    category: 'Products'
  },
  {
    id: '6',
    question: 'How long does delivery take?',
    answer: 'Standard delivery typically takes 5-7 business days. Express shipping options are available at checkout for faster delivery within 2-3 business days.',
    category: 'Shipping'
  },
  {
    id: '7',
    question: 'Can I see the rug before purchasing?',
    answer: 'We offer free fabric swatches for most of our rugs. Contact our customer service team to request samples before making your purchase decision.',
    category: 'Products'
  },
  {
    id: '8',
    question: 'Do you offer custom sizes?',
    answer: 'Yes, we offer custom sizing for select rug collections. Please contact our customer service team with your specific requirements for a personalized quote.',
    category: 'Custom Orders'
  }
];

export const materials = ['Wool', 'Cotton', 'Silk', 'Jute', 'Synthetic', 'Wool Blend', 'Microfiber'];
export const colors = ['Ivory', 'Beige', 'Grey', 'Blue', 'Red', 'Multi', 'Natural', 'White', 'Black'];
export const priceRanges = [
  { label: 'Under $200', min: 0, max: 200 },
  { label: '$200 - $400', min: 200, max: 400 },
  { label: '$400 - $600', min: 400, max: 600 },
  { label: 'Over $600', min: 600, max: 10000 }
];
