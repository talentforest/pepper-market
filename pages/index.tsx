import type { NextPage } from 'next';
import Layout from '@/components/layout';
import CircleBtn from '@/components/button/circleBtn';
import Product from '@/components/product';
import useUser from '@/libs/client/useUser';

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  console.log(user);
  return (
    <Layout title='홈' hasTabBar>
      <ul className='flex flex-col divide-y'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((product) => (
          <Product key={product} href={`products/${product}`} />
        ))}
      </ul>
      <CircleBtn href='/products/upload' from='home' fixed />
    </Layout>
  );
};

export default Home;
