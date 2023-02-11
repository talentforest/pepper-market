import { cls } from '@/libs/client/utils';

interface ISquareBtn {
  canSubmit: boolean;
  name: string;
}

const SquareBtn = ({ name, canSubmit }: ISquareBtn) => {
  return (
    <button
      className={cls(
        canSubmit
          ? 'text-white bg-orange-500 border border-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
          : 'text-gray-400 bg-gray-50 border-2 border-gray-400',
        'w-full font-bold rounded-lg py-3 px-4 text-sm shadow-sm focus:outline-none'
      )}
    >
      {name}
    </button>
  );
};

export default SquareBtn;
