import Layout from '@/components/layout';
import SquareBtn from '@/components/button/square-btn';
import Textarea from '@/components/input/textarea';
import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Post } from '@prisma/client';
import { useRouter } from 'next/router';
import useMutation from '@/libs/client/useMutation';
import useCoords from '@/libs/client/useCoords';

interface WriteForm {
  question: string;
}
interface WriteResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const { latitude, longitude } = useCoords();
  const router = useRouter();
  const { register, handleSubmit } = useForm<WriteForm>();
  const [post, { loading, data }] = useMutation<WriteResponse>('/api/posts');
  const onValid = (data: WriteForm) => {
    if (loading) return;
    post({ ...data, latitude, longitude });
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);

  return (
    <Layout title='동네생활 글 작성하기' canGoBack>
      <form onSubmit={handleSubmit(onValid)} className='p-4'>
        <Textarea
          register={register('question', { required: true, minLength: 5 })}
          labelName='질문하기'
          labelId='question'
          placeholder='동네 이웃들에게 무엇이든 물어보세요.'
        />
        <SquareBtn name={loading ? '글 올리는 중...' : '글 올리기'} canSubmit />
      </form>
    </Layout>
  );
};

export default Write;
