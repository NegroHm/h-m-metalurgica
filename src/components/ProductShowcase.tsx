import ProductCard from "./ProductCard";
import parrillaImage from "@/assets/parrilla-fogonero.jpg";
import gateImage from "@/assets/iron-gate-fortaleza.jpg";
import tableImage from "@/assets/steel-wood-table.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: "1",
      name: "Parrilla \"El Fogonero\" Pro",
      price: "$1,200.00",
      image: parrillaImage,
      description: "Crafted from high-gauge steel with a refractory brick base, this professional-grade grill offers exceptional heat distribution and durability. Features adjustable grill height, reinforced side handles, and premium steel grates designed for optimal cooking performance. Perfect for both intimate gatherings and large celebrations, this parrilla embodies our commitment to quality and traditional craftsmanship."
    },
    {
      id: "2", 
      name: "Modern Iron Gate \"Fortaleza\"",
      price: "Request Quote",
      image: gateImage,
      description: "An elegant wrought iron gate combining security with artistic design. Hand-forged with intricate scrollwork and finished with premium protective coating for lasting durability. Each gate is custom-designed to complement your property's architecture while providing maximum security. Our master craftsmen ensure every detail meets the highest standards of both form and function."
    },
    {
      id: "3",
      name: "Steel and Wood Side Table \"Industria\"", 
      price: "$450.00",
      image: tableImage,
      description: "A perfect fusion of industrial aesthetics and functional design. Features a solid steel frame with precision welding and a carefully selected wood top finished to highlight natural grain patterns. The minimalist design complements both modern and traditional interiors, while the robust construction ensures years of reliable use. Each piece is handcrafted with attention to detail."
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Collection
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;