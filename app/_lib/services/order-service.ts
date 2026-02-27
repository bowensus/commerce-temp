import { supabase } from '../supabase';

export interface ItemsProps {
  title: string;
  size: string;
  color: string;
  price: number;
  discount: number;
  skuId: string;
  productId: string;
}

export interface CustomerSnapshot {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface OrderOutputProps {
  id: number;
  created_at: string;
  number: string;
  shipping_fee: number;
  total: number;
  payment: string;
  fulfillment: string;
  shipped_at?: string | null;
  completed_at?: string | null;
  customer: CustomerSnapshot;
  items: ItemsProps[];
}

export const getOrders = async (): Promise<OrderOutputProps[]> => {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    throw new Error('Orders could not be loaded');
  }

  return data || [];
};
