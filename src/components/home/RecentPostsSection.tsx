import { Link } from "react-router-dom";
import { getRecentPosts, categories } from "@/content/posts";
import { ArrowRight } from "lucide-react";

const RecentPostsSection = () => {
  const recentPosts = getRecentPosts(4);  

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-16 border-t border-border">
      <div className="container max-w-3xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-sans text-2xl md:text-3xl font-semibold text-foreground">
            Recent Posts
          </h2>
          <Link
            to="/blogs"
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
          >
            View all
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
        
        <div className="space-y-8">
          {recentPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-sans text-lg font-semibold text-foreground hover:text-primary transition-colors hover-underline inline">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                  </div>
                </div>
              </Link>

              <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                <time dateTime={post.date}>{formatDate(post.date)}</time>                                            
                {post.tags?.length > 0 && (
                  <>
                    <span>·</span>
                    <div className="flex gap-2 flex-wrap">                      
                      {post.tags.map((tag, index) => (
                        <Link
                        key={index}
                        to={`/tags/${tag}`}
                        onClick={(e) => e.stopPropagation()}
                        className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-medium hover:bg-primary hover:text-white transition-colors">                        
                          {tag}
                        </Link>                        
                      ))}
                    </div>
                  </>
                )}
              </div>              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPostsSection;
