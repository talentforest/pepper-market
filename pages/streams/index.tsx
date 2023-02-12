import CircleBtn from '@/components/button/circle-btn';
import Layout from '@/components/layout';
import { Stream } from '@prisma/client';
import type { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';

interface StreamsResponse {
  ok: boolean;
  streams: Stream[];
}

const Streams: NextPage = () => {
  const { data } = useSWR<StreamsResponse>('/api/streams');

  return (
    <Layout title='라이브' hasTabBar>
      <ul className='divide-y'>
        {data?.streams?.map((stream) => (
          <li key={stream.id} className='hover:bg-slate-100 p-4'>
            <Link href={`/streams/${stream.id}`}>
              <div className='aspect-video w-full rounded-md bg-slate-300 shadow-sm' />
              <h1 className='mt-2 text-xl font-bold text-gray-900'>
                {stream.name}
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
