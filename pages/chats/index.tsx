import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title='채팅 목록'>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7].map((room) => (
          <li
            key={room}
            className='border-b last:border-none py-4 first:pt-0 flex cursor-pointer items-center space-x-3 '
          >
            <div className='h-12 w-12 rounded-full bg-slate-300' />
            <div className='space-y-1'>
              <p className='text-sm text-gray-900'>인생은 뷰티풀🍋</p>
              <p className='text-sm  text-gray-500'>거래 가능하신가요?</p>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Chats;
