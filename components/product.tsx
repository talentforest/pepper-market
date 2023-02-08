import IconBox from './iconBox';

const Product = () => {
  return (
    <li className='flex cursor-pointer justify-between border-b pb-5 last:border-none'>
      <div className='flex space-x-4'>
        <div className='h-20 w-20 rounded-md bg-gray-400' />
        <div className='flex flex-col pt-2'>
          <h3 className='text-sm font-medium text-gray-900'>New iPhone 14</h3>
          <span className='text-xs text-gray-500'>Black</span>
          <span className='mt-1 font-medium text-gray-900'>$95</span>
        </div>
      </div>
      <div className='flex items-end justify-end space-x-2'>
        <IconBox iconName='heart' content={1} />
        <IconBox iconName='comment' content={1} />
      </div>
    </li>
  );
};

export default Product;
