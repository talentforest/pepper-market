import { cls } from '@/libs/client/utils';
import React, { KeyboardEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IRegisterProps {
  register: UseFormRegisterReturn;
  pressBackspace: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const TokenInput = ({ register, pressBackspace }: IRegisterProps) => {
  return (
    <input
      type='text'
      maxLength={1}
      onKeyDown={pressBackspace}
      required
      className={cls(
        'transition focus:scale-105 shadow-lg text-orange-600 focus:bg-orange-500 focus:text-white p-0 h-16 font-bold text-center text-3xl w-full appearance-none rounded-md border-2 border-orange-500 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500'
      )}
      {...register}
    />
  );
};

export default TokenInput;
