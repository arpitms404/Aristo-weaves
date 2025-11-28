import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/mockData";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop", hasMegaMenu: true },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8 flex-1">
            <div className="relative flex-1 max-w-md xl:block hidden">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for rugs..."
                className="pl-10 bg-muted border-border"
              />
            </div>
          </div>

          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl xl:text-3xl font-serif font-bold text-foreground tracking-wide">
              Exora Rug
            </h1>
          </Link>

          <div className="flex items-center gap-4 xl:gap-6 flex-1 justify-end">
            <Button variant="ghost" size="icon" className="hidden xl:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden xl:flex relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <nav className="hidden xl:flex items-center justify-center gap-8 pb-4 border-t border-border pt-4">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => link.hasMegaMenu && setIsMegaMenuOpen(true)}
              onMouseLeave={() => link.hasMegaMenu && setIsMegaMenuOpen(false)}
            >
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
              {link.hasMegaMenu && isMegaMenuOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-screen max-w-4xl">
                  <div className="bg-card border border-border rounded-lg shadow-lg p-8 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-5 gap-6">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/category/${category.slug}`}
                          className="group text-center"
                        >
                          <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-3 overflow-hidden group-hover:ring-2 group-hover:ring-primary transition-all">
                            <img
                              src={category.image}
                              alt={category.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                            {category.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {category.productCount} items
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {isMenuOpen && (
          <nav className="xl:hidden py-4 border-t border-border">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for rugs..."
                  className="pl-10 bg-muted border-border"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
