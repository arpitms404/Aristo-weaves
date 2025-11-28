import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/mockData";

const Category: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState("featured");

  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p =>
    p.category.toLowerCase().replace(/\s+/g, '-') === slug
  );

  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h1 className="text-3xl xl:text-4xl font-serif font-bold text-foreground mb-2">
            {category.name}
          </h1>
          <p className="text-muted-foreground">
            {categoryProducts.length} products available
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-muted-foreground">
            Showing {sortedProducts.length} products
          </p>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;