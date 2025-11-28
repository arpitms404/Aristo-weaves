import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Truck, RotateCcw, Award, Headphones, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import { products, categories, testimonials, blogPosts } from "@/data/mockData";

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 15,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const latestProducts = products.filter(p => p.isNew).slice(0, 4);
  const popularProducts = products.filter(p => p.rating >= 4.7).slice(0, 4);
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);
  const dealProduct = products.find(p => p.dealEndTime);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[500px] xl:h-[600px] bg-muted overflow-hidden">
        <img
          src="https://miaoda-site-img.s3cdn.medo.dev/images/969443d3-4df1-45c5-9b69-062761bb4845.jpg"
          alt="Luxury handcrafted rugs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 xl:px-8 w-full">
            <div className="max-w-2xl text-white fade-in-up">
              <h1 className="text-4xl xl:text-6xl font-serif font-bold mb-4 leading-tight">
                Timeless Textures,<br />Handcrafted Elegance
              </h1>
              <p className="text-lg xl:text-xl mb-8 text-white/90">
                Discover premium rugs woven with artisan craftsmanship and natural fibers
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="flex flex-col xl:flex-row items-center gap-4 text-center xl:text-left">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On all orders</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-4 text-center xl:text-left">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <RotateCcw className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day policy</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-4 text-center xl:text-left">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Handmade Quality</h3>
                <p className="text-sm text-muted-foreground">Artisan crafted</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-4 text-center xl:text-left">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="relative h-64 xl:h-80 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/9e854311-5b44-4716-ad0c-6200cfa800ac.jpg"
                alt="New Collection"
                className="w-full h-full object-cover product-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl xl:text-3xl font-serif font-bold text-white mb-2">
                  New Collection
                </h3>
                <p className="text-white/90 mb-4">Discover our latest arrivals</p>
                <Button asChild variant="secondary" className="w-fit">
                  <Link to="/shop?filter=new">Shop Now</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 xl:h-80 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/330e2b8f-660c-4912-a3ff-8309b7471086.jpg"
                alt="Sale"
                className="w-full h-full object-cover product-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl xl:text-3xl font-serif font-bold text-white mb-2">
                  Up to 25% Off
                </h3>
                <p className="text-white/90 mb-4">Limited time offer on selected rugs</p>
                <Button asChild variant="secondary" className="w-fit">
                  <Link to="/shop?filter=sale">Shop Sale</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-serif font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of handcrafted rugs
            </p>
          </div>

          <Tabs defaultValue="latest" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="latest">Latest</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="bestselling">Best Selling</TabsTrigger>
            </TabsList>
            <TabsContent value="latest">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {latestProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="popular">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {popularProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="bestselling">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {bestSellers.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {dealProduct && (
        <section className="py-16 xl:py-24">
          <div className="max-w-7xl mx-auto px-4 xl:px-8">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="aspect-square xl:aspect-auto bg-muted">
                  <img
                    src={dealProduct.image}
                    alt={dealProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 xl:p-12 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full w-fit mb-4">
                    Deal of the Day
                  </div>
                  <h2 className="text-3xl xl:text-4xl font-serif font-bold text-foreground mb-4">
                    {dealProduct.name}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {dealProduct.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-foreground">
                      ${dealProduct.price}
                    </span>
                    {dealProduct.originalPrice && (
                      <span className="text-2xl text-muted-foreground line-through">
                        ${dealProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        Hurry! Offer ends in:
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      <div className="bg-muted rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-foreground">
                          {timeLeft.days}
                        </div>
                        <div className="text-xs text-muted-foreground">Days</div>
                      </div>
                      <div className="bg-muted rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-foreground">
                          {timeLeft.hours}
                        </div>
                        <div className="text-xs text-muted-foreground">Hours</div>
                      </div>
                      <div className="bg-muted rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-foreground">
                          {timeLeft.minutes}
                        </div>
                        <div className="text-xs text-muted-foreground">Mins</div>
                      </div>
                      <div className="bg-muted rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-foreground">
                          {timeLeft.seconds}
                        </div>
                        <div className="text-xs text-muted-foreground">Secs</div>
                      </div>
                    </div>
                  </div>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link to={`/product/${dealProduct.slug}`}>Shop Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 xl:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-serif font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect rug for every room and style
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-serif font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real reviews from satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-serif font-bold text-foreground mb-4">
              From Our Blog
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tips, inspiration, and stories about rugs and home decor
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;