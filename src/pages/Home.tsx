import { motion } from "motion/react";
import { ArrowRight, MapPin, Target, CheckCircle2, Trophy, BarChart3, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../lib/meta";
import { ConversionCTA, CONTACT_LINKEDIN, CONTACT_TWITTER, CONTACT_TIKTOK, CONTACT_PINTEREST, CONTACT_GMB } from "../components/SharedUI";

export default function Home() {
  useSEO({
    title: "Expert Local SEO & Citation Services | Digital Marketing With Irtaza",
    description: "Rank higher on Google Maps and search results. Professional local SEO, citations building, and web development services by Irtaza.",
    keywords: "local SEO, citation building, web development, digital marketing, Irtaza, google business profile"
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Digital Marketing With Irtaza",
    "url": "https://digitalmarketingwithirtaza.com",
    "logo": "https://digitalmarketingwithirtaza.com/logo.png",
    "sameAs": [
      CONTACT_LINKEDIN,
      CONTACT_TWITTER,
      CONTACT_TIKTOK,
      CONTACT_PINTEREST,
      CONTACT_GMB
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923233882123",
      "contactType": "customer service"
    },
    "description": "Professional Local SEO, manual citation building, and website development globally and in USA.",
    "priceRange": "$$"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 text-center z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border border-brand-cyan/20 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-6 tracking-tight max-w-5xl mix-blend-screen leading-tight"
        >
          Dominate Your <br className="hidden md:block"/>
          <span className="text-gradient">Local Market</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-300 max-w-3xl mb-12 font-medium"
        >
          We build high-authority local citations, optimize your Google profile, and develop fast websites that convert visitors into paying clients.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="w-full flex flex-col items-center gap-6 mt-6"
        >
          <ConversionCTA />
          
          <a href={CONTACT_GMB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-gold text-brand-gold px-6 py-3 rounded-full font-bold transition-all text-sm group shadow-[0_0_15px_rgba(255,215,0,0.1)]">
             <MapPin className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /> View Our Google Business Profile
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8">
          <Link to="/citation-sites-list" className="text-brand-cyan hover:underline text-sm font-bold flex items-center justify-center gap-2">
            Or View Free Citation Sites List <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Trust Elements */}
      <section className="py-12 border-y border-white/5 bg-black/20 z-10 relative">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 font-medium mb-6 uppercase tracking-widest text-sm text-center">Trusted metrics</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-24 opacity-80">
               <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-white mb-2">500+</span>
                  <span className="text-slate-400 text-sm">Citations Built</span>
               </div>
               <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-white mb-2">100%</span>
                  <span className="text-slate-400 text-sm">Manual Submission</span>
               </div>
               <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-white mb-2">99%</span>
                  <span className="text-slate-400 text-sm">Client Satisfaction</span>
               </div>
            </div>
         </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Our Core <span className="text-gradient">Services</span></h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Comprehensive SEO solutions designed to establish your brand's digital authority.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <MapPin className="w-10 h-10 text-brand-cyan mb-6" />,
                title: "Local Citations",
                desc: "100% manual directory submissions to build high NAP consistency and boost local rankings.",
                link: "/services/citation-building"
              },
              {
                icon: <Target className="w-10 h-10 text-brand-gold mb-6" />,
                title: "Google Business Profile",
                desc: "Complete setup, verification guidance, and optimization for the Google Map Pack.",
                link: "/services/google-business-profile"
              },
              {
                icon: <Globe2 className="w-10 h-10 text-blue-400 mb-6" />,
                title: "Website Development",
                desc: "Fast, SEO-ready websites that provide a strong foundation for future lead generation.",
                link: "/services/website-development"
              }
            ].map((s, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                key={i} className="glass-card p-10 rounded-3xl hover:border-brand-cyan/50 transition-colors group"
              >
                {s.icon}
                <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">{s.desc}</p>
                <Link to={s.link} className="text-brand-cyan text-sm font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center">
             <Link to="/services" className="px-8 py-3 glass rounded-full font-bold text-white hover:bg-white/10 transition-colors">
                View All Services
             </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 relative z-10 overflow-hidden">
        <div className="absolute top-1/2 right-[-20%] w-[50%] h-[50%] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Why Partner With <span className="text-gradient">Mr. Irtaza</span>?</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We focus on proven, white-hat SEO tactics that provide long-term results, preparing your business for both organic traffic growth and highly optimized Google Ads campaigns.
            </p>
            
            <div className="flex flex-col gap-5">
               {["High Authority Backlinks & Citations", "E-E-A-T Compliant Content Strategies", "No Spam, Real Manual Work", "Conversion-Ready Landing Pages"].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0">
                       <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="lg:w-1/2 glass-card p-12 rounded-[3rem] border-brand-cyan/20 relative">
             <Trophy className="w-16 h-16 text-brand-gold mb-6" />
             <h3 className="text-2xl font-bold text-white mb-4">The Final Goal: ROI</h3>
             <p className="text-slate-300 mb-8">
               Our digital architecture isn't just about rankings. We structure your site to track conversions, index perfectly on Google Search Console, and convert expensive Google Ads clicks into paying customers.
             </p>
             <ConversionCTA />
          </div>
        </div>
      </section>
    </>
  );
}
