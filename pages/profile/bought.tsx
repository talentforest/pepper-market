import Product from '@/components/product';
import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Bought: NextPage = () => {
  return (
    <Layout title='구매내역' canGoBack>
      <ul className='flex flex-col space-y-5'>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <Product key={item} />
        ))}
      </ul>
    </Layout>
  );
};

export default Bought;
