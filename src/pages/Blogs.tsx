import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogPosts, categories } from "@/content/posts";
import { cn } from "@/lib/utils";

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filteredPosts]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleCategoryClick = (category: string) => {
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const categoryButtons = [
    { key: "all", name: "All" },
    ...Object.entries(categories).map(([key, cat]) => ({
      key,
      name: cat.name,
    })),
  ];

  return (
    <Layout>
      <div className="py-16 md:py-20 fade-in">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-foreground">
              Blogs
            </h1>
            <p className="mt-3 text-muted-foreground">
              Exploring signals, systems, and the technology around us.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categoryButtons.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryClick(cat.key)}
                className={cn(
                  "px-4 py-2 text-sm font-sans font-medium rounded-full border transition-all duration-200",
                  activeCategory === cat.key
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Blog List */}
          <div className="space-y-10">
            {sortedPosts.length === 0 ? (
              <p className="text-center text-muted-foreground py-12">
                No posts found in this category yet.
              </p>
            ) : (
              sortedPosts.map((post) => (
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
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
