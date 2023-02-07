import IconBtn from '@/components/squareIconBtn';
import Input from '@/components/input';
import SquareBtn from '@/components/squareBtn';
import TabBtn from '@/components/tabBtn';
import { useState } from 'react';

export type tabType = 'email' | 'phone';

export default function Enter() {
  const [tab, setTab] = useState<tabType>('email');

  return (
    <main className='max-w-md mx-auto bg-white p-4 flex flex-col justify-center min-h-screen'>
      <h1 className='text-center text-2xl font-bold mb-10'>
        페퍼 마켓 입장하기
      </h1>
      <section className='flex flex-col items-center'>
        <h5 className='text-sm font-medium text-gray-500'>
          아래 두가지 방법 중 하나로 입장하기.
        </h5>
        <div className='mt-8 grid w-full grid-cols-2 border-b'>
          <TabBtn name='Email' tab={tab} setTab={setTab} />
          <TabBtn name='Phone' tab={tab} setTab={setTab} />
        </div>
        <form className='mt-8 flex w-full flex-col space-y-1.5'>
          {tab === 'email' && (
            <Input type='email' labelName='이메일 주소' labelId='email' />
          )}
          {tab === 'phone' && (
            <Input type='number' labelName='핸드폰 번호' labelId='phone' />
          )}
          <SquareBtn
            name={
              tab === 'email'
                ? '로그인 링크 보내기'
                : tab === 'phone'
                ? '1회용 비밀번호 받기'
                : ''
            }
          />
        </form>
        <div className='relative mt-12 w-full'>
          <div className='absolute w-full border-t border-gray-500' />
          <div className='relative -top-3 text-center'>
            <span className='bg-white px-2 text-sm text-gray-500'>
              다른 방법으로 링크 받기
            </span>
          </div>
        </div>
        <div className='flex justify-center space-x-5'>
          <IconBtn iconName='twitter' />
          <IconBtn iconName='github' />
        </div>
      </section>
    </main>
  );
}