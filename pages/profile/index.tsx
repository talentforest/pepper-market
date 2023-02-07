import CircleBtn from '@/components/circleBtn';
import Layout from '@/components/layout';
import UserBox from '@/components/userBox';
import { NextPage } from 'next';

const Profile: NextPage = () => {
  const profileBtn = [
    { route: 'sold', name: '판매내역' },
    { route: 'bought', name: '구매내역' },
    { route: 'loved', name: '관심목록' },
  ];

  return (
    <Layout hasTabBar title='나의 페퍼'>
      <UserBox size='lg' type='btn' />
      <ul className='mt-10 flex justify-around'>
        {profileBtn.map((btn) => (
          <li key={btn.name} className='flex flex-col items-center'>
            <CircleBtn route={btn.route as 'sold' | 'bought' | 'loved'} />
            <span className='mt-2 text-sm font-medium text-gray-600'>
              {btn.name}
            </span>
          </li>
        ))}
      </ul>
      <ul className='mt-12'>
        <li>
          <UserBox size='sm' type='star' />
          <p className='mt-4 text-sm text-gray-600'>
            Normally, both your asses would be dead as fucking fried chicken,
            but you happen to pull this shit while I&apos;m in a transitional
            period so I don&apos;t wanna kill you, I wanna help you. But I
            can&apos;t give you this case, it don&apos;t belong to me. Besides,
            I&apos;ve already been through too much shit this morning over this
            case to hand it over to your dumb ass.
          </p>
        </li>
      </ul>
    </Layout>
  );
};
export default Profile;
