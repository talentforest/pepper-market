import { cls } from '@/libs/client/utils';
import { useRouter } from 'next/router';

interface IHeaderProps {
  title?: string;
  canGoBack?: boolean;
}

export default function Header({ title, canGoBack }: IHeaderProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };

  return (
    <header
      className={cls(
        !canGoBack ? 'justify-center' : '',
        'fixed top-0 flex w-full max-w-md items-center border-b bg-white px-4 py-3 text-md font-medium text-gray-800'
      )}
    >
      {canGoBack ? (
        <button onClick={onClick} className='absolute'>
          <svg
            className='h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 19l-7-7 7-7'
            ></path>
          </svg>
        </button>
      ) : null}
      {title && <h1 className='text-center w-full'>{title}</h1>}
    </header>
  );
}
