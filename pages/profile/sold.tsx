import Product from '@/components/product';
import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Sold: NextPage = () => {
  return (
    <Layout title='판매내역' canGoBack>
      <ul className='flex flex-col divide-y'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
          <Product key={product} href={`/profile/sold/${product}`} />
        ))}
      </ul>
    </Layout>
  );
};

export default Sold;
