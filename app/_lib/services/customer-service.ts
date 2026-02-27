import { supabase } from '../supabase';

export interface CustomerProps {
  id: number;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const getCustomer = async (id: number): Promise<CustomerProps> => {
  const { data: customer, error } = await supabase
    .from('customers')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Customer could not be loaded');
  }
  return customer;
};
