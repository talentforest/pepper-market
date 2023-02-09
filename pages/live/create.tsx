import Input from '@/components/input/input';
import Layout from '@/components/layout';
import SquareBtn from '@/components/button/squareBtn';
import Textarea from '@/components/input/textarea';
import type { NextPage } from 'next';

const Create: NextPage = () => {
  return (
    <Layout title='라이브 생성' canGoBack>
      <form className='space-y-5 p-4'>
        <Input type='text' labelName='이름' labelId='name' />
        <Input type='number' labelName='가격' labelId='price' />
        <Textarea
          placeholder='상세설명을 적어주세요.'
          labelId='detail'
          labelName='상세설명'
        />
        <SquareBtn name='리이브 생성하기' canSubmit />
      </form>
    </Layout>
  );
};

export default Create;
