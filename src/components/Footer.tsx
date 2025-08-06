const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/775b794b-0bbc-4e22-9b52-953be97e18fe.png" 
              alt="Héctor Medina Logo" 
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 leading-relaxed">
              Master craftsmen creating exceptional metalwork with traditional techniques and modern precision.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('products')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+15551234567" className="hover:text-primary-foreground transition-smooth">
                  (555) 123-4567
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:info@hectormedina.com" className="hover:text-primary-foreground transition-smooth">
                  info@hectormedina.com
                </a>
              </p>
              <p>
                <span className="font-medium">Showroom:</span><br />
                123 Artisan Way<br />
                Metalwork District, MD 12345
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Héctor Medina Metalworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;