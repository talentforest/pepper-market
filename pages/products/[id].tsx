import ProductDesc from '@/components/productDesc';
import Layout from '@/components/layout';
import UserBox from '@/components/userBox';
import type { NextPage } from 'next';

const ProductDetail: NextPage = () => {
  return (
    <Layout hasTabBar canGoBack title='물건 상세보기'>
      <section className='p-4'>
        <div className='h-96 bg-slate-300 mb-3' />
        <UserBox size='md' type='link' />
        <ProductDesc
          itemName='갤럭시 S50'
          description='좋은 가격에 판매하고 있습니다. 라이브로 기기의 상태를 보여드리고 있으니 많이많이 들러주세요 ㅎㅎ 자 이제 조금 있으면 시작합니다. 시작 가격은 50만원부터 시작하겠습니다! 상태가 정말 좋거든요 쓴 지 정말 얼마 안됐어요.'
          price={500400}
        />
      </section>
      <section className='p-4'>
        <h2 className='text-2xl font-bold text-gray-900'>비슷한 상품</h2>
        <ul className=' mt-6 grid grid-cols-2 gap-4'>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <li key={item}>
              <div className='mb-4 h-56 w-full bg-slate-300' />
              <h3 className='-mb-1 text-gray-700'>갤럭시 S10</h3>
              <span className='text-sm font-medium text-gray-900'>₩ 6,000</span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};
export default ProductDetail;
