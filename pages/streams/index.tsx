import CircleBtn from '@/components/button/circle-btn';
import Layout from '@/components/layout';
import type { NextPage } from 'next';
import Link from 'next/link';

const Streams: NextPage = () => {
  return (
    <Layout title='라이브' hasTabBar>
      <ul className='divide-y'>
        {[1, 2, 3, 4, 5, 6, 7].map((stream) => (
          <li key={stream} className='hover:bg-slate-100 p-4'>
            <Link href={`/streams/${stream}`}>
              <div className='aspect-video w-full rounded-md bg-slate-300 shadow-sm' />
              <h1 className='mt-2 text-xl font-bold text-gray-900'>
                갤럭시 S50
              </h1>
            </Link>
          </li>
        ))}
      </ul>
      <CircleBtn href='/streams/create' from='stream' fixed />
    </Layout>
  );
};

export default Streams;
