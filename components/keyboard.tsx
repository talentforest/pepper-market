const Keyboard = () => {
  return (
    <div className=' max-w-md mx-auto fixed inset-x-0 bottom-0 bg-white py-2 px-3'>
      <input
        type='text'
        className='w-full rounded-full border-gray-300 pr-12 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500'
      />
      <div className='absolute inset-y-0 right-2.5 flex items-center pr-1.5 '>
        <button className='shadow-md w-8 h-8 flex justify-center items-center rounded-full bg-orange-500 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
