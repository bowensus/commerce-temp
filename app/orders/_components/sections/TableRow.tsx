import CheckButton from '@/app/_components/ui/CheckButton';
import Text from '@/app/_components/ui/Text';
import { formatTime } from '@/app/_utils/format/formatTime';
import { OrderProps } from '@/app/_utils/map/mapOrders';

function TableRow({ order }: { order: OrderProps }) {
  const { number, createdAt, items, total, fulfillment } = order;
  const time = formatTime(createdAt);

  return (
    <div className='px-5 border-t border-primary-300 flex py-5 hover:bg-primary-100 items-center'>
      <CheckButton className='flex flex-[1]' message='' />
      <Text className='flex flex-[2] font-mono' message={number} />
      <Text className='flex flex-[3] font-mono'>
        <span className='text-primary-800'>{time}</span>
      </Text>
      <div className='flex flex-[3] flex-col items-start text-left'>
        <Text className='pr-5 text-accent-800' message={items[0].title} />
      </div>
      <div className='flex flex-[2] font-mono'>
        <Text className='pr-5' message={`${total.toString()}.00`} />
      </div>
      <div className='flex flex-[3]'>
        <Text className='pr-5' message={fulfillment} />
      </div>
    </div>
  );
}

export default TableRow;
