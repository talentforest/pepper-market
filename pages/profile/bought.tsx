import Product from '@/components/product';
import Layout from '@/components/layout';
import type { NextPage } from 'next';
import ProductList from '@/components/product-list';

const Bought: NextPage = () => {
  return (
    <Layout title='구매내역' canGoBack>
      <ul className='flex flex-col divide-y'>
        <ProductList kind='purchases' />
      </ul>
    </Layout>
  );
};

export default Bought;
