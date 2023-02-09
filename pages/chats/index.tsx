import Layout from '@/components/layout';
import type { NextPage } from 'next';
import Link from 'next/link';

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title='채팅 목록'>
      <ul className='divide-y'>
        {[1, 2, 3, 4, 5, 6, 7].map((room) => (
          <li key={room} className='hover:bg-slate-100  cursor-pointer'>
            <Link
              href={`/chats/${room}`}
              className='flex items-center space-x-3 p-4'
            >
              <div className='h-12 w-12 rounded-full bg-slate-300' />
              <div className='space-y-1'>
                <p className='text-sm text-gray-900'>인생은 뷰티풀🍋</p>
                <p className='text-sm  text-gray-500'>거래 가능하신가요?</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Chats;
