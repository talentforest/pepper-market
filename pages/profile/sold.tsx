import Layout from '@/components/layout';
import type { NextPage } from 'next';
import ProductBox from '@/components/product';
import useSWR from 'swr';
import { ProductWithCount } from '..';
import ProductList from '@/components/product-list';

const Sold: NextPage = () => {
  return (
    <Layout title='판매내역' canGoBack>
      <ul className='flex flex-col divide-y'>
        <ProductList kind='sales' />
      </ul>
    </Layout>
  );
};

export default Sold;
