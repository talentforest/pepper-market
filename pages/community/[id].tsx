import IconBox from '@/components/iconBox';
import Layout from '@/components/layout';
import SquareBtn from '@/components/button/squareBtn';
import Tag from '@/components/tag';
import Textarea from '@/components/input/textarea';
import UserBox from '@/components/userBox';
import type { NextPage } from 'next';

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout title='동네 질문' canGoBack>
      <article className='p-4'>
        <Tag />
        <UserBox size='sm' type='link' />
        <h3 className='p-1 text-gray-700'>
          <span className='font-medium text-orange-500'>Q.</span> 서울에 있는
          순대 트럭 언제 오시는지 아시나요?ㅠㅠ 너무 먹고 싶어요.
        </h3>
        <div className='mt-10 flex w-full space-x-5 border-y py-2 text-gray-700'>
          <IconBox iconName='curiosity' content='궁금해요 1' />
          <IconBox iconName='comment' content='답변 1' />
        </div>
        <div className='my-5 flex flex-col items-start'>
          <UserBox size='xs' type='time' time={30} />
          <p className='p-1 text-gray-700'>순대 트럭 매주 금요일마다 오세요!</p>
        </div>
        <div>
          <Textarea placeholder='질문에 대한 답을 아신다면 댓글을 달아주세요!' />
          <SquareBtn name='답장하기' canSubmit />
        </div>
      </article>
    </Layout>
  );
};

export default CommunityPostDetail;
