import React from "react";
import { MessageSquare, Send, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/mockData";

const FAQ: React.FC = () => {
  const faqCategories = Array.from(new Set(faqs.map(f => f.category)));

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 xl:px-8 text-center">
          <h1 className="text-3xl xl:text-5xl font-serif font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our rugs and services
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 xl:px-8 py-12">
        <div className="space-y-8">
          {faqCategories.map(category => (
            <div key={category}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                {category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs
                  .filter(faq => faq.category === category)
                  .map(faq => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium text-foreground">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Submit a Task
              </h3>
              <p className="text-sm text-muted-foreground">
                Need help with something specific? Submit a support task and we'll get back to you.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Send Message
              </h3>
              <p className="text-sm text-muted-foreground">
                Have a question? Send us a message and our team will respond promptly.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Experience
              </h3>
              <p className="text-sm text-muted-foreground">
                Visit our showroom to experience our rugs in person and get expert advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;