interface InputProps {
  labelName: '이메일 주소' | '핸드폰 번호' | '이름' | '가격';
  labelId: 'email' | 'phone' | 'name' | 'price';
  type: 'text' | 'email' | 'number';
  [key: string]: any;
}

const Input = ({ labelId, type, labelName, ...rest }: InputProps) => {
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
            className={
              'w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500'
            }
            required
            {...rest}
          />
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
            className={
              'px-3 py-2 pl-8 pr-14 w-full appearance-none rounded-md border border-gray-300  placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500'
            }
            required
            {...rest}
          />
          <div className='pointer-events-none absolute right-0 flex items-center pr-3'>
            <span className='text-sm text-gray-500'>KRW</span>
          </div>
        </div>
      )}
      {labelName === '핸드폰 번호' && (
        <div className='flex rounded-md shadow-sm'>
          <span className='flex select-none items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500'>
            +82
          </span>
          <input
            id='핸드폰 번호'
            type='number'
            required
            className='w-full appearance-none rounded-r-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-300 focus:ring-orange-400'
          />
        </div>
      )}
    </div>
  );
};

export default Input;
