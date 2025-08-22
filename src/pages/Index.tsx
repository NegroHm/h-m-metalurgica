import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Services from "@/components/Services";
import SEOContent from "@/components/SEOContent";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollToSection } from "@/hooks/useNavbarHeight";

const Index = () => {
  const location = useLocation();
  const scrollToSection = useScrollToSection();

  // Handle scrolling to section when navigating from other pages
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // Use setTimeout to ensure the page has rendered before scrolling
      const timeoutId = setTimeout(() => {
        scrollToSection(state.scrollTo!);
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [location.state, scrollToSection]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductShowcase />
      <Services />
      <SEOContent />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
