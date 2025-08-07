import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { products, loading, error } = useProducts(activeFilter);

  const categories = ['Todos', 'Parrillas', 'Portones', 'Rejas', 'Muebles', 'Otros'];

  const handleFilterClick = (category: string) => {
    setActiveFilter(category === 'Parrillas' ? 'Grill' : 
                   category === 'Portones' ? 'Gate' : 
                   category === 'Rejas' ? 'Railing' : 
                   category === 'Muebles' ? 'Furniture' :
                   category === 'Otros' ? 'Other' : 'All');
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Error</h1>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Nuestro Catálogo Completo
            </h1>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === (category === 'Parrillas' ? 'Grill' : 
                                           category === 'Portones' ? 'Gate' : 
                                           category === 'Rejas' ? 'Railing' : 
                                           category === 'Muebles' ? 'Furniture' :
                                           category === 'Otros' ? 'Other' : 'All') ? 'default' : 'outline'}
                  onClick={() => handleFilterClick(category)}
                  className="transition-colors"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          {loading ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Cargando productos...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          
          {!loading && products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No se encontraron productos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;