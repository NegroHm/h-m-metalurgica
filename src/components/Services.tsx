import { Button } from "@/components/ui/button";

const Services = () => {
  const handleQuoteRequest = () => {
    const email = "your-email@example.com"; // Easily editable placeholder
    const subject = "Request for Custom Quote";
    const body = `Hello Héctor Medina Team,

I would like to request a quote for the following project:

[Please describe your project or needs here]

Thank you.`;
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Metallurgical Services
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
              From Custom Designs to Expert Repairs
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We offer a full range of metallurgical services, including custom design and fabrication, 
              high-precision TIG and MIG welding, structural repairs, and professional installations. 
              We work with steel, iron, and other metals to bring your vision to life.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our master craftsmen combine traditional techniques with modern equipment to deliver 
              exceptional results. Whether you need a custom gate, structural repairs, or a unique 
              piece of metalwork, we have the expertise to exceed your expectations.
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
            Request a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;