import CircleBtn from '@/components/button/circleBtn';
import Layout from '../../components/layout';
import type { NextPage } from 'next';
import IconBox from '@/components/iconBox';
import Tag from '@/components/tag';
import Link from 'next/link';
import useSWR from 'swr';

const Community: NextPage = () => {
  // const { data } = useSWR('/api/posts');

  return (
    <Layout hasTabBar title='동네생활'>
      <ul>
        {[1].map((post) => (
          <li key={post} className='hover:bg-slate-100 p-4 pb-0 cursor-pointer'>
            <Link
              href={`/community/${post}`}
              className='flex flex-col items-start'
            >
              <Tag />
              <div className='mt-2 text-gray-700'>
                <span className='font-medium text-orange-500'>Q.</span>
              </div>
              <div className='mt-5 flex w-full items-center justify-between text-xs font-medium text-gray-500'>
                <span>니꼬</span>
                <span>18시간 전</span>
              </div>
              <div className='mt-10 flex w-full space-x-5 border-y border-b-2 py-2 text-gray-700'>
                <IconBox iconName='curiosity' content='궁금해요 1' />
                <IconBox iconName='comment' content='답변 1' />
              </div>
            </Link>
          </li>
        ))}
        <CircleBtn href='/community/write' from='community' fixed />
      </ul>
    </Layout>
  );
};

export default Community;
