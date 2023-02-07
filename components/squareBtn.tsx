interface ISquareBtn {
  name: string;
}

const SquareBtn = ({ name }: ISquareBtn) => {
  return (
    <button className='w-full rounded-md border border-transparent bg-orange-500 py-3 px-4 font-medium text-sm text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 '>
      {name}
    </button>
  );
};

export default SquareBtn;
