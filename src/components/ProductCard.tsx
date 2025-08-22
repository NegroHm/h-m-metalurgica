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
    const message = `Hola, estoy interesado/a en el producto: ${productName}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatWeight = (weight?: number) => {
    if (!weight) return null;
    return `${weight} kg`;
  };

  const getStockStatus = (stock?: number) => {
    if (stock === undefined || stock === null) return { text: 'Consultar stock', color: 'text-gray-500' };
    if (stock === 0) return { text: 'Sin stock', color: 'text-red-500' };
    if (stock <= 5) return { text: `Últimas ${stock} unidades`, color: 'text-orange-500' };
    return { text: 'En stock', color: 'text-green-500' };
  };

  return (
    <>
      <div 
        className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative w-full border border-gray-100"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-3 left-3 z-10 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
            Destacado
          </div>
        )}
        
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={product.image_url} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <Button 
              variant="secondary"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black hover:bg-gray-100"
            >
              Ver Detalles
            </Button>
          </div>
        </div>
        
        <div className="p-5">
          {/* Category and Stock */}
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
              {product.category === 'Grill' ? 'Parrilla' : 
               product.category === 'Gate' ? 'Portón' : 
               product.category}
            </span>
            <span className={`text-xs font-medium ${getStockStatus(product.stock_quantity).color}`}>
              {getStockStatus(product.stock_quantity).text}
            </span>
          </div>
          
          {/* Title */}
          <h4 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 leading-tight group-hover:text-gray-700 transition-colors">
            {product.name}
          </h4>
          
          {/* Subtitle */}
          {product.subtitle && (
            <p className="text-sm text-gray-500 mb-3 line-clamp-1">
              {product.subtitle}
            </p>
          )}
          
          {/* Key Specs */}
          <div className="mb-4 space-y-1">
            {product.dimensions && (
              <p className="text-xs text-gray-600">
                <span className="font-medium">Dimensiones:</span> {product.dimensions}
              </p>
            )}
            {product.weight && (
              <p className="text-xs text-gray-600">
                <span className="font-medium">Peso:</span> {formatWeight(product.weight)}
              </p>
            )}
            {product.material && (
              <p className="text-xs text-gray-600">
                <span className="font-medium">Material:</span> {product.material}
              </p>
            )}
          </div>
          
          {/* Price and Action */}
          <div className="flex items-center justify-between">
            <div>
              {product.original_price && product.original_price > product.price && (
                <p className="text-sm text-gray-400 line-through">
                  {formatPrice(product.original_price)}
                </p>
              )}
              <p className="text-xl font-bold text-black">
                {product.price ? formatPrice(product.price) : 'Consultar'}
              </p>
              <p className="text-xs text-gray-500">Precio incluye IVA</p>
            </div>
            <Button 
              size="sm" 
              variant="outline"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-black text-black hover:bg-black hover:text-white"
            >
              Ver más
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
              <img 
                src={product.image_url} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col justify-between py-4">
              <div>
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-md mb-4">
                  {product.category === 'Grill' ? 'Parrilla' : 
                   product.category === 'Gate' ? 'Portón' : 
                   product.category}
                </span>
                
                <DialogTitle className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                  {product.name}
                </DialogTitle>
                
                {/* Subtitle */}
                {product.subtitle && (
                  <p className="text-xl text-gray-600 mb-4">{product.subtitle}</p>
                )}
                
                {/* Price */}
                <div className="mb-6">
                  {product.original_price && product.original_price > product.price && (
                    <p className="text-2xl text-gray-400 line-through mb-1">
                      {formatPrice(product.original_price)}
                    </p>
                  )}
                  <p className="text-4xl font-bold text-black mb-2">
                    {product.price ? formatPrice(product.price) : 'Consultar Precio'}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Precio incluye IVA • Instalación disponible</p>
                    <span className={`text-sm font-medium ${getStockStatus(product.stock_quantity).color}`}>
                      {getStockStatus(product.stock_quantity).text}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description || 'Producto de herrería artesanal de alta calidad, fabricado con los mejores materiales y técnicas tradicionales. Cada pieza es única y está diseñada para durar toda la vida, combinando funcionalidad con un diseño elegante que complementa cualquier espacio.'}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Especificaciones Técnicas</h4>
                  <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                    {product.dimensions && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">Dimensiones</span>
                        <span className="text-gray-600">{product.dimensions}</span>
                      </div>
                    )}
                    {product.weight && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">Peso</span>
                        <span className="text-gray-600">{formatWeight(product.weight)}</span>
                      </div>
                    )}
                    {product.material && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">Material</span>
                        <span className="text-gray-600">{product.material}</span>
                      </div>
                    )}
                    {product.stock_quantity !== undefined && product.stock_quantity !== null && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">Stock Disponible</span>
                        <span className="text-gray-600">{product.stock_quantity} unidades</span>
                      </div>
                    )}
                  </div>
                  
                  {product.specifications && (
                    <div className="mt-4">
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Especificaciones Adicionales</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{product.specifications}</p>
                    </div>
                  )}
                </div>
                
                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Características Destacadas</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>{product.material || 'Acero de alta resistencia'}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>Soldadura TIG profesional</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>Acabado resistente al clima</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>Garantía de 2 años</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={generateWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Consultar por WhatsApp
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-black text-black hover:bg-black hover:text-white"
                >
                  Solicitar Cotización
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;