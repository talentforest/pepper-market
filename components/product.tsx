import Link from 'next/link';
import IconBox from './iconBox';

interface IProductProps {
  href: string;
  title: string;
  subtitle: string;
  price: number;
  isLikedCount: number;
}

const ProductBox = ({
  href,
  title,
  subtitle,
  price,
  isLikedCount,
}: IProductProps) => {
  return (
    <li className='relative hover:bg-slate-100 p-4 cursor-pointer '>
      <Link href={href} className='w-full flex'>
        <div className='h-20 w-20 mr-3 rounded-md bg-gray-400' />
        <div className='flex flex-col justify-center'>
          <h3 className='text-sm mb-1 font-extrabold text-black'>{title}</h3>
          <span className='text-xs text-gray-500'>{subtitle}</span>
          <span className='mt-1 font-medium text-gray-700'>
            ₩ {price.toLocaleString('ko')}
          </span>
        </div>
        <div className='absolute bottom-4 right-4  flex items-end justify-end space-x-2'>
          <IconBox iconName='heart' content={isLikedCount} />
          <IconBox iconName='comment' content={0} />
        </div>
      </Link>
    </li>
  );
};

export default ProductBox;
