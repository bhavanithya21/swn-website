import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { blogPosts } from "@/content/posts";

const TagPage = () => {
  const { tag } = useParams<{ tag: string }>();

  const formatTagTitle = (slug: string | undefined) => {
  if (!slug) return "";
  return slug
  .split("-")
  .map((word) => {
      if (word.length === 0) return word;
      
      // 2. Take the first character and make it Uppercase
      // 3. Take the REST of the word exactly as it is (slice(1))
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};  

  // Filter and Sort posts based on the tag from the URL
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((post) =>
        post.tags?.some((t) => t.toLowerCase() === tag?.toLowerCase())
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [tag]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <div className="py-16 md:py-20 fade-in">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-foreground">
              {formatTagTitle(tag)}
            </h1>
            <p className="mt-3 text-muted-foreground">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} tagged with this topic.
            </p>
            <Link 
              to="/blogs" 
              className="mt-4 inline-block text-sm text-primary hover:underline"
            >
              ← Back to all blogs
            </Link>
          </div>

          {/* Blog List */}
          <div className="space-y-10">
            {filteredPosts.length === 0 ? (
              <p className="text-center text-muted-foreground py-12">
                No posts found with this tag yet.
              </p>
            ) : (
              filteredPosts.map((post) => (
                <article key={post.slug} className="group relative">
                  {/* Main Link for the Title and Excerpt */}
                  <Link to={`/blog/${post.slug}`} className="block">
                    <h2 className="font-sans text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </Link>

                  {/* Metadata and Tag Links */}
                  <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground relative z-10">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    
                    {post.tags && post.tags.length > 0 && (
                      <>
                        <span>·</span>
                        <div className="flex gap-2 flex-wrap">
                          {post.tags.map((t, index) => (
                            <Link
                              key={index}
                              to={`/tags/${t}`}
                              onClick={(e) => e.stopPropagation()}
                              className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-medium hover:bg-primary hover:text-white transition-colors"
                            >
                              {t}
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

export default TagPage;