import { supabase } from '../supabase';

export interface OptionOutputProps {
  id: number;
  size: string;
  color: string;
  price: number;
  discount: number;
  sku_code: string;
  product_id: number;
}

export interface ProductOutputProps {
  id: number;
  created_at: string;
  catalog: string;
  title: string;
  description: string;
  currency: string;
  image: string;
  published_at?: string | null;
  options: OptionOutputProps[];
}

export interface ProductInputProps {
  catalog: string;
  title: string;
  description: string;
  currency: string;
  image: string;
  published_at?: string | null;
}

export interface OptionInputProps {
  size: string;
  color: string;
  price: number;
  discount: number;
  sku_code: string;
  product_id: number;
}

export const getProducts = async (): Promise<ProductOutputProps[]> => {
  const { data, error } = await supabase
    .from('products')
    .select(
      `
      id,
      created_at,
      catalog,
      title,
      description,
      currency,
      image,
      published_at,
      options (
        id,
        size,
        color,
        price,
        discount,
        sku_code,
        product_id
      )
    `,
    )
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    throw new Error('Products could not be loaded');
  }

  return data || [];
};

export const createProduct = async (product: ProductInputProps) => {
  const { data: newProduct, error } = await supabase
    .from('products')
    .insert(product)
    .select('id')
    .single();

  if (error) {
    console.error('SUPABASE ERROR FULL 👉', error);
    throw error;
  }
  return newProduct.id;
};

export const creatOptions = async (options: OptionInputProps[]) => {
  const { error } = await supabase.from('options').insert(options);

  if (error) {
    console.error('SUPABASE ERROR FULL 👉', error);
    throw error;
  }
  return { success: true };
};

export const getProduct = async (id: number): Promise<ProductOutputProps> => {
  const { data: product, error } = await supabase
    .from('products')
    .select(
      `
      id,
      created_at,
      catalog,
      title,
      description,
      currency,
      image,
      published_at,
      options (
        id,
        size,
        color,
        price,
        discount,
        sku_code,
        product_id
      )
    `,
    )
    .eq('id', id)
    .single();

  if (error) {
    console.error('SUPABASE ERROR FULL 👉', error);
    throw error;
  }
  return product;
};

export const deleteProduct = async (id: number) => {
  const { error } = await supabase.from('products').delete().eq('id', id);

  if (error) {
    console.error('SUPABASE ERROR FULL 👉', error);
    throw error;
  }
  return id;
};

export const deleteProductOptions = async (id: number) => {
  const { error } = await supabase
    .from('options')
    .delete()
    .eq('product_id', id);

  if (error) {
    console.error('SUPABASE ERROR FULL 👉', error);
    throw error;
  }
  return { success: true };
};

export const updateProduct = async (id: number, data: ProductInputProps) => {
  const { data: updated, error } = await supabase
    .from('products')
    .update(data)
    .eq('id', id)
    .select();

  if (error) {
    console.error('SUPABASE ERROR FULL 👉', error);
    throw error;
  }
  return { success: true };
};

export const duplicateProduct = async (data: ProductInputProps) => {
  const { data: duplicate, error } = await supabase
    .from('products')
    .insert(data)
    .select('id')
    .single();

  if (error) {
    console.error('SUPABASE ERROR FULL 👉', error);
    throw error;
  }
  return duplicate.id;
};
