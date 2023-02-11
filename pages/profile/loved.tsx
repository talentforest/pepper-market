import Product from '@/components/product';
import Layout from '@/components/layout';
import type { NextPage } from 'next';
import useSWR from 'swr';
import ProductBox from '@/components/product';
import { Fav } from '@prisma/client';
import ProductList from '@/components/product-list';

interface IFavsResponse {
  ok: boolean;
  favs: Fav;
}

const Loved: NextPage = () => {
  const { data } = useSWR<IFavsResponse>('/api/users/me/favs');
  console.log(data?.favs);

  return (
    <Layout title='관심목록' canGoBack>
      <ul className='flex flex-col divide-y'>
        <ProductList kind='favs' />
      </ul>
    </Layout>
  );
};

export default Loved;
