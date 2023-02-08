import CircleBtn from '@/components/button/circleBtn';
import Layout from '../../components/layout';
import type { NextPage } from 'next';
import IconBox from '@/components/iconBox';
import Tag from '@/components/tag';

const Community: NextPage = () => {
  return (
    <Layout hasTabBar title='동네생활'>
      <ul className='space-y-4'>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <li key={item} className='flex cursor-pointer flex-col items-start'>
            <Tag />
            <div className='mt-2 text-gray-700'>
              <span className='font-medium text-orange-500'>Q.</span> 서울에
              있는 순대 트럭 언제 오시는지 아시나요?ㅠㅠ 너무 먹고 싶어요.
            </div>
            <div className='mt-5 flex w-full items-center justify-between text-xs font-medium text-gray-500'>
              <span>니꼬</span>
              <span>18시간 전</span>
            </div>
            <div className='mt-10 flex w-full space-x-5 border-y border-b-2 py-2 text-gray-700'>
              <IconBox iconName='curiosity' content='궁금해요 1' />
              <IconBox iconName='comment' content='답변 1' />
            </div>
          </li>
        ))}
        <CircleBtn route='community' fixed />
      </ul>
    </Layout>
  );
};

export default Community;
