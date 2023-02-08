import Product from '@/components/product';
import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Loved: NextPage = () => {
  return (
    <Layout title='관심목록' canGoBack>
      <ul className='flex flex-col space-y-5'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Product key={item} />
        ))}
      </ul>
    </Layout>
  );
};

export default Loved;
