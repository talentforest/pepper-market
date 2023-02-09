import Link from 'next/link';
import IconBox from './iconBox';

interface IProductProps {
  href: string;
}

const Product = ({ href }: IProductProps) => {
  return (
    <li className='hover:bg-slate-100 p-4 cursor-pointer '>
      <Link href={href} className='w-full flex justify-between'>
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
      </Link>
    </li>
  );
};

export default Product;
