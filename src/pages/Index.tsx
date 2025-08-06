import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Services from "@/components/Services";
import SEOContent from "@/components/SEOContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductShowcase />
      <Services />
      <SEOContent />
      <Footer />
    </div>
  );
};

export default Index;
