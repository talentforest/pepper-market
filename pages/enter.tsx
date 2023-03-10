import IconBtn from '@/components/button/square-icon-btn';
import Input from '@/components/input/input';
import SquareBtn from '@/components/button/square-btn';
import TabBtn from '@/components/button/tab-btn';
import useMutation from '@/libs/client/useMutation';
import TokenInput from '@/components/input/token-input';
import { KeyboardEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export type tabType = 'email' | 'phone';

interface MutationResult {
  ok: boolean;
}
interface IEnterForm {
  email?: string;
  phone?: number;
}
interface ITokenForm {
  [key: string]: string;
}

export default function Enter() {
  const [tab, setTab] = useState<tabType>('email');
  const [activeNum, setActiveNum] = useState<number>(1);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm<IEnterForm>();
  const {
    register: tokenRegister,
    handleSubmit: tokenHandleSubmit,
    setFocus: setTokenFocus,
    getValues,
    setValue,
  } = useForm<ITokenForm>();
  const [
    enter,
    { loading, data }, //
  ] = useMutation<MutationResult>('/api/users/enter');
  const [
    confirmToken,
    { loading: tokenLoading, data: tokenData, error: tokenError },
  ] = useMutation<MutationResult>('/api/users/confirm');

  const router = useRouter();

  useEffect(() => {
    if (tab === 'email') {
      setFocus('email');
    }
    if (tokenData?.ok) {
      router.push('/');
    }
  }, [setFocus, tokenData, router]);

  const onValid = (validForm: IEnterForm) => {
    if (loading) return;
    enter(validForm);
  };

  const onTokenValid = (validForm: ITokenForm) => {
    if (tokenLoading) return;
    const result = { token: Object.values(validForm).join('') };
    confirmToken(result);
  };

  const onTabClick = (type: tabType) => {
    reset();
    setTab(type);
  };

  const pressBackspace = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      setTokenFocus(`token${activeNum - 1}`);
      setActiveNum(activeNum - 1);
      setValue(`token${activeNum - 1}`, '');
    }
  };

  return (
    <main className='max-w-md mx-auto bg-white p-4 flex flex-col justify-center min-h-screen'>
      <h1 className='text-center text-2xl font-bold mb-10'>
        ?????? ?????? ????????????
      </h1>
      <section className='h-96 flex flex-col items-center'>
        {!data?.ok ? (
          <>
            <h5 className='text-sm font-medium text-gray-500'>
              ?????? ????????? ?????? ??? ????????? ????????????
            </h5>
            <div className='mt-8 grid w-full grid-cols-2 border-b'>
              <TabBtn name='Email' tab={tab} onTabClick={onTabClick} />
              <TabBtn name='Phone' tab={tab} onTabClick={onTabClick} />
            </div>
            <form
              onSubmit={handleSubmit(onValid)}
              className='mt-8 flex w-full flex-col space-y-1.5'
            >
              {tab === 'email' && (
                <Input
                  register={register('email', {
                    required: '????????? ????????? ??????????????????.',
                  })}
                  type='email'
                  labelName='????????? ??????'
                  labelId='email'
                  placeholder='peppermarket@market.com'
                />
              )}
              {tab === 'phone' && (
                <Input
                  register={register('phone', {
                    required: '????????? ????????? ??????????????????.',
                    minLength: {
                      value: 11,
                      message: '????????? ?????? ??????????????? ????????????.',
                    },
                    maxLength: {
                      value: 11,
                      message: '????????? ?????? ??????????????? ????????????.',
                    },
                  })}
                  type='number'
                  labelName='????????? ??????'
                  labelId='phone'
                />
              )}
              <span className='text-[10px] font-extrabold h-4 text-blue-600'>
                {tab === 'email' && errors?.email?.message}
                {tab === 'phone' && errors?.phone?.message}
              </span>
              {tab === 'email' && (
                <SquareBtn
                  canSubmit
                  name={loading ? 'Loading' : '????????? ?????? ?????????'}
                />
              )}
              {tab === 'phone' && (
                <SquareBtn
                  canSubmit
                  name={loading ? 'Loading' : '1?????? ???????????? ??????'}
                />
              )}
            </form>
            <div className='relative mt-12 w-full'>
              <div className='absolute w-full border-t border-gray-500' />
              <div className='relative -top-3 text-center'>
                <span className='bg-white px-2 text-sm text-gray-500'>
                  ?????? ???????????? ?????? ??????
                </span>
              </div>
            </div>
            <div className='flex justify-center space-x-5'>
              <IconBtn iconName='twitter' />
              <IconBtn iconName='github' />
            </div>
          </>
        ) : (
          <form
            onSubmit={tokenHandleSubmit(onTokenValid)}
            className='mt-8 flex w-full flex-col space-y-1.5'
          >
            <h5 className='text-sm font-medium text-gray-500'>
              ???????????? ?????? ????????? ??????????????????.
            </h5>
            <div className='relative pt-3 pb-10 grid grid-cols-6 gap-2 items-center justify-center rounded-md shadow-sm'>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <TokenInput
                  key={num}
                  pressBackspace={pressBackspace}
                  register={tokenRegister(`token${num}`, {
                    required: '?????? ????????? ??????????????????.',
                    onChange: (e) => {
                      if (0 > num || num > 6) return;
                      if (e.target.maxLength === e.nativeEvent.data?.length) {
                        setTokenFocus(`token${num + 1}`);
                        setActiveNum(num + 1);
                      }
                    },
                  })}
                />
              ))}
            </div>
            <SquareBtn
              canSubmit={!!getValues('token6')}
              name={tokenLoading ? '?????? ???????????? ???' : '?????? ?????? ??????'}
            />
          </form>
        )}
      </section>
    </main>
  );
}
