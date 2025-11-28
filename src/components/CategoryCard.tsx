import React from "react";
import { Link } from "react-router-dom";
import type { Category } from "@/types/database";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group text-center"
    >
      <div className="w-24 h-24 xl:w-32 xl:h-32 rounded-full bg-muted mx-auto mb-4 overflow-hidden group-hover:ring-4 group-hover:ring-primary/20 transition-all">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover product-hover"
        />
      </div>
      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
        {category.name}
      </h3>
      <p className="text-sm text-muted-foreground">
        {category.product_count} items
      </p>
    </Link>
  );
};

export default CategoryCard;