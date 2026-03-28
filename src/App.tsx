import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Situation Pages
import NursingHome from "./pages/situations/NursingHome";
import Inherited from "./pages/situations/Inherited";
import Divorce from "./pages/situations/Divorce";
import Foreclosure from "./pages/situations/Foreclosure";
import Relocation from "./pages/situations/Relocation";
import FinancialHardship from "./pages/situations/FinancialHardship";
import AsIs from "./pages/situations/AsIs";

// Supporting Pages
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import WhyChooseUsMain from "./pages/WhyChooseUsMain";
import Contact from "./pages/Contact";
import GetOffer from "./pages/GetOffer";
import MeetJeff from "./pages/MeetJeff";
import Testimonials from "./pages/Testimonials";
import Charity from "./pages/Charity";
import Resources from "./pages/Resources";
import DownloadGuides from "./pages/DownloadGuides";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

// Scroll to top on route change and handle hash navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Situation Pages */}
          <Route path="/situations/nursing-home" element={<NursingHome />} />
          <Route path="/situations/inherited" element={<Inherited />} />
          <Route path="/situations/divorce" element={<Divorce />} />
          <Route path="/situations/foreclosure" element={<Foreclosure />} />
          <Route path="/situations/relocation" element={<Relocation />} />
          <Route path="/situations/financial-hardship" element={<FinancialHardship />} />
          <Route path="/situations/as-is" element={<AsIs />} />
          
          {/* Supporting Pages */}
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-choose-us" element={<WhyChooseUsMain />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-offer" element={<GetOffer />} />
          <Route path="/meet-jeff" element={<MeetJeff />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/download-guides" element={<DownloadGuides />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
