-- Create products table
CREATE TABLE public.products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2),
  description TEXT,
  image_url TEXT,
  category TEXT NOT NULL CHECK (category IN ('Grill', 'Gate', 'Railing', 'Furniture', 'Other')),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (no authentication required for viewing products)
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

-- Insert sample data
INSERT INTO public.products (name, price, description, image_url, category, featured) VALUES
('Parrilla "El Fogonero" Pro', 1200.00, 'Crafted from high-gauge steel with a refractory brick base, this professional-grade grill offers exceptional heat distribution and durability. Features adjustable grill height, reinforced side handles, and premium steel grates designed for optimal cooking performance.', '/src/assets/parrilla-fogonero.jpg', 'Grill', true),
('Modern Iron Gate "Fortaleza"', 2500.00, 'An elegant wrought iron gate combining security with artistic design. Hand-forged with intricate scrollwork and finished with premium protective coating for lasting durability. Each gate is custom-designed to complement your property architecture.', '/src/assets/iron-gate-fortaleza.jpg', 'Gate', true),
('Steel and Wood Side Table "Industria"', 450.00, 'A perfect fusion of industrial aesthetics and functional design. Features a solid steel frame with precision welding and a carefully selected wood top finished to highlight natural grain patterns.', '/src/assets/steel-wood-table.jpg', 'Furniture', true),
('Parrilla "El Asador" Classic', 850.00, 'Traditional Argentine-style grill perfect for family gatherings. Built with premium steel construction and adjustable cooking height for versatile grilling options.', '/src/assets/parrilla-fogonero.jpg', 'Grill', true),
('Security Railing "Guardian"', 180.00, 'Heavy-duty steel railing system designed for maximum security and longevity. Features powder-coated finish and modular design for easy installation.', '/src/assets/iron-gate-fortaleza.jpg', 'Railing', false),
('Custom Workshop Table', 680.00, 'Industrial-grade work table with reinforced steel frame and hardwood surface. Perfect for workshops and industrial applications.', '/src/assets/steel-wood-table.jpg', 'Furniture', false);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
    BEFORE UPDATE ON public.products
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();