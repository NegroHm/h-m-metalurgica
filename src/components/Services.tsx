import { Button } from "@/components/ui/button";
import Section from "./Section";

const Services = () => {
  const handleQuoteRequest = () => {
    const email = "your-email@example.com"; // Easily editable placeholder
    const subject = "Solicitud de Cotización Personalizada";
    const body = `Hola equipo de Héctor Medina,

Quisiera solicitar una cotización para el siguiente proyecto:

[Por favor, describa su proyecto o necesidad aquí]

Gracias.`;
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Section id="services" className="py-20 bg-background" addNavbarPadding={true}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Servicios de Herrería Profesional
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/src/assets/hero-background.jpg" 
                alt="Professional welding work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Desde Diseños Personalizados Hasta Reparaciones Expertas
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ofrecemos una gama completa de servicios de herrería, incluyendo diseño y fabricación personalizada, 
              soldadura TIG y MIG de alta precisión, reparaciones estructurales e instalaciones profesionales. 
              Trabajamos con acero, hierro y otros metales para dar vida a su visión.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestros maestros artesanos combinan técnicas tradicionales con equipos modernos para entregar 
              resultados excepcionales. Ya sea que necesite un portón personalizado, reparaciones estructurales 
              o una pieza única de herrería, tenemos la experiencia para superar sus expectativas.
            </p>
          </div>
        </div>
        
        {/* Call-to-Action Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            onClick={handleQuoteRequest}
            className="px-8 py-4 text-lg font-semibold"
          >
            Solicita una Cotización
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Services;