import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Check, Heart } from "lucide-react";

const Pricing = () => {
  return (
    <Layout>
      <div className="py-16 md:py-24 fade-in">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-foreground">
              Pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Most content here is free. Pricing exists only to support deeper work.
            </p>
          </div>

          {/* Free Content - Emphasized */}
          <div className="mb-16 p-8 rounded-lg border-2 border-primary/20 bg-card text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-sans text-2xl font-semibold text-foreground mb-3">
              Free Forever
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              All blog posts, tutorials, and guides are completely free.<br /> 
              No sign-up required, no paywalls, no gatekeeping.
            </p>
            <ul className="inline-flex flex-col items-start gap-3 text-left text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                All blog posts and articles
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Code examples and snippets
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Conceptual explanations
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                No account required
              </li>
            </ul>
          </div>


          {/* Optional Support */}
          {/* <div className="text-center mb-12">
            <h2 className="font-sans text-xl font-semibold text-foreground mb-6">
              Ways to Support Deeper Work
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              If you find this content valuable and want to support its creation, here are some optional ways to contribute.
            </p>
          </div>*/}

          {/* Premium Notebooks */}
          {/* <div className="grid gap-6 md:grid-cols-2 mb-16">
            
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-sans text-lg font-semibold text-foreground mb-2">
                Premium Notebooks
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interactive Jupyter notebooks with detailed implementations, visualizations, and exercises.
              </p>
              <p className="text-2xl font-sans font-bold text-foreground">
                $19
                <span className="text-sm font-normal text-muted-foreground ml-1">
                  / notebook
                </span>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Coming soon
              </p>
            </div>*/}

            {/* Deep-Dive Courses */}
            {/*<div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-sans text-lg font-semibold text-foreground mb-2">
                Deep-Dive Courses
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive video courses with hands-on projects, from fundamentals to advanced topics.
              </p>
              <p className="text-2xl font-sans font-bold text-foreground">
                $99
                <span className="text-sm font-normal text-muted-foreground ml-1">
                  / course
                </span>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Coming soon
              </p>
            </div>
          </div>

          {/* Closing message */}
          <div className="text-center p-8 rounded-lg bg-muted/50">
            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
              I believe education should be accessible. The free content will always remain the heart of this project. Paid options are simply a way for those who want to go deeper and support the creation of more free content.
            </p>
            <Link
              to="/blogs"
              className="inline-block mt-6 text-primary hover:text-primary/80 transition-colors font-sans text-sm underline underline-offset-4"
            >
              Start reading for free →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
