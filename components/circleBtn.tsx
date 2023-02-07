import { cls } from '@/libs/utils';

export interface ICircleBtnProps {
  route: 'home' | 'community' | 'live' | 'sold' | 'loved' | 'bought';
  fixed?: boolean;
}

const CircleBtn = ({ route, fixed }: ICircleBtnProps) => {
  const getSvgPath = () => {
    switch (route) {
      case 'home':
        return 'M12 6v6m0 0v6m0-6h6m-6 0H6';
      case 'community':
        return 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z';
      case 'live':
        return 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z';
      case 'sold':
        return 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z';
      case 'loved':
        return 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z';
      case 'bought':
        return 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z';
      default:
        break;
    }
  };

  return (
    <button
      className={cls(
        fixed ? 'fixed' : '',
        'bottom-24 right-5 cursor-pointer rounded-full border-transparent p-4 shadow-xl transition-colors text-white hover:bg-orange-500 bg-orange-400'
      )}
    >
      <svg
        className={fixed ? 'h-8 w-8' : 'h-5 w-5'}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d={getSvgPath()}
        />
      </svg>
    </button>
  );
};

<svg
  className='h-6 w-6'
  fill='none'
  stroke='currentColor'
  viewBox='0 0 24 24'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
  ></path>
</svg>;

export default CircleBtn;
