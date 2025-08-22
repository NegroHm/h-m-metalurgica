import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { useScrollToSection } from "@/hooks/useNavbarHeight";

const Hero = () => {
  const scrollToSection = useScrollToSection();
  
  const scrollToProducts = () => {
    scrollToSection('products');
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
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
          Héctor Medina
        </h1>
        
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-4 font-light opacity-95 max-w-3xl mx-auto">
          Arte en Acero. Hecho para Durar.
        </p>
        
        <p className="text-lg sm:text-xl mb-12 font-light opacity-80 max-w-2xl mx-auto">
          Parrillas Artesanales y Herrería a Medida
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToProducts}
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium transition-smooth"
          >
            Ver Productos
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="lg"
            className="border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-4 text-lg font-medium transition-smooth"
          >
            Contactar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;