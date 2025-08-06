import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  gallery?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const generateWhatsAppLink = (productName: string) => {
    const phoneNumber = "15551234567"; // Placeholder phone number
    const message = `Hello, I'm interested in the product: ${productName}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      {/* Product Card */}
      <div 
        className="product-card bg-card border border-border/10 rounded-lg overflow-hidden group"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">{product.name}</h3>
          <p className="text-2xl font-bold text-primary">{product.price}</p>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-background border border-border/20">
          {/* Close button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-smooth"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">{product.name}</h2>
              <p className="text-3xl font-bold text-primary mb-6">{product.price}</p>
              
              <div className="prose prose-lg mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <a 
                href={generateWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="whatsapp-btn w-full md:w-auto px-8 py-4 text-lg font-medium"
                >
                  Inquire on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;