import Product from '@/components/product';
import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Bought: NextPage = () => {
  return (
    <Layout title='구매내역' canGoBack>
      <ul className='flex flex-col divide-y'>
        {[1, 2, 3, 4, 5, 6, 7].map((product) => (
          <Product key={product} href={`/profile/bought/${product}`} />
        ))}
      </ul>
    </Layout>
  );
};

export default Bought;
