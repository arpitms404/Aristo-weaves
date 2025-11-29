import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Heart, Share2, Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { productsApi } from "@/db/api";
import type { Product } from "@/types/database";

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = await productsApi.getAll();
        const foundProduct = allProducts.find(p => p.slug === slug);
        setProduct(foundProduct || null);
        if (foundProduct) {
          const related = allProducts
            .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

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

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-muted rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent hover:border-border"
                  }`}
                >
                  <img
                    src={image}
                    alt={`₹{product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <Link
                to={`/category/₹{product.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-primary hover:underline"
              >
                {product.category}
              </Link>
            </div>

            <h1 className="text-3xl xl:text-4xl font-serif font-bold text-foreground mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-foreground">
                ₹{product.price}
              </span>
              {product.original_price && (
                <>
                  <span className="text-2xl text-muted-foreground line-through">
                    ₹{product.original_price}
                  </span>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Save {product.discount}%
                  </span>
                </>
              )}
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                {product.in_stock ? (
                  <>
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      In Stock ({product.stock_count} available)
                    </span>
                  </>
                ) : (
                  <span className="text-sm font-medium text-destructive">
                    Out of Stock
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Size: {product.size}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-6 py-2 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock_count || 99, quantity + 1))}
                  disabled={quantity >= (product.stock_count || 99)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={!product.in_stock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-secondary hover:bg-secondary/90"
                disabled={!product.in_stock}
              >
                Buy Now
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Reviews ({product.reviews})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-8">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Product Details
              </h3>
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
              {product.features && (
                <>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Features
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="grid grid-cols-2 gap-4 bg-muted p-6 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Material</p>
                  <p className="font-medium text-foreground">{product.material}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Size</p>
                  <p className="font-medium text-foreground">{product.size}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Color</p>
                  <p className="font-medium text-foreground">{product.color.join(', ')}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Category</p>
                  <p className="font-medium text-foreground">{product.category}</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-6">
              <div className="flex items-center gap-8 pb-6 border-b border-border">
                <div className="text-center">
                  <div className="text-5xl font-bold text-foreground mb-2">
                    {product.rating}
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {product.reviews} reviews
                  </p>
                </div>
              </div>
              <div className="text-center py-12 text-muted-foreground">
                <p>Customer reviews will be displayed here.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl xl:text-3xl font-serif font-bold text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;