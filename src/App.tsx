import { Routes, Route } from "react-router-dom";
import { Navigation, Footer, FloatingWhatsApp, ParticlesBackground } from "./components/SharedUI";
import Home from "./pages/Home";
import CitationSites from "./pages/CitationSites";
import Services from "./pages/Services";
import { About, Contact, PrivacyPolicy, TermsConditions } from "./pages/AboutContactLegal";
import { BlogIndex, BlogPost } from "./pages/Blog";

function App() {
  return (
    <div className="min-h-screen bg-blue-950 text-slate-200 font-sans selection:bg-brand-cyan selection:text-blue-950 relative overflow-x-hidden">
      <ParticlesBackground />
      <Navigation />
      
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<Services />} /> {/* Handles sub-services temporarily routing to main services index */}
          <Route path="/citation-sites-list" element={<CitationSites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
