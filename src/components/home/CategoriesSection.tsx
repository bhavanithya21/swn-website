import { Link } from "react-router-dom";
import { categories } from "@/content/posts";
import { ArrowRight, Signal } from "lucide-react";

const CategoriesSection = () => {
  const categoryEntries = Object.entries(categories);

  return (
    <section className="py-20 border-t border-border bg-gradient-to-b from-transparent to-accent/5">
      <div className="container max-w-5xl">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          What would you like to explore?
        </h2>
        <div className="h-1.5 w-12 bg-primary mx-auto rounded-full mb-12"></div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {categoryEntries.map(([key, category]) => (
            <Link
              key={key}
              to={`/blogs?category=${key}`}
              className="group relative p-8 rounded-3xl border border-primary/10 bg-gradient-to-br from-background to-primary/[0.02] hover:to-primary/[0.05] transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
            >
              {/* Subtle background decoration */}
              <div className="absolute -right-4 -top-4 text-primary/5 group-hover:text-primary/10 transition-colors">
                <Signal size={100} />
              </div>

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Signal className="h-5 w-5" />
                </div>
                
                <h3 className="font-sans text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {category.description}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-primary">
                  Explore Posts
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;