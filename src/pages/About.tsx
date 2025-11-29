import React from "react";
import { Award, Users, Globe, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 xl:px-8 text-center">
          <h1 className="text-3xl xl:text-5xl font-serif font-bold text-foreground mb-4">
            About Aristo Weaves and Art
          </h1>
          <p className="text-lg text-muted-foreground">
            Crafting timeless elegance through artisan tradition
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a passion for preserving traditional craftsmanship, Aristo Weaves and Art has been bringing the finest handcrafted rugs to homes around the world for over two decades.
              </p>
              <p>
                Each rug in our collection tells a story of skilled artisans who have perfected their craft over generations. We work directly with master weavers, ensuring fair trade practices and supporting traditional weaving communities.
              </p>
              <p>
                Our commitment to quality, authenticity, and sustainability drives everything we do. From selecting the finest natural fibers to the final inspection, every step is carefully managed to deliver rugs that will be treasured for generations.
              </p>
            </div>
          </div>
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src="https://miaoda-site-img.s3cdn.medo.dev/images/f4158980-d010-4247-b729-a6cdab094106.jpg"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            The Art of Handloom Weaving
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/3b5bf9ab-a459-410a-80ab-527496f71d39.jpg"
                alt="Weaving Process 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/eafd66fa-4347-430c-abbd-8514c0a26a28.jpg"
                alt="Weaving Process 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/7c3bb528-a556-46c8-ba11-02d7d7fe2726.jpg"
                alt="Weaving Process 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              Our artisans use time-honored techniques passed down through generations. Each rug is meticulously hand-knotted or hand-tufted, with attention to every detail. The process can take weeks or even months, depending on the complexity of the design and size of the rug.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-24">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">20+</h3>
            <p className="text-muted-foreground">Years of Excellence</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">500+</h3>
            <p className="text-muted-foreground">Skilled Artisans</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">50+</h3>
            <p className="text-muted-foreground">Countries Served</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">10k+</h3>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Quality
              </h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every rug is inspected to meet our exacting standards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Sustainability
              </h3>
              <p className="text-muted-foreground">
                We use natural, eco-friendly materials and support sustainable practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Fair Trade
              </h3>
              <p className="text-muted-foreground">
                We ensure fair wages and working conditions for all our artisan partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;