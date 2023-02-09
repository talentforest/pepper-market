import { cls } from '@/libs/client/utils';
import Link from 'next/link';
import StarRate from './starRate';

interface IUserBoxProps {
  type: 'star' | 'link' | 'btn' | 'time';
  time?: number;
  size: 'xs' | 'sm' | 'md' | 'lg';
  avatar: string;
  username: string;
}

const UserBox = ({ size, type, time, avatar, username }: IUserBoxProps) => {
  return (
    <header className='py-2 w-full flex items-center space-x-2'>
      <img
        src={avatar}
        className={cls(
          size === 'xs'
            ? 'h-9 w-9'
            : size === 'sm'
            ? 'h-10 w-10'
            : size === 'md'
            ? 'h-12 w-12'
            : size === 'lg'
            ? 'h-16 w-16'
            : '',
          'rounded-full bg-slate-500'
        )}
      />
      <div className='flex flex-col space-y-0.5'>
        <span
          className={cls(
            size === 'xs'
              ? 'text-[13px]'
              : size === 'sm'
              ? 'text-sm'
              : size === 'md'
              ? 'text-base'
              : size === 'lg'
              ? 'text-lg'
              : '',
            'font-bold  text-gray-900'
          )}
        >
          {username}
        </span>
        {type === 'link' && (
          <Link href={'/profile'} className='text-xs text-gray-500 font-medium'>
            프로필 보기 &rarr;
          </Link>
        )}
        {type === 'btn' && (
          <Link
            href={'/profile/edit'}
            className='text-xs text-gray-500 font-medium'
          >
            프로필 수정하기 &rarr;
          </Link>
        )}
        {time && (
          <span className='text-xs text-gray-500 font-medium'>{time} 전</span>
        )}
        {type === 'star' && <StarRate />}
      </div>
    </header>
  );
};

export default UserBox;
