import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import type { BlogPost } from "@/types/database";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-card rounded-lg overflow-hidden border border-border hover-lift">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-video bg-muted overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover product-hover"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{post.author}</span>
          </div>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;