import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 fade-in">
      <div className="container max-w-3xl text-center">
        <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Curious about the world?
          <br />
          <span className="text-muted-foreground">Me too.</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Let's understand this world through signals by breaking down complex systems through signal processing. <br />
          Learn with theory, examples, and Jupyter notebook demos.
        </p>
        
        <div className="mt-10">
          <Button asChild size="lg" className="font-sans">
            <Link to="/blogs">
              Explore the Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
