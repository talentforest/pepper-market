import Input from '@/components/input/input';
import Layout from '@/components/layout';
import SquareBtn from '@/components/button/square-btn';
import useMutation from '@/libs/client/useMutation';
import type { NextPage } from 'next';
import useUser from '@/libs/client/useUser';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

interface EditProfileForm {
  email?: string;
  phone?: string;
  name?: string;
  formErrors?: string;
}
interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const [editProfile, { data, loading }] =
    useMutation<EditProfileResponse>(`/api/users/me`);
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<EditProfileForm>();

  useEffect(() => {
    if (user?.name) setValue('name', user.name);
    if (user?.email) setValue('email', user.email);
    if (user?.phone) setValue('phone', user.phone);
  }, [user, setValue]);

  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError('formErrors', { message: data.error });
    }
  }, [data, setError]);

  const onValid = ({ email, phone, name }: EditProfileForm) => {
    if (loading) return;
    if (email === '' && phone === '' && name === '') {
      return setError('formErrors', {
        message: 'Email OR Phone number are required. You need to choose one.',
      });
    }
    editProfile({
      email,
      phone,
      name,
    });
    window.alert('프로필이 업데이트 되었습니다.');
  };

  return (
    <Layout title='프로필 수정' canGoBack>
      <form onSubmit={handleSubmit(onValid)} className='space-y-4 p-4'>
        <div className='flex items-center space-x-3'>
          <div className='h-14 w-14 rounded-full bg-slate-500' />
          <label
            htmlFor='picture'
            className='cursor-pointer rounded-md border border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
              />
            </svg>
            <input
              id='picture'
              type='file'
              className='hidden'
              accept='image/*'
            />
          </label>
        </div>
        <Input
          register={register('name')}
          type='text'
          labelName='이름'
          labelId='name'
        />
        <Input
          register={register('email')}
          type='email'
          labelName='이메일 주소'
          labelId='email'
        />
        <Input
          register={register('phone')}
          type='number'
          labelName='핸드폰 번호'
          labelId='phone'
        />
        {errors.formErrors && (
          <span className='my-2 text-xs text-red-500 font-bold block'>
            {errors.formErrors.message}
          </span>
        )}
        <SquareBtn
          canSubmit
          name={loading ? '업데이트 중...' : '프로필 업데이트하기'}
        />
      </form>
    </Layout>
  );
};

export default EditProfile;
