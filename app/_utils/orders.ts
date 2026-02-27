import { ORDERS_PAGE_SIZE } from './constants';
import { OrderProps } from '@/app/_utils/map/mapOrders';

export function filterOrders({
  orders,
  filter,
}: {
  orders: OrderProps[];
  filter: string;
}) {
  switch (filter) {
    case 'all':
      orders = orders;
      break;
    case 'pending':
      orders = orders.filter((order) => order.fulfillment === 'Pending');
      break;
    case 'processing':
      orders = orders.filter((order) => order.fulfillment === 'Processing');
      break;
    case 'delivered':
      orders = orders.filter((order) => order.fulfillment === 'Delivered');
      break;
    case 'finished':
      orders = orders.filter((order) => order.fulfillment === 'Finished');
      break;
    case 'canceled':
      orders = orders.filter((order) => order.payment === 'Refund');
      break;
  }
  return orders;
}

export function sortOrders({
  orders,
  sortby,
}: {
  orders: OrderProps[];
  sortby: string;
}) {
  switch (sortby) {
    case 'date_down':
      orders = orders.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      break;
    case 'date_up':
      orders = orders.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
      break;
    case 'order_down':
      orders = orders.sort(
        (a, b) => Number(b.number.slice(1)) - Number(a.number.slice(1)),
      );
      break;
    case 'order_up':
      orders = orders.sort(
        (a, b) => Number(a.number.slice(1)) - Number(b.number.slice(1)),
      );
      break;
    case 'total_down':
      orders = orders.sort((a, b) => b.total - a.total);
      break;
    case 'total_up':
      orders = orders.sort((a, b) => a.total - b.total);
      break;
  }

  return orders;
}

export function paginateOrders({
  orders,
  page,
}: {
  orders: OrderProps[];
  page: string;
}) {
  const pageNum = Number(page);
  const start = (pageNum - 1) * ORDERS_PAGE_SIZE;
  const end = pageNum * ORDERS_PAGE_SIZE;
  orders = orders.slice(start, end);

  return orders;
}
