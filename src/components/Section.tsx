import { useEffect, useState } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  addNavbarPadding?: boolean;
}

const Section = ({ id, className = '', children, addNavbarPadding = false }: SectionProps) => {
  const [paddingTop, setPaddingTop] = useState('0px');

  useEffect(() => {
    if (addNavbarPadding) {
      const calculatePadding = () => {
        const navbar = document.querySelector('[data-navbar]') as HTMLElement;
        if (navbar) {
          const navbarHeight = navbar.offsetHeight;
          setPaddingTop(`${navbarHeight + 20}px`); // 20px extra de espacio
        }
      };

      // Calcular inicial
      calculatePadding();

      // Recalcular en resize
      window.addEventListener('resize', calculatePadding);

      // Observer para cambios en el navbar
      let observer: ResizeObserver | null = null;
      const navbar = document.querySelector('[data-navbar]') as HTMLElement;
      
      if (navbar && 'ResizeObserver' in window) {
        observer = new ResizeObserver(calculatePadding);
        observer.observe(navbar);
      }

      return () => {
        window.removeEventListener('resize', calculatePadding);
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [addNavbarPadding]);

  const dynamicStyle = addNavbarPadding ? { paddingTop } : {};

  return (
    <section 
      id={id} 
      className={className}
      style={dynamicStyle}
    >
      {children}
    </section>
  );
};

export default Section;