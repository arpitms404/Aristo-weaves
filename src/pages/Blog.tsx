import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogCard from "@/components/BlogCard";
import { blogApi } from "@/db/api";
import type { BlogPost } from "@/types/database";

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await blogApi.getAll();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const recentPosts = blogPosts.slice(0, 3);
  const categories = Array.from(new Set(blogPosts.map(p => p.category)));
  const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags || [])));

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

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h1 className="text-3xl xl:text-4xl font-serif font-bold text-foreground mb-2">
            Our Blog
          </h1>
          <p className="text-muted-foreground">
            Tips, inspiration, and stories about rugs and home decor
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <div className="space-y-8">
              {blogPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map(post => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(post.created_at).toLocaleDateString()}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <Link
                    key={category}
                    to={`/blog?category=${category}`}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-muted text-sm text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;