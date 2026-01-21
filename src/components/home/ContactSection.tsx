import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent! I'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-16 border-t border-border bg-card">
      <div className="container max-w-xl text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        
        <h2 className="font-sans text-2xl md:text-3xl font-semibold text-foreground mb-3">
          Get in Touch
        </h2>
        
        <p className="text-muted-foreground mb-8">
          Questions, ideas, or just want to say hi? I'd love to hear from you.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Input
                type="text"
                placeholder="Your name"
                required
                className="bg-background"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email"
                required
                className="bg-background"
              />
            </div>
          </div>
          
          <div>
            <Textarea
              placeholder="Your message"
              required
              rows={4}
              className="bg-background resize-none"
            />
          </div>
          
          <div className="text-center">
            <Button type="submit" disabled={isSubmitting} className="font-sans">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
