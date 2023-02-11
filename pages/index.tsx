import type { NextPage } from 'next';
import Layout from '@/components/layout';
import CircleBtn from '@/components/button/circleBtn';
import ProductBox from '@/components/product';
import useUser from '@/libs/client/useUser';
import useSWR from 'swr';
import { Product } from '@prisma/client';

export interface ProductWithCount extends Product {
  _count: {
    favs: number;
  };
}
export interface ProductsResponse {
  ok: boolean;
  products: ProductWithCount[];
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
            isLikedCount={product._count.favs}
          />
        ))}
      </ul>
      <CircleBtn href='/products/upload' from='home' fixed />
    </Layout>
  );
};

export default Home;
