import ProductCard from "./ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
  const { products: grillProducts, loading: grillsLoading } = useProducts('Grill', true);
  const { products: gateProducts, loading: gatesLoading } = useProducts('Gate', true);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestra Colección
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        {/* Featured Grills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Parrillas Destacadas
          </h2>
          {grillsLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Cargando parrillas...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {grillProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
        
        {/* Custom Gates & Railings Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Portones y Rejas a Medida
          </h2>
          {gatesLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Cargando portones...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {gateProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
        
        {/* View All Products Button */}
        <div className="text-center">
          <Link to="/products">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold">
              Ver Todos los Productos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;