import Layout from '@/components/layout';
import SquareBtn from '@/components/button/squareBtn';
import Textarea from '@/components/input/textarea';
import type { NextPage } from 'next';

const Write: NextPage = () => {
  return (
    <Layout title='동네생활 글 작성하기' canGoBack>
      <form className='p-4'>
        <Textarea
          labelName='질문하기'
          labelId='question'
          placeholder='동네 이웃들에게 무엇이든 물어보세요.'
        />
        <SquareBtn name='글 올리기' canSubmit />
      </form>
    </Layout>
  );
};

export default Write;
