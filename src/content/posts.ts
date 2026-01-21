export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: "dsp-basics" | "dsp-everyday" | "embedded-dsp";
  excerpt: string;
  content: string;
  tags: string[];
  notebookUrl?: string;
}

export const categories = {
  "dsp-basics": {
    name: "DSP Basics",
    description: "Foundations of signal processing concepts explained.",
  },
  "dsp-everyday": {
    name: "DSP in Everyday Life",
    description: "Signal processing behind everyday things in life.",
  },
  "embedded-dsp": {
    name: "Embedded DSP",
    description: "Signal processing on Raspberry Pi, microcontrollers, and FPGAs",
  },
  "ai-dsp": {
    name: "AI in DSP",
    description: "How machine learning makes signal processing smarter, faster, and adaptive.",
  },  
};

// Simple frontmatter parser
function parseFrontmatter(markdown: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content: markdown };
  }
  
  const frontmatter = match[1];
  const content = match[2];
  
  const data: any = {};
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      data[key.trim()] = valueParts.join(':').trim();
    }
  });
  
  return { data, content };
}

// Auto-import all .md files from src/blogs/
const modules = import.meta.glob('@/blogs/*.md', { as: 'raw', eager: true });

export const blogPosts: BlogPost[] = Object.values(modules).map((mdContent) => {
  const { data, content } = parseFrontmatter(mdContent);  
  // Parse tags from comma-separated string
  const tags = data.tags 
    ? data.tags.split(',').map((tag: string) => tag.trim())
    : [];   
  return {
    slug: data.slug,
    title: data.title,
    date: data.date,
    category: data.category as "dsp-basics" | "dsp-everyday" | "embedded-dsp",
    excerpt: data.excerpt,
    content: content.trim(),
    tags: tags,
    notebookUrl: data.notebookUrl || null,
  };
});

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "all") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
};

export const getRecentPosts = (count: number = 5): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};