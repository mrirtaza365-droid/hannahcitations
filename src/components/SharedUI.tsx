import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, MessageCircle, Shield, Rocket, Star, Globe2, Menu, X, ExternalLink, Linkedin, Twitter, MapPin } from "lucide-react";

export const CONTACT_WHATSAPP = "https://wa.me/923233882123";
export const CONTACT_EMAIL = "mailto:irtazakhan7890@gmail.com";
export const CONTACT_FIVERR = "https://www.fiverr.com/s/rEyqggP";
export const CONTACT_GMB = "https://share.google/4UkVUljb1vo0fGnXI";
export const CONTACT_LINKEDIN = "https://pk.linkedin.com/in/mr-irtaza-b199b3280";
export const CONTACT_PINTEREST = "https://www.pinterest.com/mr_irtaza/";
export const CONTACT_TIKTOK = "https://www.tiktok.com/@itx._.irtaza";
export const CONTACT_TWITTER = "https://x.com/mr_irtaza_";
export const BRAND_NAME = "DIGITAL MARKETING WITH IRTAZA";

// Custom SVG Icons for Tiktok and Pinterest
export const TiktokIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.69-5.11 2.73-6.52 1.25-.87 2.79-1.29 4.31-1.18.01 1.48.01 2.95 0 4.43-.88-.13-1.8.03-2.51.62-.94.77-1.37 2.05-1.07 3.22.36 1.42 1.83 2.5 3.32 2.45 1.5-.06 2.73-1.19 2.99-2.67.14-1.34.09-2.69.09-4.04V.02z" />
  </svg>
);

export const PinterestIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.625 0 12.017 0z" />
  </svg>
);

export const ConversionCTA = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center gap-4 ${className}`}>
    <div className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
      <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className="bg-[#1dbf73] text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-[#19a463] hover:shadow-[0_0_20px_rgba(29,191,115,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2 shrink-0">
        Order on Fiverr <ArrowRight className="w-5 h-5" />
      </a>
      <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-[#1dbf73] text-[#1dbf73] px-8 py-3.5 rounded-full font-bold text-base hover:bg-[#1dbf73]/10 hover:scale-105 transition-all flex items-center justify-center gap-2 shrink-0">
        <MessageCircle className="w-5 h-5" /> WhatsApp
      </a>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-xs text-slate-400">
       <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-[#1dbf73]"/> Secure Payment</span>
       <span className="flex items-center gap-1.5"><Rocket className="w-4 h-4 text-[#1dbf73]"/> Fast Delivery via Fiverr</span>
       <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-brand-gold fill-brand-gold"/> 100+ Orders Completed</span>
    </div>
  </div>
);

export const ParticlesBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-cyan/10 blur-[100px] animate-pulse"></div>
    <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-brand-gold/5 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] rounded-full bg-brand-cyan/10 blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>
  </div>
);

export const FloatingWhatsApp = () => (
  <a 
    href={CONTACT_WHATSAPP}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all"
    aria-label="Chat with Irtaza on WhatsApp"
  >
    <MessageCircle className="w-8 h-8" />
  </a>
);

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const links = [
    { name: "Services", href: "/services" },
    { name: "Citation Sites", href: "/citation-sites-list" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Globe2 className="w-8 h-8 text-brand-cyan" />
          <span className="font-heading font-bold text-xl md:text-2xl text-white tracking-widest">{BRAND_NAME}</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {links.map((l) => (
              <Link key={l.name} to={l.href} className="text-sm font-medium hover:text-brand-cyan transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-slate-400">
            <a href={CONTACT_LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            <a href={CONTACT_TWITTER} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X (Twitter)"><Twitter className="w-4 h-4" /></a>
            <a href={CONTACT_TIKTOK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="TikTok"><TiktokIcon className="w-4 h-4" /></a>
            <a href={CONTACT_PINTEREST} target="_blank" rel="noopener noreferrer" className="hover:text-[#E60023] transition-colors" aria-label="Pinterest"><PinterestIcon className="w-4 h-4" /></a>
          </div>

          <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className="bg-[#1dbf73] hover:bg-[#19a463] hover:shadow-[0_0_15px_rgba(29,191,115,0.4)] text-white font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-2">
            Order on Fiverr <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-card p-6 flex flex-col gap-4 lg:hidden max-h-[80vh] overflow-y-auto"
          >
            {links.map((l) => (
              <Link key={l.name} to={l.href} className="text-lg font-medium py-2 border-b border-white/10">
                {l.name}
              </Link>
            ))}
            <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className="bg-[#1dbf73] text-white font-bold px-5 py-3 rounded-xl text-center mt-2 shadow-[0_0_15px_rgba(29,191,115,0.3)]">
              Order on Fiverr
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => (
  <footer className="glass border-t border-white/10 pt-16 pb-8 px-6 text-center z-10 relative">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center mb-6">
        <Globe2 className="w-10 h-10 text-brand-cyan" />
      </div>
      <h2 className="text-2xl font-heading font-bold text-white mb-2">{BRAND_NAME}</h2>
      <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-sm">
        Helping businesses achieve real website growth through powerful local SEO strategies, consistent local citations, and superior website development.
      </p>

      <div className="flex justify-center mb-12">
        <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className="bg-[#1dbf73] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#19a463] hover:shadow-[0_0_25px_rgba(29,191,115,0.5)] transform hover:scale-105 transition-all inline-flex items-center gap-2">
          Start Your Order on Fiverr <Rocket className="w-5 h-5"/>
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-sm font-medium text-left max-w-4xl mx-auto border-t border-white/5 pt-10">
        <div className="flex flex-col gap-3">
           <h3 className="text-white font-bold mb-2">Services</h3>
           <Link to="/services" className="text-slate-400 hover:text-brand-cyan transition-colors">All Services</Link>
           <Link to="/services/local-seo" className="text-slate-400 hover:text-brand-cyan transition-colors">Local SEO</Link>
           <Link to="/services/citation-building" className="text-slate-400 hover:text-brand-cyan transition-colors">Citation Building</Link>
           <Link to="/services/website-development" className="text-slate-400 hover:text-brand-cyan transition-colors">Web Development</Link>
        </div>
        <div className="flex flex-col gap-3">
           <h3 className="text-white font-bold mb-2">Resources</h3>
           <Link to="/citation-sites-list" className="text-slate-400 hover:text-brand-cyan transition-colors">Free Citation Sites List</Link>
           <Link to="/blog" className="text-slate-400 hover:text-brand-cyan transition-colors">SEO Blog</Link>
           <Link to="/about" className="text-slate-400 hover:text-brand-cyan transition-colors">About Us</Link>
        </div>
        <div className="flex flex-col gap-3">
           <h3 className="text-white font-bold mb-2">Google & Legal</h3>
           <a href={CONTACT_GMB} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors flex items-center gap-2 mb-2 font-bold"><MapPin className="w-4 h-4"/> Find Us on Google</a>
           <Link to="/privacy-policy" className="text-slate-400 hover:text-brand-cyan transition-colors">Privacy Policy</Link>
           <Link to="/terms-conditions" className="text-slate-400 hover:text-brand-cyan transition-colors">Terms & Conditions</Link>
        </div>
        <div className="flex flex-col gap-3">
           <h3 className="text-white font-bold mb-2">Connect</h3>
           <Link to="/contact" className="text-slate-400 hover:text-brand-cyan transition-colors">Contact Us</Link>
           <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors">WhatsApp Irtaza</a>
           <a href={CONTACT_FIVERR} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-cyan transition-colors">Fiverr Profile</a>
           
           <div className="flex items-center gap-3 mt-2">
             <a href={CONTACT_LINKEDIN} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#0a66c2] hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
             <a href={CONTACT_TWITTER} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-colors" aria-label="X (Twitter)"><Twitter className="w-4 h-4" /></a>
             <a href={CONTACT_TIKTOK} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-colors" aria-label="TikTok"><TiktokIcon className="w-4 h-4" /></a>
             <a href={CONTACT_PINTEREST} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#E60023] hover:text-white transition-colors" aria-label="Pinterest"><PinterestIcon className="w-4 h-4" /></a>
           </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Digital Marketing With Irtaza. All Rights Reserved.</p>
        <p>Expert Local SEO & Website Growth Solutions</p>
      </div>
    </div>
  </footer>
);
