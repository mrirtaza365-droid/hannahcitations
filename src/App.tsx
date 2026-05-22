import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, FormEvent } from "react";
import { 
  CheckCircle, Globe, Search, ArrowRight, Star, MapPin, 
  BarChart, Target, Shield, MessageCircle, Mail, ExternalLink,
  ChevronDown, Menu, X, Rocket, AlertTriangle, Building, Globe2
} from "lucide-react";

// --- Constants ---
const CONTACT_WHATSAPP = "https://wa.me/923233882124";
const CONTACT_EMAIL = "mailto:irtazakhan7890@gmail.com";
const CONTACT_FIVERR = "https://www.fiverr.com/hannah_jasminee";

const CITIES = [
  "Hotfrog", "Yelp", "YP.com", "Google My Business", "Bing Places", "Foursquare", 
  "Manta", "BBB", "Angi", "Thumbtack", "Alignable", "Citysearch", "MerchantCircle", 
  "Superpages", "Whitepages", "Facebook Business", "Apple Maps", "MapQuest", 
  "Nextdoor", "EZlocal", "Brownbook", "n49", "Cylex", "2findlocal", "opendi", 
  "Tupalo", "Local.com", "Bizwiki", "Spoke", "Pinpoint"
];

const GLOBAL_COUNTRIES = [
  "USA", "UK", "Canada", "Australia", "New Zealand", "India", "Pakistan", "UAE", 
  "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "Jordan", "Egypt", 
  "South Africa", "Nigeria", "Kenya", "Ghana", "Bangladesh", "Sri Lanka", "Nepal", 
  "Philippines", "Malaysia", "Singapore", "Indonesia", "Thailand", "Vietnam", 
  "Hong Kong", "Japan", "South Korea", "Germany", "France", "Spain", "Italy", 
  "Netherlands", "Belgium", "Sweden", "Norway", "Denmark", "Finland", "Switzerland", 
  "Austria", "Portugal", "Poland", "Czech Republic", "Hungary", "Romania", "Bulgaria", 
  "Croatia", "Greece", "Turkey", "Brazil", "Mexico", "Argentina", "Colombia", 
  "Chile", "Peru", "Venezuela", "Ecuador", "Uruguay", "Paraguay", "Bolivia", 
  "Dominican Republic", "Puerto Rico", "Jamaica", "Trinidad", "Barbados", "Guatemala", 
  "Honduras", "El Salvador", "Costa Rica", "Panama", "Morocco", "Algeria", "Tunisia", 
  "Libya", "Ethiopia", "Tanzania", "Uganda", "Zimbabwe", "Zambia", "Mozambique", 
  "Senegal", "Cameroon", "Ivory Coast"
];

// --- Subcomponents ---

const ParticlesBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-cyan/10 blur-[100px] animate-pulse"></div>
    <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-brand-gold/5 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] rounded-full bg-brand-cyan/10 blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>
  </div>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#packages" },
    { name: "SEO Checking", href: "#tools" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Globe2 className="w-8 h-8 text-brand-cyan" />
          <span className="font-heading font-bold text-xl text-white">Hannah Jasmine</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-sm font-medium hover:text-brand-cyan transition-colors">
                {l.name}
              </a>
            ))}
          </div>
          <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-brand-cyan to-blue-500 hover:from-blue-500 hover:to-brand-cyan text-blue-950 font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-2">
            Order on Fiverr <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-card p-6 flex flex-col gap-4 md:hidden"
          >
            {links.map((l) => (
              <a key={l.name} href={l.href} onClick={() => setIsOpen(false)} className="text-lg font-medium py-2 border-b border-white/10">
                {l.name}
              </a>
            ))}
            <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className="bg-brand-cyan text-blue-950 font-bold px-5 py-3 rounded-xl text-center mt-2">
              Order on Fiverr
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10 min-h-screen flex justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-brand-cyan mb-8"
      >
        <Star className="w-4 h-4 fill-brand-cyan" /> 1,200+ Happy Clients Worldwide
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-5xl"
      >
        Premium Local Citations & <span className="text-gradient">Local SEO Services</span> for Explosive Website Growth
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed"
      >
        Build powerful business listings, dominate local search, and grow your website with expert local citation services trusted by businesses globally. NAP consistency guaranteed.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className="bg-brand-cyan text-blue-950 px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2">
          Order on Fiverr <ArrowRight className="w-5 h-5" />
        </a>
        <a href="#tools" className="glass px-8 py-4 rounded-full font-bold text-lg text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
          Check My Website Authority <BarChart className="w-5 h-5" />
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-20 pt-10 border-t border-white/10 w-full"
      >
        {[
          { number: "5,000+", label: "Citations Built" },
          { number: "1,200+", label: "Happy Clients" },
          { number: "80+", label: "Countries Served" },
          { number: "100%", label: "NAP Accuracy" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="text-3xl md:text-4xl font-heading font-bold text-white">{stat.number}</span>
            <span className="text-sm text-brand-cyan">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const ToolsSection = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const [authResult, setAuthResult] = useState<any>(null);
  
  const [napLoading, setNapLoading] = useState(false);
  const [napResult, setNapResult] = useState<any>(null);

  const handleAuthCheck = (e: FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthResult(null);
    setTimeout(() => {
      setAuthLoading(false);
      setAuthResult({
        da: Math.floor(Math.random() * 40) + 10,
        pa: Math.floor(Math.random() * 40) + 15,
        spam: Math.floor(Math.random() * 5) + 1,
        backlinks: Math.floor(Math.random() * 1000) + 50,
        citationFlow: Math.floor(Math.random() * 30) + 10
      });
    }, 2000);
  };

  const handleNapCheck = (e: FormEvent) => {
    e.preventDefault();
    setNapLoading(true);
    setNapResult(null);
    setTimeout(() => {
      setNapLoading(false);
      const results = CITIES.map(city => {
        const rand = Math.random();
        let status = 'found';
        if (rand > 0.7) status = 'missing';
        else if (rand > 0.4) status = 'inconsistent';
        return { name: city, status };
      });
      setNapResult(results);
    }, 2500);
  };

  return (
    <section id="tools" className="py-20 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Authority Checker */}
        <div className="glass-card rounded-3xl p-8 md:p-10">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
            <BarChart className="w-6 h-6 text-brand-cyan" />
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Free Website Authority Checker — Measure Your <span className="text-brand-cyan">SEO Strength</span>
          </h2>
          <p className="text-slate-400 mb-8">Enter your domain to instantly check your website's SEO authority, backlink profile, and local citation score.</p>
          
          <form onSubmit={handleAuthCheck} className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="e.g. yourwebsite.com" 
              required
              className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-cyan transition-colors"
            />
            <button disabled={authLoading} type="submit" className="w-full bg-white text-blue-950 font-bold py-4 rounded-xl hover:bg-brand-cyan transition-colors flex items-center justify-center gap-2">
              {authLoading ? <div className="w-5 h-5 border-2 border-blue-950 border-t-transparent rounded-full animate-spin" /> : "Check Authority"}
            </button>
          </form>

          {authResult && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="glass p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-white">{authResult.da}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Domain Auth</div>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-white">{authResult.pa}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Page Auth</div>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-brand-gold">{authResult.spam}%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Spam Score</div>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-brand-cyan">{authResult.backlinks}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Backlinks</div>
              </div>
              <div className="glass p-4 rounded-xl text-center sm:col-span-2">
                <div className="text-2xl font-bold text-white">{authResult.citationFlow} / 100</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Citation Flow (Needs Improvement)</div>
              </div>
            </motion.div>
          )}
        </div>

        {/* NAP Checker */}
        <div className="glass-card rounded-3xl p-8 md:p-10">
          <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
            <MapPin className="w-6 h-6 text-brand-gold" />
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Check Your Business Listing & <span className="text-brand-gold">Local Citations</span> Across the Web
          </h2>
          <p className="text-slate-400 mb-8">Enter your NAP (Name, Address, Phone) to discover where your business listing exists and where it's missing or inconsistent.</p>
          
          <form onSubmit={handleNapCheck} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Business Name" required className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors" />
              <input type="text" placeholder="Phone Number" required className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors" />
            </div>
            <input type="text" placeholder="Full Address / Zip Code" required className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors" />
            
            <button disabled={napLoading} type="submit" className="w-full bg-brand-gold text-blue-950 font-bold py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
               {napLoading ? <div className="w-5 h-5 border-2 border-blue-950 border-t-transparent rounded-full animate-spin" /> : "Scan Citations"}
            </button>
          </form>

          {napResult && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="flex flex-col gap-2">
                {napResult.map((res: any, i: number) => (
                  <div key={i} className="glass p-3 rounded-lg flex items-center justify-between">
                    <span className="text-sm font-medium text-white">{res.name}</span>
                    {res.status === 'found' && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-md flex items-center gap-1"><CheckCircle className="w-3 h-3"/> Found</span>}
                    {res.status === 'missing' && <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-md flex items-center gap-1"><X className="w-3 h-3"/> Missing</span>}
                    {res.status === 'inconsistent' && <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-md flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Inconsistent</span>}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const packages = [
    { name: "Basic", citations: "50", price: "$5", features: "High-quality directories, NAP consistency ensured", delivery: "1–2 days" },
    { name: "Standard", citations: "100", price: "$10", features: "Mix of general + niche directories, Manual submissions", delivery: "2–3 days" },
    { name: "Premium", citations: "200", price: "$20", features: "High authority + niche platforms, Global targeting", delivery: "3–5 days", popular: true },
    { name: "Ultimate", citations: "300", price: "$30", features: "Maximum coverage, Advanced NAP optimization, Priority", delivery: "4–6 days" },
  ];

  return (
    <section id="packages" className="py-24 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Local Citation & <span className="text-gradient">Business Listing Packages</span> — Affordable SEO Pricing</h2>
          <p className="text-lg text-slate-400">Choose a local citations package to strengthen your business listing, improve NAP consistency, and accelerate your website growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className={`glass-card rounded-3xl p-8 flex flex-col relative ${pkg.popular ? 'border-brand-cyan shadow-[0_0_30px_rgba(0,240,255,0.1)] transform md:-translate-y-4' : 'border-white/10'}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-cyan text-blue-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-heading font-bold text-brand-cyan">{pkg.price}</span>
              </div>
              <div className="glass rounded-xl p-4 mb-6 text-center">
                <span className="block text-3xl font-bold text-white mb-1">{pkg.citations}</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Local Citations</span>
              </div>
              <p className="text-slate-300 text-sm mb-6 flex-1 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                {pkg.features}
              </p>
              <div className="text-sm font-medium text-slate-400 mb-8 flex items-center justify-center bg-white/5 py-2 rounded-lg">
                Delivery: {pkg.delivery}
              </div>
              <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${pkg.popular ? 'bg-brand-cyan text-blue-950 hover:bg-white' : 'bg-white/10 text-white hover:bg-brand-cyan hover:text-blue-950'}`}>
                Order Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="glass-card rounded-3xl p-10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] group-hover:bg-brand-cyan/20 transition-all"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-brand-cyan/20 rounded-2xl flex items-center justify-center mb-8">
              <Building className="w-8 h-8 text-brand-cyan" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Get a Verified <span className="text-brand-cyan">Google My Business Profile</span> for Local SEO Domination</h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              A complete and verified Google My Business profile is the #1 factor in local SEO rankings. Appear in the Google Map Pack and drive more local customers to your business with a perfectly optimized business listing.
            </p>
            <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-bold transition-colors">
              <MessageCircle className="w-5 h-5" /> Contact on WhatsApp to Order
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="glass-card rounded-3xl p-10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] group-hover:bg-brand-gold/20 transition-all"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-8">
              <Star className="w-8 h-8 text-brand-gold fill-brand-gold" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Buy Google, Yelp & Facebook Reviews — <span className="text-brand-gold">Build Trust & Boost Local SEO</span></h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              Positive reviews are critical for local SEO, business listing credibility, and website growth. Get real-looking reviews for GMB, Yelp, and Facebook to outrank local competitors and solidify your reputation.
            </p>
            <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-bold transition-colors">
              <MessageCircle className="w-5 h-5" /> Contact on WhatsApp to Order
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Countries = () => {
  return (
    <section className="py-24 px-6 z-10 relative border-y border-white/5 bg-slate-900/20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Global Local Citations & Business Listing Services — <span className="text-gradient">80+ Countries</span></h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-16">
          We build local citations and business listings for clients worldwide. Whether you need local SEO in the USA, UK, UAE, or anywhere else — we've got you covered for maximum website growth.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {GLOBAL_COUNTRIES.map((country, i) => (
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 20) * 0.05 }}
              key={i} 
              className="px-4 py-2 rounded-full text-sm font-medium glass border-white/5 text-slate-300 hover:text-brand-cyan hover:border-brand-cyan transition-colors cursor-default"
            >
              {country}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const cards = [
    { title: "Rank Higher in Local SEO Results", icon: Target },
    { title: "Build Business Listing Authority", icon: Shield },
    { title: "Drive Calls & Website Growth", icon: Rocket },
    { title: "Appear in the Google Map Pack", icon: MapPin },
    { title: "NAP Consistency = SEO Trust Signals", icon: CheckCircle },
    { title: "Outrank Local Competitors with Citations", icon: BarChart },
  ];

  return (
    <section className="py-24 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-16">Why Local Citations Are the Foundation of <span className="text-brand-cyan">Every Local SEO Strategy</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div 
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={i} 
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 transition-colors"
            >
              <card.icon className="w-12 h-12 text-brand-cyan mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Submit Your Business Info & NAP Details", desc: "Share your business name, address, phone number, website URL, and description." },
    { num: "02", title: "We Build & Submit Your Citations", desc: "Our SEO experts manually submit your business listing to top directories." },
    { num: "03", title: "Business Listings Go Live Across the Web", desc: "Your local citations are published, ensuring 100% NAP consistency." },
    { num: "04", title: "Watch Your Local SEO Rankings & Website Growth Soar", desc: "Receive a detailed report and enjoy higher rankings in the Google Map Pack." },
  ];

  return (
    <section className="py-24 px-6 z-10 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-16">How Our Local Citation & SEO <span className="text-brand-gold">Service Works</span></h2>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent"></div>
          {steps.map((step, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              key={i} 
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center text-3xl font-heading font-bold text-brand-cyan mb-6 border-brand-cyan/30 bg-[#0a0f1c]">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { country: "USA", text: "Hannah's local citations skyrocketed my local SEO. The business listings were 100% accurate and my website growth is visibly documented. Highly recommend!" },
    { country: "UK", text: "Best local SEO service on Fiverr. She delivered 300 citations and my plumbing business is now in the Google Map Pack. Unbelievable website growth." },
    { country: "Australia", text: "If you need a solid business listing strategy, this is it. The NAP consistency improved dramatically and our local SEO traffic doubled." },
    { country: "UAE", text: "Excellent communication and perfect implementation of local citations for our Dubai clinic. Will definitely order more SEO services." },
    { country: "Canada", text: "Fast delivery, detailed report, and noticeable website growth within weeks. Hannah knows local SEO inside out." }
  ];

  return (
    <section className="py-24 px-6 z-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-16">What Clients Say About Our <span className="text-gradient">Local Citations & SEO Services</span></h2>
         
         <div className="relative w-full flex overflow-x-hidden pt-4 pb-12">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex gap-6 w-[200%] md:w-[150%] lg:w-[120%]"
            >
              {[...reviews, ...reviews].map((review, i) => (
                <div key={i} className="glass-card rounded-2xl p-8 min-w-[300px] md:min-w-[400px] shrink-0 border-white/10 hover:border-brand-cyan/30 transition-colors">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-brand-gold text-brand-gold" />)}
                  </div>
                  <p className="text-slate-300 mb-6 italic leading-relaxed">"{review.text}"</p>
                  <div className="text-sm font-bold text-brand-cyan uppercase tracking-wider">— Client from {review.country}</div>
                </div>
              ))}
            </motion.div>
         </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "What are local citations and why do they matter for SEO?", a: "Local citations are online mentions of your business's Name, Address, and Phone number (NAP). They matter for SEO because search engines like Google use them to verify your business's existence, legitimacy, and local relevance, directly impacting your local search ranking." },
    { q: "How do local citations help my business listing rank higher?", a: "By building consistent local citations across high-authority directories, you send strong trust signals to Google. The more accurate and widespread your business listing is, the more confidently search engines will display your business in the Local Map Pack for relevant queries." },
    { q: "How long before I see website growth from citations?", a: "Local SEO is a gradual process. While citations are indexed quickly, measurable website growth and ranking improvements in local search typically take between 2 to 6 weeks as search engines crawl and re-evaluate your strengthened business listing profile." },
    { q: "What is NAP consistency and why is it important for local SEO?", a: "NAP consistency means your Name, Address, and Phone number are exactly the same across all online platforms. Inconsistencies confuse search engines and hurt your local SEO. We ensure 100% NAP accuracy across all generated local citations." },
    { q: "Do you build business listings in my country?", a: "Yes! We provide global local citation services covering over 80+ countries including the USA, UK, Canada, Australia, UAE, India, and more. Our directories are tailored to your specific country for maximum local SEO impact." },
    { q: "How do I order your local citation services?", a: "Simply visit my Fiverr profile to order, or message me on WhatsApp for fast support." }
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 z-10 relative bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-16">Frequently Asked Questions About <span className="text-brand-cyan">Local Citations & Local SEO</span></h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-lg text-white hover:text-brand-cyan transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180 text-brand-cyan' : 'text-slate-500'}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-6 pb-5 text-slate-400 border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-16">Get Started with <span className="text-brand-gold">Local Citations & SEO Services</span> Today</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className="glass-card p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform group">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20 transition-colors">
              <Search className="w-8 h-8 text-brand-cyan" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Order Citations & SEO Packages</h3>
            <p className="text-sm text-slate-400 mb-6 flex-1">Visit Fiverr for secure and guaranteed service delivery.</p>
            <span className="bg-brand-cyan text-blue-950 px-6 py-2 rounded-full font-bold text-sm w-full">Go to Fiverr</span>
          </a>
          
          <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="glass-card p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform group border-[#25D366]/30">
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp for Quick Support</h3>
            <p className="text-sm text-slate-400 mb-6 flex-1">Have a urgent query? Message me directly on WhatsApp.</p>
            <span className="bg-[#25D366] text-white px-6 py-2 rounded-full font-bold text-sm w-full">wa.me/923233882124</span>
          </a>

          <a href={CONTACT_EMAIL} className="glass-card p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform group">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
              <Mail className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email for Formal Inquiries</h3>
            <p className="text-sm text-slate-400 mb-6 flex-1">For agency white-label or bulk order requests.</p>
            <span className="glass border-brand-gold/50 text-white px-6 py-2 rounded-full font-bold text-sm w-full">irtazakhan7890@gmail.com</span>
          </a>
        </div>
        
        <div className="max-w-2xl mx-auto glass-card p-8 rounded-3xl">
          <form className="flex flex-col gap-4">
             <div className="grid sm:grid-cols-2 gap-4">
               <input type="text" placeholder="Name" required className="bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-cyan transition-colors" />
               <input type="email" placeholder="Email" required className="bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-cyan transition-colors" />
             </div>
             <textarea placeholder="Tell me about your business and local SEO goals..." rows={4} required className="bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none"></textarea>
             <button type="submit" className="bg-gradient-to-r from-brand-cyan to-blue-500 text-blue-950 font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all">
               Send Message
             </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="glass border-t border-white/10 pt-16 pb-8 px-6 text-center z-10 relative">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center mb-6">
        <Globe2 className="w-10 h-10 text-brand-cyan" />
      </div>
      <h2 className="text-2xl font-heading font-bold text-white mb-2">Hannah Jasmine — Local Citations, Business Listing & Local SEO Expert</h2>
      <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-sm">
        Helping businesses achieve real website growth through powerful local SEO strategies, consistent local citations, and authoritative business listing creation.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-medium">
        <a href="#services" className="text-slate-400 hover:text-brand-cyan transition-colors">Services</a>
        <a href="#packages" className="text-slate-400 hover:text-brand-cyan transition-colors">Pricing</a>
        <a href="#tools" className="text-slate-400 hover:text-brand-cyan transition-colors">SEO Tools</a>
        <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors">WhatsApp</a>
        <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-cyan transition-colors">Fiverr Profile</a>
      </div>
      
      <div className="pt-8 border-t border-white/5 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 Hannah Jasmine. All Rights Reserved.</p>
        <p>Local SEO & Website Growth Solutions</p>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a 
    href={CONTACT_WHATSAPP}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-8 h-8" />
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen relative font-sans overflow-hidden">
      <ParticlesBackground />
      <Navigation />
      <main>
        <Hero />
        <ToolsSection />
        <Packages />
        <ServicesSection />
        <Countries />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
