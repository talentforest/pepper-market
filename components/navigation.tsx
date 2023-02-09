import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const { pathname } = useRouter();
  const getCurPathStyle = (path: string) =>
    pathname === path ? 'text-orange-500' : 'hover:text-gray-400';

  return (
    <nav className='fixed bottom-0 w-full max-w-md border border-t bg-white px-8 py-2 text-xs text-gray-600'>
      <ul className='flex justify-between items-center'>
        <li className={getCurPathStyle('/')}>
          <Link href='/' className='flex flex-col items-center space-y-1'>
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
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              ></path>
            </svg>
            <span>홈</span>
          </Link>
        </li>
        <li className={getCurPathStyle('/community')}>
          <Link
            href='/community'
            className='flex flex-col items-center space-y-1'
          >
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
                d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
              ></path>
            </svg>
            <span>동네생활</span>
          </Link>
        </li>
        <li className={getCurPathStyle('/chats')}>
          <Link href='/chats' className='flex flex-col items-center space-y-1'>
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
                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
              ></path>
            </svg>
            <span>채팅</span>
          </Link>
        </li>
        <li className={getCurPathStyle('/live')}>
          <Link href='/live' className='flex flex-col items-center space-y-1'>
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
                d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
              ></path>
            </svg>
            <span>라이브</span>
          </Link>
        </li>
        <li className={getCurPathStyle('/profile')}>
          <Link
            href='/profile'
            className='flex flex-col items-center space-y-1'
          >
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
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              ></path>
            </svg>
            <span>나의 캐럿</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
