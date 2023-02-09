import Input from '@/components/input/input';
import Layout from '@/components/layout';
import SquareBtn from '@/components/button/squareBtn';
import type { NextPage } from 'next';

const EditProfile: NextPage = () => {
  return (
    <Layout title='프로필 수정' canGoBack>
      <form className='space-y-4 p-4'>
        <div className='flex items-center space-x-3'>
          <div className='h-14 w-14 rounded-full bg-slate-500' />
          <label
            htmlFor='picture'
            className='cursor-pointer rounded-md border border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
          >
            Change
            <input
              id='picture'
              type='file'
              className='hidden'
              accept='image/*'
            />
          </label>
        </div>
        <Input type='email' labelName='이메일 주소' labelId='email' />
        <Input type='number' labelName='핸드폰 번호' labelId='phone' />
        <SquareBtn canSubmit name='프로필 업데이트하기' />
      </form>
    </Layout>
  );
};

export default EditProfile;
