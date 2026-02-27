'use client';

import { getOrdersAction } from '@/app/_lib/actions/order-action';
import { RootState } from '@/app/_store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '@/app/_store/slices/ordersSlice';
import { filterOrders, paginateOrders, sortOrders } from '@/app/_utils/orders';

import Pagination from '@/app/_components/ui/Pagination';
import OrderHeader from './sections/OrderHeader';
import OrderTab from './sections/OrderTab';
import OrderTable from './sections/OrderTable';
import { ORDERS_PAGE_SIZE } from '@/app/_utils/constants';
import Spinner from '@/app/_components/ui/Spinner';

interface FilterProps {
  filter: string;
  sortby: string;
  page: string;
}

function MyOrder({ filter, sortby, page }: FilterProps) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    async function fetchOrders() {
      setIsLoading(true);
      const orders = await getOrdersAction();
      dispatch(setOrders(orders));
      setIsLoading(false);
    }
    fetchOrders();
  }, [dispatch]);

  let filtered = [...orders];

  filtered = filterOrders({ orders: filtered, filter });
  filtered = sortOrders({ orders: filtered, sortby });

  let paged = [...filtered];
  paged = paginateOrders({ orders: filtered, page });

  const pages = Math.ceil(filtered.length / ORDERS_PAGE_SIZE);

  return (
    <div className='p-5 bg-primary-50 text-primary-900'>
      <OrderHeader />
      <OrderTab />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <OrderTable orders={paged} />
          <div className='flex justify-center'>
            <Pagination pages={pages} />
          </div>
        </>
      )}
    </div>
  );
}

export default MyOrder;
