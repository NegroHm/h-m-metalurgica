import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  category: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
};

export const useProducts = (category?: string, featuredOnly = false) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let query = supabase.from('products').select('*');
        
        if (featuredOnly) {
          query = query.eq('featured', true);
        }
        
        if (category && category !== 'All') {
          query = query.eq('category', category);
        }
        
        const { data, error } = await query.order('created_at', { ascending: false });
        
        if (error) {
          throw error;
        }
        
        setProducts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, featuredOnly]);

  return { products, loading, error };
};