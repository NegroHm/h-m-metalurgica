import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Product } from '@/hooks/useProducts';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateWhatsAppLink = (productName: string) => {
    const phoneNumber = "15551234567"; // Placeholder phone number
    const message = `Hello, I'm interested in the product: ${productName}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <>
      <div 
        className="group cursor-pointer bg-card rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={product.image_url} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <Button 
              variant="secondary"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              View Details
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
            {product.name}
          </h4>
          <p className="text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={product.image_url} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <DialogTitle className="text-3xl font-bold text-foreground mb-4">
                  {product.name}
                </DialogTitle>
                <p className="text-3xl font-bold text-primary mb-6">
                  {formatPrice(product.price)}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              
              {/* WhatsApp Button */}
              <a
                href={generateWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full" size="lg">
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