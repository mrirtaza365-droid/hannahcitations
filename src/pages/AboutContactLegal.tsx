import { useSEO } from "../lib/meta";
import { Mail, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { 
  ConversionCTA, 
  CONTACT_EMAIL, 
  CONTACT_GMB, 
  CONTACT_LINKEDIN, 
  CONTACT_TWITTER, 
  CONTACT_TIKTOK, 
  CONTACT_PINTEREST,
  TiktokIcon,
  PinterestIcon
} from "../components/SharedUI";

export function About() {
  useSEO({
    title: "About Digital Marketing With Irtaza | SEO Experts",
    description: "Learn about Mr. Irtaza's digital marketing agency. We specialize in local SEO, citations, and web development for growing businesses."
  });
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto z-10 relative text-slate-300">
      <h1 className="text-4xl font-heading font-black text-white mb-8">About <span className="text-brand-cyan">Us</span></h1>
      <div className="glass p-10 rounded-3xl border-white/5 space-y-6">
         <p className="text-lg">Digital Marketing With Irtaza is a boutique digital growth agency focused purely on what works: solid technical SEO, perfectly consistent local citations, and lightning-fast web development.</p>
         <h2 className="text-2xl font-bold text-white pt-4">Our E-E-A-T Foundation</h2>
         <p>Experience and Expertise are our core values. We don't rely on black-hat tactics or spammy automated tools. Every citation is built manually. Every line of code is written cleanly. We ensure your business is perceived as a true Authority in your geographic region.</p>
         <h2 className="text-2xl font-bold text-white pt-4">Google Ads Ready</h2>
         <p>The ultimate goal for many of our clients is paid acquisition. But running Google Ads on a poor website is burning money. We bridge that gap by building your organic presence and landing pages to pass all of Google's rigorous policy checks.</p>
      </div>
      <div className="mt-12 flex justify-center"><ConversionCTA /></div>
    </div>
  );
}

export function Contact() {
  useSEO({
    title: "Contact Mr. Irtaza | SEO & Web Development",
    description: "Get in touch with Digital Marketing With Irtaza to discuss your local SEO, citation building, or website development needs."
  });
  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto z-10 relative">
      <h1 className="text-4xl font-heading font-black text-white mb-8 text-center">Contact <span className="text-brand-cyan">Us</span></h1>
      <div className="glass p-10 rounded-3xl border-white/5 flex flex-col gap-12">
        <p className="text-lg text-slate-300 max-w-2xl mx-auto text-center">We are ready to analyze your current search footprint and build a roadmap for your digital dominance. Reach out directly via email or our preferred platforms.</p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Methods */}
          <div className="lg:w-1/2 flex flex-col gap-8">
             <div className="flex flex-col sm:flex-row gap-4 w-full text-slate-300">
                <div className="flex flex-col gap-3 p-6 glass-card rounded-2xl flex-1">
                   <Mail className="w-8 h-8 text-brand-cyan" />
                   <span className="font-bold text-white">Email Support</span>
                   <a href={CONTACT_EMAIL} className="hover:text-brand-cyan transition-colors truncate">irtazakhan7890@gmail.com</a>
                </div>
                <div className="flex flex-col gap-3 p-6 glass-card rounded-2xl flex-1">
                   <MapPin className="w-8 h-8 text-brand-cyan" />
                   <span className="font-bold text-white">Global Service</span>
                   <span>USA, UK, Canada & WW</span>
                </div>
             </div>

             <div className="p-8 glass-card rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left">
               <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
               <div className="flex items-center gap-4">
                 <a href={CONTACT_LINKEDIN} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#0a66c2] hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                 <a href={CONTACT_TWITTER} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-black hover:text-white transition-colors" aria-label="X (Twitter)"><Twitter className="w-5 h-5" /></a>
                 <a href={CONTACT_TIKTOK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-black hover:text-white transition-colors" aria-label="TikTok"><TiktokIcon className="w-5 h-5" /></a>
                 <a href={CONTACT_PINTEREST} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#E60023] hover:text-white transition-colors" aria-label="Pinterest"><PinterestIcon className="w-5 h-5" /></a>
               </div>
               
               <a href={CONTACT_GMB} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center gap-2 bg-brand-gold text-blue-950 px-6 py-3 rounded-full font-bold transition-all hover:bg-white hover:scale-105 shadow-lg w-full justify-center">
                 <MapPin className="w-5 h-5" /> View on Google Maps
               </a>
             </div>
          </div>

          {/* Map Embed */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            <div className="flex-1 w-full h-[300px] lg:h-auto rounded-3xl overflow-hidden glass border border-white/10 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108922.99342418579!2d74.19448834604921!3d31.483162799981507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1716422312683!5m2!1sen!2sus" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
            <a href={CONTACT_GMB} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white py-3 rounded-full text-center font-bold transition-colors flex justify-center items-center gap-2">
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="w-full border-t border-white/10 pt-10 mt-2 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Start Your Project Instantly</h3>
          <ConversionCTA />
        </div>
      </div>
    </div>
  );
}

export function PrivacyPolicy() {
  useSEO({ title: "Privacy Policy | Digital Marketing With Irtaza", description: "Privacy policy for Digital Marketing With Irtaza." });
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto z-10 relative text-slate-300">
      <h1 className="text-3xl font-heading font-bold text-white mb-8">Privacy Policy</h1>
      <div className="space-y-6">
        <p>Last updated: {new Date().getFullYear()}</p>
        <p>At Digital Marketing With Irtaza, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
        <h2 className="text-xl font-bold text-white mt-4">Information We Collect</h2>
        <p>We do not collect personal data directly on this site via forms. We utilize third-party platforms (like Fiverr and WhatsApp) for communications and transactions. Please review their respective privacy policies.</p>
        <h2 className="text-xl font-bold text-white mt-4">Google Analytics & Future Advertising</h2>
        <p>This website is structured to support future tracking tags for Google Analytics and Google Ads. When active, these tags use cookies to collect standard internet log information and visitor behavior information in an anonymous form.</p>
      </div>
    </div>
  );
}

export function TermsConditions() {
  useSEO({ title: "Terms & Conditions | Digital Marketing With Irtaza", description: "Terms and conditions for Digital Marketing With Irtaza." });
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto z-10 relative text-slate-300">
      <h1 className="text-3xl font-heading font-bold text-white mb-8">Terms & Conditions</h1>
      <div className="space-y-6">
        <p>Welcome to Digital Marketing With Irtaza.</p>
        <h2 className="text-xl font-bold text-white mt-4">Service Delivery</h2>
        <p>All core services, including local citations and web development, are transacted via Fiverr. Please refer to Fiverr's Terms of Service for dispute resolution, payment handling, and delivery guarantees.</p>
        <h2 className="text-xl font-bold text-white mt-4">Intellectual Property</h2>
        <p>The content, layout, design, data, graphics and products on this website are protected by intellectual property laws. You may not reproduce our SEO methodologies or copy site content without explicit permission.</p>
      </div>
    </div>
  );
}
