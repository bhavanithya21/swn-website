import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // This is crucial for styling!
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Layout from "@/components/layout/Layout";
import { getPostBySlug } from "@/content/posts";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <article className="py-12 md:py-16 fade-in">
        <div className="container max-w-3xl">
          {/* Back link */}
          <Link
            to="/blogs"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-10 pb-10 border-b border-border">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.tags?.length > 0 && (
                <>
                  <span>·</span>
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map((tag, index) => (
                      <Link
                        key={index}
                        to={`/tags/${tag}`}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Post Content */}
          <div className="prose mx-auto">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeHighlight, rehypeKatex]}
              components={{
                h1: ({ children }) => (
                  <h1 className="font-sans text-3xl md:text-4xl font-bold mb-6 mt-12 text-foreground">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-sans text-2xl md:text-3xl font-semibold mb-4 mt-10 text-foreground">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-sans text-xl md:text-2xl font-semibold mb-3 mt-8 text-foreground">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-6 leading-relaxed text-foreground">
                    {children}
                  </p>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }) => (
                  <ul className="mb-6 pl-6 list-disc space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-6 pl-6 list-decimal space-y-2">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-foreground">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary/30 pl-6 italic text-muted-foreground my-6">
                    {children}
                  </blockquote>
                ),
                code: ({ className, children }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                        {children}
                      </code>
                    );
                  }
                  return <code className={className}>{children}</code>;
                },
                pre: ({ children }) => (
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6 text-sm">
                    {children}
                  </pre>
                ),
                hr: () => <hr className="border-border my-10" />,
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">
                    {children}
                  </strong>
                ),
                em: ({ children }) => <em className="italic">{children}</em>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Post Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            
            {/* GO TO NOTEBOOK BUTTON SECTION */}
            {post.notebookUrl && (
              <div className="mb-12 p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:border-primary/40">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Code2 className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Hands-on Learning</h4>
                    <p className="text-sm text-muted-foreground">Experiment with the code to understand the concept.</p>
                  </div>
                </div>
                
                <a 
                  href={post.notebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
                >
                  Go to the Notebook
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            <Link
              to="/blogs"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </footer>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;