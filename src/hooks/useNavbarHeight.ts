import { useState, useEffect, useCallback } from 'react';

export const useNavbarHeight = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  const calculateNavbarHeight = useCallback(() => {
    const navbar = document.querySelector('[data-navbar]') as HTMLElement;
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height);
      // También establecer una CSS custom property para uso global
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    }
  }, []);

  useEffect(() => {
    // Calcular altura inicial
    calculateNavbarHeight();

    // Recalcular en resize
    const handleResize = () => {
      calculateNavbarHeight();
    };

    // Usar ResizeObserver para detectar cambios en el navbar
    let resizeObserver: ResizeObserver | null = null;
    
    const navbar = document.querySelector('[data-navbar]') as HTMLElement;
    if (navbar && 'ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(() => {
        calculateNavbarHeight();
      });
      resizeObserver.observe(navbar);
    }

    // Fallback con window resize
    window.addEventListener('resize', handleResize);

    // Recalcular después de que el DOM esté completamente cargado
    const timer = setTimeout(calculateNavbarHeight, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      clearTimeout(timer);
    };
  }, [calculateNavbarHeight]);

  return navbarHeight;
};

// Hook para scroll suave que considera la altura del navbar
export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
      return;
    }
    
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector('[data-navbar]') as HTMLElement;
    
    if (element && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra de espacio
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToSection;
};