import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  labelName: '이메일 주소' | '핸드폰 번호' | '이름' | '가격';
  labelId: 'email' | 'phone' | 'name' | 'price';
  type: 'text' | 'email' | 'number';
  required?: boolean;
  register: UseFormRegisterReturn;
}

const Input = ({
  labelId,
  type,
  labelName,
  required,
  register,
}: InputProps) => {
  return (
    <div className='space-y-1'>
      <label htmlFor={labelId} className='text-sm font-medium text-gray-600'>
        {labelName}
      </label>
      {(type === 'email' || type === 'text') && (
        <div className='relative flex items-center rounded-md shadow-sm'>
          <input
            id={labelId}
            type={type}
            required={required}
            className={
              'w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500'
            }
            {...register}
          />
        </div>
      )}
      {labelName === '핸드폰 번호' && (
        <div className='relative flex rounded-md shadow-sm'>
          <input
            id='핸드폰 번호'
            type='number'
            required={required}
            {...register}
            className='peer w-full pl-14 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-400'
          />
          <span className='peer-focus:border-orange-500 peer-focus:border-r-gray-300 absolute inset-y-0 flex select-none items-center justify-center rounded-l-md border border-r border-gray-300 bg-gray-50 px-3 text-sm text-gray-500'>
            +82
          </span>
        </div>
      )}
      {labelName === '가격' && (
        <div className='relative flex items-center rounded-md shadow-sm'>
          <div className='pointer-events-none absolute left-0 flex items-center justify-center pl-3'>
            <span className='text-md text-gray-500'>₩</span>
          </div>
          <input
            id={labelId}
            type={type}
            required={required}
            className={
              'px-3 py-2 pl-8 pr-14 w-full appearance-none rounded-md border border-gray-300  placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500'
            }
            {...register}
          />
          <div className='pointer-events-none absolute right-0 flex items-center pr-3'>
            <span className='text-sm text-gray-500'>KRW</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
