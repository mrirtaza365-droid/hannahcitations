import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, MessageCircle, Mail } from "lucide-react";
import { useSEO } from "../lib/meta";
import { ConversionCTA, CONTACT_FIVERR, CONTACT_WHATSAPP, CONTACT_EMAIL } from "../components/SharedUI";

export default function Services() {
  useSEO({
    title: "Premium Local SEO & Web Development Services | Mr. Irtaza",
    description: "Discover our range of digital marketing services: Local SEO, Google Business Profile optimization, manual citation building, and fast website development.",
    keywords: "local SEO services, citation building, web development, google business profile setup"
  });

  const services = [
    {
      title: "Local SEO & Map Pack Ranking",
      desc: "Turn your Google Business Profile into a lead generation machine. We optimize every aspect of your local presence to ensure you outrank competitors in your geographic area.",
      features: ["Keyword Research", "On-page Local SEO", "Review Strategy", "Local Content Creation"]
    },
    {
      title: "Manual Citation Building",
      desc: "Consistent NAP (Name, Address, Phone) data is the backbone of local SEO. We manually submit your business to top directories, ensuring perfect accuracy and high-quality backlinks.",
      features: ["100% Manual Submission", "High DA Sites", "No Duplicate Listings", "Detailed Report Provided"]
    },
    {
      title: "Website Development",
      desc: "Your website is your ultimate landing page. We build modern, fast, and SEO-optimized websites that are fully prepared for high-converting Google Ads campaigns.",
      features: ["Mobile-First Design", "Core Web Vitals Optimized", "Clean Architecture", "Analytics Ready"]
    }
  ];

  const pricingPackages = [
    { sites: 50, price: "$5", popular: false },
    { sites: 100, price: "$10", popular: false },
    { sites: 200, price: "$20", popular: true, badge: "Most Popular" },
    { sites: 350, price: "$35", popular: false, badge: "Best Value" }
  ];

  return (
    <>
      <section className="pt-32 pb-16 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            Digital Growth <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-slate-300 mb-12">
            Specialized solutions designed exactly for small-to-medium businesses that want scalable, reliable organic growth and a rock-solid foundation for future paid advertising.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {services.map((svc, idx) => (
             <div key={idx} className="glass-card p-10 md:p-16 rounded-[3rem] border border-white/5 flex flex-col md:flex-row gap-12 items-center hover:border-brand-cyan/20 transition-colors">
                <div className="md:w-1/2">
                   <h2 className="text-3xl font-bold text-white mb-6">{svc.title}</h2>
                   <p className="text-slate-300 leading-relaxed mb-8">{svc.desc}</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                     {svc.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                           <span className="text-sm font-medium text-slate-200">{f}</span>
                        </div>
                     ))}
                   </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-center md:justify-end">
                   <ConversionCTA className="glass p-8 rounded-3xl w-full" />
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 z-10 relative border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Local Citations <span className="text-gradient">Pricing</span></h2>
            <p className="text-lg text-slate-400">Boost your local SEO with 100% manual directory submissions. Choose the perfect package to scale your business listing strategy.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPackages.map((pkg, i) => (
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className={`glass-card rounded-[2.5rem] p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(29,191,115,0.15)] ${pkg.popular ? 'border-[#1dbf73] border-2 shadow-[0_0_30px_rgba(29,191,115,0.1)]' : 'border-white/10'}`}
              >
                {pkg.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${pkg.popular ? 'bg-[#1dbf73] text-white shadow-[0_0_15px_rgba(29,191,115,0.4)]' : 'bg-brand-gold text-blue-950'}`}>
                    {pkg.badge}
                  </div>
                )}
                
                <div className="text-center mb-8 mt-4">
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.sites} Citation Sites</h3>
                  <div className="text-4xl font-heading font-black text-[#1dbf73] mb-4">{pkg.price}</div>
                  <div className="flex flex-col gap-1 text-xs text-slate-400 font-medium bg-white/5 rounded-xl py-3 px-2">
                     <span className="flex items-center justify-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#1dbf73]" /> Manual High Quality Submissions</span>
                     <span className="flex items-center justify-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#1dbf73]" /> SEO Friendly Listings</span>
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-full font-bold text-center transition-all flex items-center justify-center gap-2 ${pkg.popular ? 'bg-[#1dbf73] text-white hover:bg-[#19a463] shadow-[0_0_15px_rgba(29,191,115,0.4)] hover:shadow-[0_0_20px_rgba(29,191,115,0.6)]' : 'bg-[#1dbf73]/10 text-[#1dbf73] hover:bg-[#1dbf73] hover:text-white'}`}>
                    Order Now on Fiverr
                  </a>
                  
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                    <span className="text-xs text-slate-500 text-center font-bold mb-1">Quick Contact:</span>
                    <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm text-slate-300 hover:text-[#25D366] transition-colors bg-white/5 hover:bg-white/10 py-2.5 rounded-xl">
                      <MessageCircle className="w-4 h-4" /> +92 3233882123
                    </a>
                    <a href={CONTACT_EMAIL} className="flex items-center justify-center gap-2 text-sm text-slate-300 hover:text-brand-cyan transition-colors bg-white/5 hover:bg-white/10 py-2.5 rounded-xl">
                      <Mail className="w-4 h-4" /> irtazakhan7890@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 z-10 relative px-6 text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to scale your business?</h2>
            <p className="text-slate-400 mb-8">Stop worrying about algorithm updates and let professional SEO architecture work for you.</p>
            <ConversionCTA />
         </div>
      </section>
    </>
  );
}
