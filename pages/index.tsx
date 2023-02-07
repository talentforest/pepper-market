import type { NextPage } from 'next';
import Layout from '@/components/layout';
import CircleBtn from '@/components/circleBtn';
import Item from '@/components/item';

const Home: NextPage = () => {
  return (
    <Layout title='홈' hasTabBar>
      <ul className='flex flex-col space-y-5'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <Item key={item} />
        ))}
      </ul>
      <CircleBtn route='home' fixed />
    </Layout>
  );
};

export default Home;
