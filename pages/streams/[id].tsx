import ProductDesc from '@/components/product-desc';
import Keyboard from '@/components/keyboard';
import Layout from '@/components/layout';
import ChatList from '@/components/chat-list';
import UserBox from '@/components/user-box';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Stream, User } from '@prisma/client';

interface StreamWithUser extends Stream {
  user: User;
}
interface StreamResponse {
  ok: boolean;
  stream: StreamWithUser;
}

const StreamsDetail: NextPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<StreamResponse>(
    router.query.id ? `/api/streams/${router.query.id}` : null
  );

  return (
    <Layout title='라이브 상세보기' canGoBack>
      <section className='p-4'>
        <div className='aspect-video w-full mb-4 rounded-md bg-slate-300 shadow-sm' />
        <UserBox
          size='sm'
          type='link'
          avatar={data?.stream?.user.avatar || ''}
          username={data?.stream?.user.name || '익명'}
        />
        <ProductDesc
          productName={data?.stream.name || '익명'}
          description={data?.stream.description || ''}
          price={data?.stream.price || 0}
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
