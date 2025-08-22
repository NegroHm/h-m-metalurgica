import { useState, useEffect } from "react";
import { useScrollToSection } from "@/hooks/useNavbarHeight";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = useScrollToSection();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigate to section - handles both same-page and cross-page navigation
  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'home') {
      navigate('/');
      return;
    }
    
    if (sectionId === 'products') {
      navigate('/products');
      return;
    }
    
    // For other sections, navigate to home page and scroll to section
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };

  // Cerrar menú móvil cuando se hace click en un link
  const handleMobileNavClick = (sectionId: string) => {
    handleNavigation(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      instagram: "https://instagram.com/hectormedina_herreria",
      facebook: "https://facebook.com/hectormedina.herreria", 
      whatsapp: "https://wa.me/1234567890"
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <header 
      data-navbar
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('home')} 
              className="flex items-center space-x-3 group focus:outline-none"
            >
              <img 
                src="/lovable-uploads/775b794b-0bbc-4e22-9b52-953be97e18fe.png" 
                alt="Héctor Medina Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  Héctor Medina
                </h1>
                <p className="text-xs text-gray-600">Herrería Artesanal</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 py-2"
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavigation('products')}
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 py-2"
            >
              Productos
            </button>
            <button 
              onClick={() => handleNavigation('services')}
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 py-2"
            >
              Servicios
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 py-2"
            >
              Nosotros
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* Social Media + Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Social Media Icons - Desktop */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={() => handleSocialClick('instagram')}
                className="p-3 text-gray-600 hover:text-pink-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button
                onClick={() => handleSocialClick('facebook')}
                className="p-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button
                onClick={() => handleSocialClick('whatsapp')}
                className="p-3 text-gray-600 hover:text-green-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-black transition-colors rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              <button 
                onClick={() => handleMobileNavClick('home')}
                className="block w-full text-left text-gray-700 hover:text-black font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => handleMobileNavClick('products')}
                className="block w-full text-left text-gray-700 hover:text-black font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Productos
              </button>
              <button 
                onClick={() => handleMobileNavClick('services')}
                className="block w-full text-left text-gray-700 hover:text-black font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => handleMobileNavClick('about')}
                className="block w-full text-left text-gray-700 hover:text-black font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => handleMobileNavClick('contact')}
                className="block w-full text-center bg-black text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors mt-4"
              >
                Contacto
              </button>
            </nav>
            
            {/* Mobile Social Media */}
            <div className="flex justify-center space-x-4 mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={() => handleSocialClick('instagram')}
                className="p-3 text-gray-600 hover:text-pink-600 transition-colors rounded-lg hover:bg-gray-50"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                </svg>
              </button>
              <button
                onClick={() => handleSocialClick('facebook')}
                className="p-3 text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button
                onClick={() => handleSocialClick('whatsapp')}
                className="p-3 text-gray-600 hover:text-green-600 transition-colors rounded-lg hover:bg-gray-50"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;