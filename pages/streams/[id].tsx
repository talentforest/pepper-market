import ProductDesc from '@/components/product-desc';
import Keyboard from '@/components/keyboard';
import Layout from '@/components/layout';
import ChatList from '@/components/chat-list';
import UserBox from '@/components/user-box';
import type { NextPage } from 'next';

const StreamsDetail: NextPage = () => {
  return (
    <Layout title='라이브 상세보기' canGoBack>
      <section className='p-4'>
        <div className='aspect-video w-full mb-4 rounded-md bg-slate-300 shadow-sm' />
        <UserBox size='sm' type='link' />
        <ProductDesc
          itemName='갤럭시 S50'
          description='좋은 가격에 판매하고 있습니다. 라이브로 기기의 상태를 보여드리고 있으니 많이많이 들러주세요 ㅎㅎ 자 이제 조금 있으면 시작합니다. 시작 가격은 50만원부터 시작하겠습니다! 상태가 정말 좋거든요 쓴 지 정말 얼마 안됐어요.'
          price={500400}
        />
      </section>
      <section className='p-4'>
        <h2 className='text-2xl font-bold text-gray-900 mb-1'>Live Chat</h2>
        <ChatList />
        <Keyboard />
      </section>
    </Layout>
  );
};

export default StreamsDetail;
