import Input from '@/components/input/input';
import Layout from '@/components/layout';
import SquareBtn from '@/components/button/square-btn';
import Textarea from '@/components/input/textarea';
import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import useMutation from '@/libs/client/useMutation';
import { useEffect } from 'react';
import { Product } from '@prisma/client';
import { useRouter } from 'next/router';

interface UploadProductProps {
  name: string;
  price: number;
  description: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadProductProps>();
  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>('/api/products');
  const onValid = (data: UploadProductProps) => {
    if (loading) return;
    uploadProduct(data);
  };

  useEffect(() => {
    if (data?.ok) {
      router.replace(`/products/${data.product.id}`);
    }
  }, [data, router]);

  return (
    <Layout title='업로드하기' canGoBack>
      <form className='space-y-3 p-4' onSubmit={handleSubmit(onValid)}>
        <label className='flex h-48 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500'>
          <svg
            className='h-12 w-12'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 48 48'
            aria-hidden='true'
          >
            <path
              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <input className='hidden' type='file' />
        </label>
        <Input
          register={register('name', { required: true })}
          type='text'
          labelName='이름'
          labelId='name'
        />
        <Input
          register={register('price', { required: true })}
          type='number'
          labelName='가격'
          labelId='price'
        />
        <Textarea
          register={register('description', { required: true })}
          placeholder='업로드할 물건의 내용을 적어주세요.'
          labelId='detail'
          labelName='상세설명'
        />
        <SquareBtn
          name={loading ? '업로드 중...' : '아이템 업로드'}
          canSubmit
        />
      </form>
    </Layout>
  );
};

export default Upload;
