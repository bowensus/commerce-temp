import CheckButton from '@/app/_components/ui/CheckButton';
import Text from '@/app/_components/ui/Text';

function TableHeader() {
  return (
    <div className='py-5 px-5 flex text-primary-800 bg-primary-100'>
      <CheckButton className='flex flex-[1]' message='' />
      <Text className='flex flex-[2]' message='Order No.' />
      <Text className='flex flex-[3]' message='Date' />
      <Text className='flex flex-[3]' message='Products' />
      <Text className='flex flex-[2]' message='Total ($)' />
      <Text className='flex flex-[3]' message='Status' />
    </div>
  );
}

export default TableHeader;
