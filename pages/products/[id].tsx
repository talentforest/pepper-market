import Link from 'next/link';
import ProductDesc from '@/components/product-desc';
import Layout from '@/components/layout';
import UserBox from '@/components/user-box';
import useSWR, { useSWRConfig } from 'swr';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Product, User } from '@prisma/client';
import SquareBtn from '@/components/button/square-btn';
import IconBox from '@/components/icon-box';
import IconBtn from '@/components/button/square-icon-btn';
import useMutation from '@/libs/client/useMutation';

interface ProductWithUser extends Product {
  user: User;
  isLiked: boolean;
}
interface ProductDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}

const ProductDetail: NextPage = () => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR<ProductDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  const [toggleFav] = useMutation<ProductDetailResponse>(
    `/api/products/${router.query.id}/fav`
  );
  const onFavClick = () => {
    toggleFav({});
    if (!data) return;
    boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
  };

  return (
    <Layout hasTabBar canGoBack title='물건 상세보기'>
      <section className='p-4'>
        <div className='h-96 bg-slate-300 mb-3' />
        <UserBox
          size='md'
          type='link'
          avatar={data?.product?.user?.avatar!}
          username={data?.product?.user?.name!}
        />
        <ProductDesc
          productName={data?.product?.name!}
          description={data?.product?.description!}
          price={data?.product?.price!}
        />
        <div className='flex space-x-2'>
          <SquareBtn name='판매자와 채팅하기' canSubmit />
          <IconBtn
            iconName={data?.isLiked ? 'solid-heart' : 'outline-heart'}
            isLiked={data?.isLiked!}
            onFavClick={onFavClick}
          />
        </div>
      </section>
      <section className='p-4'>
        <h2 className='text-2xl font-bold text-gray-900'>비슷한 상품</h2>
        <ul className=' mt-6 grid grid-cols-2 gap-4'>
          {data?.relatedProducts.length ? (
            data?.relatedProducts.map((product) => (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <div className='mb-2 h-56 w-full bg-slate-300' />
                  <h3 className='text-sm -mb-1 text-gray-700'>
                    {product.name}
                  </h3>
                  <span className='text-xs font-medium text-gray-900'>
                    {product.price.toLocaleString('ko')}
                  </span>
                </Link>
              </li>
            ))
          ) : (
            <div className='col-span-2 h-40 border text-gray-800 rounded-lg bg-slate-300 flex justify-center items-center'>
              비슷한 상품이 없습니다
            </div>
          )}
        </ul>
      </section>
    </Layout>
  );
};
export default ProductDetail;
