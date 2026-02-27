import {
  OrderOutputProps,
  CustomerSnapshot,
  ItemsProps,
} from '@/app/_lib/services/order-service';

export interface OrderProps {
  id: number;
  createdAt: string;
  number: string;
  total: number;
  payment: string;
  fulfillment: string;
  shippedAt?: string | null;
  completedAt?: string | null;
  items: ItemsProps[];
  customer: CustomerSnapshot;
}

export default function mapOrders(data: OrderOutputProps) {
  const order: OrderProps = {
    id: data.id,
    createdAt: data.created_at,
    number: data.number,
    total: data.total,
    payment: data.payment,
    fulfillment: data.fulfillment,
    shippedAt: data.shipped_at,
    completedAt: data.completed_at,
    customer: data.customer,
    items: data.items,
  };

  return order;
}
