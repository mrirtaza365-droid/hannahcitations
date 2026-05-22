import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ExternalLink, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useSEO } from "../lib/meta";
import { ConversionCTA } from "../components/SharedUI";
import { citationData } from "../data/citationData";

export default function CitationSites() {
  useSEO({
    title: "100+ Best Free Business Listing Sites USA (2026 List) | Mr. Irtaza",
    description: "Discover the top free local citation sites and high DA directories to boost your local SEO. Complete filterable list for your Google Business Profile ranking.",
    keywords: "business listing sites USA, local citation sites, high DA directories list, free citation sites"
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", ...new Set(citationData.map(c => c.category))];

  const filteredCitations = useMemo(() => {
    return citationData.filter(c => {
      const matchesSearch = c.source.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === "All" || c.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, filterCategory]);

  return (
    <>
      <section className="pt-32 pb-16 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            100+ Best <span className="text-brand-cyan">Free Citation Sites</span> (USA)
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Building local citations across high Domain Authority (DA) directories is one of the most powerful ways to rank your Google Business Profile. Use our free, curated list of the best business listing sites in the USA to start building geographic authority today.
          </p>
          <div className="flex justify-center">
            <ConversionCTA className="glass-card p-6 rounded-3xl" />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 glass p-8 rounded-3xl border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><BookOpen className="text-brand-cyan"/> What Are Citation Sites?</h2>
            <p className="text-slate-300 mb-4">
              A local citation is any online mention of the name, address, and phone number (NAP) for a local business. They can occur on local business directories, on websites and apps, and on social platforms. Consistent mentions across high-quality platforms signal trust and relevance to search engines like Google.
            </p>
            <p className="text-slate-300 mb-6">
              When Google sees your precise NAP data repeated on credible sites (like Yelp, Houzz, or Nextdoor), it validates your business's legitimacy, significantly improving your chances of ranking in the coveted Local Map Pack. Need help building these? Check out our <Link to="/services/citation-building" className="text-brand-cyan underline">professional citation building services</Link>.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search directory..."
                className="w-full bg-black/40 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder-slate-400 focus:outline-none focus:border-brand-cyan transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${filterCategory === cat ? 'bg-brand-cyan text-blue-950' : 'glass text-white hover:bg-white/10'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-5 font-bold text-slate-300">Directory</th>
                    <th className="p-5 font-bold text-slate-300">Domain Authority</th>
                    <th className="p-5 font-bold text-slate-300">Category</th>
                    <th className="p-5 font-bold text-slate-300 text-right">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCitations.map((cit, i) => (
                    <motion.tr 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                      key={cit.id} className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-5 font-medium text-white flex items-center gap-3">
                         <span className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center text-xs text-brand-cyan">{cit.id}</span>
                         {cit.source}
                      </td>
                      <td className="p-5">
                        <span className="bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-xs font-bold font-mono">DA {cit.da}</span>
                      </td>
                      <td className="p-5 text-slate-400 text-sm">{cit.category}</td>
                      <td className="p-5 text-right flex justify-end">
                        <a href={cit.url} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full text-slate-300 hover:text-brand-cyan hover:bg-white/10 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                  {filteredCitations.length === 0 && (
                     <tr>
                        <td colSpan={4} className="p-8 text-center text-slate-400">No directories found matching your criteria.</td>
                     </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl border-white/5">
              <h3 className="text-xl font-bold text-white mb-3">Why are local citation sites important for SEO?</h3>
              <p className="text-slate-300">Citations provide Google with consistent data about your business (Name, Address, Phone). The more high-authority sites that agree on this data, the higher your trust score, directly improving local Map Pack rankings.</p>
            </div>
            <div className="glass p-8 rounded-2xl border-white/5">
              <h3 className="text-xl font-bold text-white mb-3">Can I list my business on these directories for free?</h3>
              <p className="text-slate-300">Yes, most of the high DA directories on our list offer a free basic profile. However, manually creating accounts, verifying emails, and optimizing each profile correctly can take hundreds of hours.</p>
            </div>
            <div className="glass p-8 rounded-2xl border-white/5">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><ShieldCheck className="text-brand-cyan"/> How can Mr. Irtaza's team help?</h3>
              <p className="text-slate-300">We offer a 100% manual citation building service. We ensure perfect NAP consistency, add photos, description, and optimize your listings to save you time and maximize SEO impact.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <ConversionCTA className="glass p-10 rounded-3xl" />
          </div>
        </div>
      </section>
    </>
  );
}
