import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 xl:px-8 text-center">
          <h1 className="text-3xl xl:text-5xl font-serif font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  required
                  className="mt-2"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Artisan Lane<br />
                      Design District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@exorarug.com<br />
                      support@exorarug.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Visit Our Showroom
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Experience our rugs in person. Our showroom features our complete collection and our expert staff can help you find the perfect rug for your space.
              </p>
              <Button variant="outline" className="w-full">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 h-96 bg-muted rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Map placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;