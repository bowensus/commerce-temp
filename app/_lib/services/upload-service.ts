// For testing data
import parseForeignKey from '@/app/_utils/parse/parseForeignKey';
import { customers } from '@/app/data/mock/customers';
import { options } from '@/app/data/mock/options';
import { orders } from '@/app/data/mock/orders';
import { products } from '@/app/data/mock/products';
import { supabase } from '../supabase';

export const createCustomers = async () => {
  const { error } = await supabase.from('customers').insert(customers);
  if (error) console.log(error.message);
};

export const deleteCustomers = async () => {
  const { error } = await supabase.from('customers').delete().gt('id', 0);
  if (error) console.log(error.message);
};

export const createOrders = async () => {
  const { error } = await supabase.from('orders').insert(orders);
  if (error) console.log(error.message);
};

export const deleteOrders = async () => {
  const { error } = await supabase.from('orders').delete().gt('id', 0);
  if (error) console.log(error.message);
};

export const createProducts = async () => {
  const { error } = await supabase.from('products').insert(products);
  if (error) console.log(error.message);
};

export const deleteProducts = async () => {
  const { error } = await supabase.from('products').delete().gt('id', 0);
  if (error) console.log(error.message);
};

export const createOptions = async () => {
  // get supabase true_id
  const { data: productIds } = await supabase
    .from('products')
    .select('id')
    .order('id');
  const finalOptions = parseForeignKey(options, productIds);
  const { error } = await supabase.from('options').insert(finalOptions);
  if (error) console.log(error.message);
};

export const deleteOptions = async () => {
  const { error } = await supabase.from('options').delete().gt('id', 0);
  if (error) console.log(error.message);
};
