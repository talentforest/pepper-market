import CircleBtn from '@/components/button/circleBtn';
import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Live: NextPage = () => {
  return (
    <Layout title='라이브' hasTabBar>
      <ul className='space-y-4'>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <li key={item} className='border-b border-slate-300 pb-3'>
            <div className='aspect-video w-full rounded-md bg-slate-300 shadow-sm' />
            <h1 className='mt-2 text-xl font-bold text-gray-900'>갤럭시 S50</h1>
          </li>
        ))}
      </ul>
      <CircleBtn route='live' fixed />
    </Layout>
  );
};

export default Live;
