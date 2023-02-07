import Input from '@/components/input';
import Layout from '@/components/layout';
import SquareBtn from '@/components/squareBtn';
import Textarea from '@/components/textarea';
import type { NextPage } from 'next';

const Upload: NextPage = () => {
  return (
    <Layout title='업로드하기' canGoBack>
      <form className='space-y-3'>
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
        <Input type='text' labelName='이름' labelId='name' />
        <Input type='number' labelName='가격' labelId='price' />
        <Textarea
          placeholder='업로드할 물건의 내용을 적어주세요.'
          labelId='detail'
          labelName='상세설명'
        />
        <SquareBtn name='아이템 업로드' />
      </form>
    </Layout>
  );
};

export default Upload;
