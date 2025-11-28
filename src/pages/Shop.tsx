import React, { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import { products, categories, materials, colors, priceRanges } from "@/data/mockData";

const Shop: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) {
      return false;
    }
    if (selectedColors.length > 0 && !product.color.some(c => selectedColors.includes(c))) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-foreground mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map(category => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`cat-${category.id}`}
                checked={selectedCategories.includes(category.name)}
                onCheckedChange={() => toggleCategory(category.name)}
              />
              <Label
                htmlFor={`cat-${category.id}`}
                className="text-sm cursor-pointer"
              >
                {category.name} ({category.productCount})
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-4">Material</h3>
        <div className="space-y-3">
          {materials.map(material => (
            <div key={material} className="flex items-center space-x-2">
              <Checkbox
                id={`mat-${material}`}
                checked={selectedMaterials.includes(material)}
                onCheckedChange={() => toggleMaterial(material)}
              />
              <Label htmlFor={`mat-${material}`} className="text-sm cursor-pointer">
                {material}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-4">Color</h3>
        <div className="grid grid-cols-4 gap-2">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => toggleColor(color)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColors.includes(color)
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border"
              }`}
              style={{
                backgroundColor: color.toLowerCase() === 'multi'
                  ? 'linear-gradient(45deg, red, blue, green)'
                  : color.toLowerCase()
              }}
              title={color}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-4">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={1000}
          step={10}
          className="mb-2"
        />
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setSelectedCategories([]);
          setSelectedMaterials([]);
          setSelectedColors([]);
          setPriceRange([0, 1000]);
        }}
      >
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h1 className="text-3xl xl:text-4xl font-serif font-bold text-foreground mb-2">
            Shop All Rugs
          </h1>
          <p className="text-muted-foreground">
            Discover our complete collection of handcrafted rugs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="xl:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <p className="text-sm text-muted-foreground">
              Showing {sortedProducts.length} of {products.length} products
            </p>
          </div>
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

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <aside className={`xl:block ${showFilters ? 'block' : 'hidden'}`}>
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          <div className="xl:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No products found matching your filters.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedMaterials([]);
                    setSelectedColors([]);
                    setPriceRange([0, 1000]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;