'use client';

import Button from '@/app/_components/ui/Button';
import Tabs from '@/app/_components/ui/Tabs';
import SearchInput from '@/app/_components/ui/SearchInput';
import Toolbar from '@/app/_components/ui/Toolbar';
import { IoIosArrowDown } from 'react-icons/io';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Menus from '@/app/_components/ui/Menus';

const filters = [
  'all',
  'pending',
  'processing',
  'delivered',
  'finished',
  'canceled',
];

const sortby = [
  { label: 'Created at: Newest', value: 'date_down' },
  { label: 'Created at: Oldest', value: 'date_up' },
  { label: 'Order No: High → Low', value: 'order_down' },
  { label: 'Order No: Low → High', value: 'order_up' },
  { label: 'Total: High → Low', value: 'total_down' },
  { label: 'Total: Low → High', value: 'total_up' },
];

function OrderTab() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const getParams = () => searchParams.get('filter') ?? 'all';

  function handleFilter(key: string) {
    const params = new URLSearchParams(searchParams);
    params.set('filter', key);
    params.set('page', '1');
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function handleSortBy(key: string) {
    const params = new URLSearchParams(searchParams);
    params.set('sortby', key);
    params.set('page', '1');
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <>
      <Tabs className='pt-5' labels={['My Orders', 'Other Orders']} />
      <SearchInput className='mt-6' />
      <div className='my-8 flex'>
        <div className='flex w-[760px] gap-2 items-center'>
          {filters.map((filter, i) => {
            const active = getParams() === filter;
            return (
              <Button
                size='filter'
                key={i}
                active={active}
                onClick={() => handleFilter(filter)}
              >
                <span className='capitalize'>{filter}</span>
              </Button>
            );
          })}
        </div>
        <Menus type='toolbar' className='max-w-64 min-w-56 ml-auto'>
          <Menus.Toggle
            button={
              <Toolbar className='w-full' size='full'>
                Anytime
                <div className='ml-auto text-xl'>
                  <IoIosArrowDown />
                </div>
              </Toolbar>
            }
          />
          <Menus.List type='toolbar' className='w-full'>
            <div className='flex flex-col w-full'>
              {sortby.map((sort, i) => {
                return (
                  <Menus.Button
                    size='toolbar'
                    key={i}
                    onClick={() => handleSortBy(sort.value)}
                  >
                    {sort.label}
                  </Menus.Button>
                );
              })}
            </div>
          </Menus.List>
        </Menus>
      </div>
    </>
  );
}

export default OrderTab;
