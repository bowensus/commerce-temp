import TableRow from './TableRow';
import { OrderProps } from '@/app/_utils/map/mapOrders';

function TableContent({ orders }: { orders: OrderProps[] }) {
  return (
    <div className='flex flex-col'>
      {orders.map((order, i) => (
        <TableRow key={i} order={order} />
      ))}
    </div>
  );
}

export default TableContent;
