import ProductDesc from '@/components/product-desc';
import Keyboard from '@/components/keyboard';
import Layout from '@/components/layout';
import ChatList from '@/components/chat-list';
import UserBox from '@/components/user-box';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Stream, User } from '@prisma/client';
import { useForm } from 'react-hook-form';
import useMutation from '@/libs/client/useMutation';
import useSWR from 'swr';
import { useEffect } from 'react';
import useUser from '@/libs/client/useUser';

export interface StreamMessage {
  id: number;
  message: string;
  user: {
    avatar?: User;
    id: number;
  };
}
interface StreamWithExtra extends Stream {
  user: User;
  streamMessages: StreamMessage[];
}
interface StreamResponse {
  ok: boolean;
  stream: StreamWithExtra;
}
export interface MessageForm {
  message: string;
}

const StreamsDetail: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { data, mutate } = useSWR<StreamResponse>(
    router.query.id ? `/api/streams/${router.query.id}` : null,
    {
      refreshInterval: 1000,
    }
  );
  const [sendMessages, { loading, data: sendMessageData }] = useMutation(
    `/api/streams/${router.query.id}/messages`
  );

  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const onValid = (form: MessageForm) => {
    if (loading) return;
    reset();
    mutate(
      (prev) =>
        prev &&
        ({
          ...prev,
          stream: {
            ...prev.stream,
            streamMessages: [
              ...prev.stream.streamMessages,
              {
                id: Date.now(),
                message: form.message,
                user: {
                  ...user,
                },
              },
            ],
          },
        } as any),
      false
    );
    // sendMessages(form);
  };

  // 1. 메세지를 보낼때마다 계속 fetch하는 방법
  // useEffect(() => {
  //   if (sendMessageData && sendMessageData.ok) {
  //     mutate();
  //   }
  // }, [sendMessageData]);

  return (
    <Layout title='라이브 상세보기' canGoBack>
      <section className='p-4'>
        <div className='aspect-video w-full mb-4 rounded-md bg-slate-300 shadow-sm' />
        <UserBox
          size='sm'
          type='link'
          avatar={data?.stream?.user?.avatar || ''}
          username={data?.stream?.user?.name || '익명'}
        />
        <ProductDesc
          productName={data?.stream?.name || '익명'}
          description={data?.stream?.description || ''}
          price={data?.stream?.price || 0}
        />
      </section>
      <section className='p-4'>
        <h2 className='text-2xl font-bold text-gray-900 mb-1'>Live Chat</h2>
        <ChatList messages={data?.stream?.streamMessages || []} />
        <Keyboard
          register={register('message', { required: true })}
          handleSubmit={handleSubmit}
          onValid={onValid}
        />
      </section>
    </Layout>
  );
};

export default StreamsDetail;
