import Item from '@/components/item';
import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Sold: NextPage = () => {
  return (
    <Layout title='판매내역' canGoBack>
      <ul className='flex flex-col space-y-5'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Item key={item} />
        ))}
      </ul>
    </Layout>
  );
};

export default Sold;
