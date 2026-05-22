import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { useSEO } from "../lib/meta";
import { ConversionCTA } from "../components/SharedUI";

const blogPosts = [
  {
    slug: "what-are-citation-sites",
    title: "What Are Citation Sites? The Ultimate Local SEO Guide",
    excerpt: "Learn why business listing sites matter and how to build accurate NAP citations for the Google Map Pack.",
    date: "May 20, 2026"
  },
  {
    slug: "how-to-rank-google-business-profile",
    title: "How to Rank Your Google Business Profile in 2026",
    excerpt: "A step-by-step framework for optimizing your GBP, managing reviews, and dominating local search.",
    date: "May 15, 2026"
  },
  {
    slug: "local-seo-guide-for-beginners",
    title: "Local SEO Guide for Beginners: Start Here",
    excerpt: "New to local search marketing? Understand the fundamentals of localized content, backlinking, and directory submissions.",
    date: "May 10, 2026"
  }
];

export function BlogIndex() {
  useSEO({
    title: "Local SEO Blog & Marketing Guides | Mr. Irtaza",
    description: "Read the latest guides on local SEO, citation building, and website development.",
    keywords: "local SEO guide, google business profile tips, digital marketing blog"
  });

  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto z-10 relative">
      <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 text-center">
        SEO & Marketing <span className="text-brand-cyan">Insights</span>
      </h1>
      <p className="text-lg text-slate-300 mb-16 text-center">Expert strategies to improve your online visibility and drive revenue.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.slug} className="glass-card p-8 rounded-3xl flex flex-col h-full hover:border-[#1dbf73]/50 transition-colors">
             <div className="text-xs text-brand-cyan font-bold mb-3">{post.date}</div>
             <h2 className="text-xl font-bold text-white mb-4 line-clamp-2">{post.title}</h2>
             <p className="text-slate-400 mb-8 flex-grow">{post.excerpt}</p>
             <Link to={`/blog/${post.slug}`} className="text-brand-cyan hover:text-white transition-colors font-bold flex items-center gap-2 mt-auto">
                Read Article <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-20 glass p-10 rounded-3xl border-white/5 text-center max-w-3xl mx-auto">
         <h3 className="text-2xl font-bold text-white mb-4">Want us to handle the SEO instead?</h3>
         <p className="text-slate-300 mb-8">Skip the reading and let our experts implement proven strategies directly on your business profiles.</p>
         <ConversionCTA />
      </div>
    </div>
  );
}

// In a real app we'd fetch this by slug from a CMS or use dynamic rendering.
// For the sake of the single page app structure we render a proxy blog template.
export function BlogPost() {
  useSEO({
    title: "SEO Guide | Digital Marketing With Irtaza",
    description: "In-depth guide on Local SEO, citations, and website optimization to rank higher on Google.",
  });

  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto z-10 relative text-slate-300">
       <Link to="/blog" className="text-brand-cyan hover:underline flex items-center gap-2 mb-8 font-bold">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Blog
       </Link>
       
       <div className="mb-10 text-brand-cyan font-bold flex items-center gap-2"><BookOpen className="w-5 h-5"/> Featured Guide</div>
       
       <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-8">
         How to Optimize Your Local SEO Architecture for Maximum ROI
       </h1>
       
       <div className="prose prose-invert prose-brand max-w-none space-y-6">
          <p className="text-lg">If you are trying to capture local leads, relying solely on a basic website isn't enough anymore. Google's algorithms reward Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T).</p>
          
          <h2 className="text-2xl font-bold text-white pt-6">1. The Role of High DA Citations</h2>
          <p>Citations on directories like Yelp, Nextdoor, and MerchantCircle provide external validation to Google. A consistent Name, Address, and Phone Number (NAP) across 50 to 100 high Domain Authority sites practically guarantees higher trust metrics.</p>
          
          <h2 className="text-2xl font-bold text-white pt-6">2. Optimizing the Google Business Profile</h2>
          <p>Your GBP should be treated as your secondary homepage. Every field MUST be filled perfectly, categories accurately selected, and services cleanly listed. Interlinking your GBP with your localized landing pages creates a powerful SEO loop.</p>
          
          <h2 className="text-2xl font-bold text-white pt-6">3. Building a Foundation for Paid Ads</h2>
          <p>Organic traffic is fantastic, but preparing for paid acquisition requires similar foundations. Google Ads strict Destination Requirements mean any landing page you send paid traffic to must be completely transparent, highly relevant, load fast, and easily navigable.</p>
       </div>
       
       <div className="mt-16 border-t border-white/10 pt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Implement This Foundation Today</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">We provide the exact manual citation building and local SEO optimization described in our guides.</p>
          <ConversionCTA />
       </div>
    </div>
  );
}
