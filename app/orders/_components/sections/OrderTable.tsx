'use client';

import TableContent from './TableContent';
import TableHeader from './TableHeader';
import { OrderProps } from '@/app/_utils/map/mapOrders';

function OrderTable({ orders }: { orders: OrderProps[] }) {
  return (
    <div className='border border-primary-300 rounded'>
      <TableHeader />
      <TableContent orders={orders} />
    </div>
  );
}

export default OrderTable;
