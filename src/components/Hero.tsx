import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Art in Steel.{" "}
          <span className="block">Built to Last.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light opacity-90 max-w-2xl mx-auto">
          Handcrafted Grills & Custom Metalwork by Héctor Medina
        </p>
        
        <Button 
          onClick={scrollToProducts}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium transition-smooth"
        >
          View Our Products
        </Button>
      </div>
    </section>
  );
};

export default Hero;