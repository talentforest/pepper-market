import IconBox from '@/components/icon-box';
import Layout from '@/components/layout';
import SquareBtn from '@/components/button/square-btn';
import Tag from '@/components/tag';
import Textarea from '@/components/input/textarea';
import UserBox from '@/components/user-box';
import useSWR from 'swr';
import useMutation from '@/libs/client/useMutation';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Answer, Post, User } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export interface PostWithUser extends Post {
  answers: AnswerWithUser[];
  user: User;
  _count: {
    answers: number;
    curiosities: number;
  };
}
interface CommunityPostResponse {
  ok: boolean;
  post: PostWithUser;
  myCuriosity: boolean;
}
interface AnswerWithUser extends Answer {
  user: User;
}
interface AnswerForm {
  answer: string;
}
interface AnswerResponse {
  ok: boolean;
  response: Answer;
}

const CommunityPostDetail: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<AnswerForm>();
  const { data, mutate } = useSWR<CommunityPostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );
  const [curiosity, { loading }] = useMutation<CommunityPostResponse>(
    `/api/posts/${router.query.id}/curiosity`
  );
  const [sendAnswer, { data: answerData, loading: answerLoading }] =
    useMutation<AnswerResponse>(`/api/posts/${router.query.id}/answers`);

  const onCuriosityClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data.post,
          _count: {
            ...data.post._count,
            curiosities: data.myCuriosity
              ? data?.post._count.curiosities - 1
              : data?.post._count.curiosities + 1,
          },
        },
        myCuriosity: !data.myCuriosity,
      },
      false
    );
    if (!loading) {
      curiosity({});
    }
  };

  const onValid = (form: AnswerForm) => {
    if (answerLoading) return;
    sendAnswer(form);
  };

  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset, mutate]);

  return (
    <Layout title='동네 질문' canGoBack>
      <article className='p-4'>
        <Tag />
        <UserBox
          size='sm'
          type='link'
          avatar={data?.post.user.avatar!}
          username={data?.post.user.name!}
        />
        <h3 className='p-1 text-gray-700'>
          <span className='font-medium text-orange-500 pr-2 text-lg'>Q.</span>
          {data?.post.question}
        </h3>
        <div className='mt-10 flex w-full space-x-5 border-y py-2 text-gray-700'>
          <IconBox
            iconName='curiosity'
            content={`궁금해요 ${data?.post?._count.curiosities || 0}`}
            onMutateClick={onCuriosityClick}
            myCuriosity={data?.myCuriosity}
          />
          <IconBox
            iconName='comment'
            content={`댓글 ${data?.post?._count.answers || 0}`}
            onMutateClick={onCuriosityClick}
          />
        </div>
      </article>
      <section className='p-4 pt-0'>
        <h4>댓글 목록</h4>
        {data?.post.answers.map((answer) => (
          <div key={answer.id} className='my-5 flex flex-col items-start'>
            <UserBox
              size='xs'
              type='time'
              time={answer?.createdAt + ''}
              avatar={answer.user.avatar!}
              username={answer.user.name}
            />
            <p className='p-1 text-gray-700'>{answer.answer}</p>
          </div>
        ))}
        <form className='pt-3' onSubmit={handleSubmit(onValid)}>
          <Textarea
            register={register('answer', { required: true, minLength: 5 })}
            placeholder='질문에 대한 답을 아신다면 댓글을 달아주세요!'
          />
          <SquareBtn
            name={answerLoading ? '등록 중...' : '댓글 작성하기'}
            canSubmit
          />
        </form>
      </section>
    </Layout>
  );
};

export default CommunityPostDetail;
