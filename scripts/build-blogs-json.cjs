const fs = require('fs');
const path = require('path');

const txt = fs.readFileSync('extracted_blogs.txt', 'utf8');
const lines = txt.split('\n').map(l => l.trim()).filter(Boolean);

// Find titles and line indexes
const titleMarkers = [
  { id: 1, title: "What Is an AI Development Company — And How Do You Choose the Right One?", slug: "what-is-an-ai-development-company", category: "AI Development", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80", date: "August 24, 2026" },
  { id: 2, title: "Intelligent Solutions: The Future of AI-Powered Business Transformation", slug: "intelligent-solutions-future-of-ai", category: "Intelligent Solutions", image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80", date: "August 20, 2026" },
  { id: 3, title: "Deep-Tech Product Ecosystem: Building Tomorrow's Intelligent Technologies", slug: "deep-tech-product-ecosystem", category: "Deep-Tech Products", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80", date: "August 15, 2026" },
  { id: 4, title: "Visionary Founders Ecosystem: Building Global AI Companies from Day One", slug: "visionary-founders-ecosystem", category: "Visionary Founders", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80", date: "August 10, 2026" },
  { id: 5, title: "Business Brains Circle: Where Global Leaders Shape the Future", slug: "business-brains-circle", category: "Business Brains", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80", date: "August 05, 2026" },
  { id: 6, title: "Industries Impact: How Artificial Intelligence Is Transforming Every Sector", slug: "industries-impact-ai-transformation", category: "Industries Impact", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80", date: "August 01, 2026" }
];

const indices = titleMarkers.map(m => {
  const idx = lines.indexOf(m.title, 13); // skip table of contents
  return { ...m, lineIdx: idx };
});

const blogs = indices.map((m, i) => {
  const start = m.lineIdx;
  const end = i < indices.length - 1 ? indices[i + 1].lineIdx : lines.length;
  const articleLines = lines.slice(start, end);
  
  // Extract excerpt (first 2-3 paragraphs after title)
  const paragraphs = articleLines.slice(1, 6);
  const excerpt = paragraphs.join(' ').substring(0, 260) + '...';
  
  return {
    id: m.id,
    title: m.title,
    slug: m.slug,
    category: m.category,
    date: m.date,
    author: "TECH6SENSE AI Team",
    readTime: `${Math.ceil(articleLines.join(' ').split(/\s+/).length / 200)} min read`,
    image: m.image,
    excerpt: excerpt,
    content: articleLines
  };
});

fs.writeFileSync('src/data/blogs.json', JSON.stringify(blogs, null, 2), 'utf8');
console.log('Successfully generated src/data/blogs.json with', blogs.length, 'articles!');
