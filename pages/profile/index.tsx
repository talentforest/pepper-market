import CircleBtn from '@/components/button/circleBtn';
import Layout from '@/components/layout';
import UserBox from '@/components/userBox';
import useUser from '@/libs/client/useUser';
import { Review, User } from '@prisma/client';
import { NextPage } from 'next';
import useSWR from 'swr';

interface ReviewWithUser extends Review {
  createdBy: User;
}
interface ReviewsResponse {
  ok: boolean;
  reviews: ReviewWithUser[];
}

const Profile: NextPage = () => {
  const profileBtn = [
    { route: 'sold', name: '판매내역' },
    { route: 'bought', name: '구매내역' },
    { route: 'loved', name: '관심목록' },
  ];
  const { user, isLoading } = useUser();
  const { data } = useSWR<ReviewsResponse>('/api/reviews');

  return (
    <Layout hasTabBar title='나의 페퍼'>
      <section className='p-4'>
        <h1>프로필</h1>
        <UserBox
          size='lg'
          type='btn'
          avatar={user?.avatar}
          username={user?.name}
        />
        <ul className='mt-10 flex justify-around'>
          {profileBtn.map((btn) => (
            <li key={btn.name} className='flex flex-col items-center'>
              <CircleBtn
                href={`/profile/${btn.route}`}
                from={btn.route as 'sold' | 'bought' | 'loved'}
              />
              <span className='mt-2 text-sm font-medium text-gray-600'>
                {btn.name}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className='p-4'>
        <h1>리뷰 목록</h1>
        <ul className='mt-2'>
          {data?.reviews.map((review) => (
            <li key={review.id}>
              <UserBox
                size='sm'
                type='star'
                rate={review.rate || 0}
                avatar={review.createdBy.avatar || ''}
                username={review.createdBy.name || '익명'}
              />
              <p className='mt-4 text-sm text-gray-600'>{review.review}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};
export default Profile;
