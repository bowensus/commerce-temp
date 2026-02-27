'use server';

import { getOrders } from '@/app/_lib/services/order-service';
import mapOrders from '@/app/_utils/map/mapOrders';

export async function getOrdersAction() {
  const data = await getOrders();
  const orders = data.map((order) => mapOrders(order));
  return orders;
}
