'use server';

import {
  createCustomers,
  deleteCustomers,
  createOrders,
  deleteOrders,
  createProducts,
  deleteProducts,
  deleteOptions,
  createOptions,
} from '../services/upload-service';

export async function uploadCustomersAction() {
  await deleteCustomers();
  await createCustomers();
}

export async function uploadOrdersAction() {
  await deleteOrders();
  await createOrders();
}

export async function uploadProductsAction() {
  await deleteOptions();
  await deleteProducts();
  await createProducts();
}

export async function uploadOptionsAction() {
  await deleteOptions();
  await createOptions();
}

export async function clearProductsAction() {
  await deleteOptions();
  await deleteProducts();
}
