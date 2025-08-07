import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/775b794b-0bbc-4e22-9b52-953be97e18fe.png" 
              alt="Héctor Medina Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-muted-foreground transition-smooth font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-muted-foreground transition-smooth font-medium"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-muted-foreground transition-smooth font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-muted-foreground transition-smooth font-medium"
            >
              Nosotros
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-foreground p-2"
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white p-2"
              aria-label="Cerrar menú"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-8 text-center">
              <button 
                onClick={() => {
                  scrollToSection('home');
                  setIsMobileMenuOpen(false);
                }}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors py-4 px-8"
              >
                Inicio
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/products';
                  setIsMobileMenuOpen(false);
                }}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors py-4 px-8"
              >
                Productos
              </button>
              <button 
                onClick={() => {
                  scrollToSection('services');
                  setIsMobileMenuOpen(false);
                }}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors py-4 px-8"
              >
                Servicios
              </button>
              <button 
                onClick={() => {
                  scrollToSection('about');
                  setIsMobileMenuOpen(false);
                }}
                className="text-white text-2xl font-medium hover:text-gray-300 transition-colors py-4 px-8"
              >
                Nosotros
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;