import type { NextPage } from 'next';
import Layout from '@/components/layout';
import CircleBtn from '@/components/button/circleBtn';
import ProductBox from '@/components/product';
import useUser from '@/libs/client/useUser';
import useSWR from 'swr';
import { Product } from '@prisma/client';

interface ProductsResponse {
  ok: boolean;
  products: Product[];
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductsResponse>('/api/products');

  return (
    <Layout title='홈' hasTabBar>
      <ul className='flex flex-col divide-y'>
        {data?.products?.map((product) => (
          <ProductBox
            key={product.id}
            href={`products/${product.id}`}
            title={product.name}
            subtitle={product.description}
            price={product.price}
          />
        ))}
      </ul>
      <CircleBtn href='/products/upload' from='home' fixed />
    </Layout>
  );
};

export default Home;
