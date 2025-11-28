import React from "react";
import { Star } from "lucide-react";
import type { Testimonial } from "@/data/mockData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border hover-lift">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-foreground">{testimonial.name}</h4>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < testimonial.rating
                    ? "fill-primary text-primary"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {testimonial.text}
      </p>
    </div>
  );
};

export default TestimonialCard;