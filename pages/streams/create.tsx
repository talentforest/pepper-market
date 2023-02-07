import Input from '@/components/input';
import Layout from '@/components/layout';
import SquareBtn from '@/components/squareBtn';
import Textarea from '@/components/textarea';
import type { NextPage } from 'next';

const Create: NextPage = () => {
  return (
    <Layout title='라이브 생성' canGoBack>
      <form className='space-y-5'>
        <Input type='text' labelName='이름' labelId='name' />
        <Input type='number' labelName='가격' labelId='price' />
        <Textarea
          placeholder='상세설명을 적어주세요.'
          labelId='detail'
          labelName='상세설명'
        />
        <SquareBtn name='리이브 생성하기' />
      </form>
    </Layout>
  );
};

export default Create;