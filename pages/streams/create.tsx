import Input from '@/components/input/input';
import Layout from '@/components/layout';
import SquareBtn from '@/components/button/square-btn';
import Textarea from '@/components/input/textarea';
import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import useMutation from '@/libs/client/useMutation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Stream } from '@prisma/client';

interface CreateForm {
  name: string;
  price: string;
  description: string;
}
interface StreamResponse {
  ok: boolean;
  stream: Stream;
}

const Create: NextPage = () => {
  const [createStream, { loading, data }] =
    useMutation<StreamResponse>(`/api/streams`);
  const { register, handleSubmit } = useForm<CreateForm>();
  const router = useRouter();

  const onValid = (form: CreateForm) => {
    if (loading) return;
    createStream(form);
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/streams/${data.stream?.id}`);
    }
  }, [data]);

  return (
    <Layout title='라이브 생성' canGoBack>
      <form onSubmit={handleSubmit(onValid)} className='space-y-5 p-4'>
        <Input
          register={register('name', { required: true })}
          type='text'
          labelName='제목'
          labelId='title'
        />
        <Input
          register={register('price', { required: true })}
          type='number'
          labelName='가격'
          labelId='price'
        />
        <Textarea
          register={register('description', { required: true })}
          placeholder='상세설명을 적어주세요.'
          labelId='description'
          labelName='상세설명'
        />
        <SquareBtn name={loading ? '생성중' : '리이브 생성하기'} canSubmit />
      </form>
    </Layout>
  );
};

export default Create;
