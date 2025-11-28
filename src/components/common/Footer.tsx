import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="bg-muted py-8">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-sm text-muted-foreground">
                Get the latest updates on new arrivals and special offers
              </p>
            </div>
            <div className="flex gap-2 w-full xl:w-auto max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-card"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-4">
              Exora Rug
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premium handcrafted carpets and rugs. Timeless textures, natural fibers, and elegant home aesthetics.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/category/shaggy-rugs" className="hover:text-primary transition-colors">
                  Shaggy Rugs
                </Link>
              </li>
              <li>
                <Link to="/category/handloom-carpets" className="hover:text-primary transition-colors">
                  Handloom Carpets
                </Link>
              </li>
              <li>
                <Link to="/category/area-rugs" className="hover:text-primary transition-colors">
                  Area Rugs
                </Link>
              </li>
              <li>
                <Link to="/category/kids-rugs" className="hover:text-primary transition-colors">
                  Kids Rugs
                </Link>
              </li>
              <li>
                <Link to="/category/boho-patterns" className="hover:text-primary transition-colors">
                  Boho Patterns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Account</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/account" className="hover:text-primary transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-primary transition-colors">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-primary transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-primary transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Policy</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/shipping" className="hover:text-primary transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-primary transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center xl:text-left">
              {currentYear} Exora Rug
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="h-6 opacity-60"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-6 opacity-60"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-6 opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
