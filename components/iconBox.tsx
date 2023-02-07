interface IIconBoxProps {
  iconName: 'heart' | 'comment' | 'curiosity';
  content: string | number;
}

const IconBox = ({ iconName, content }: IIconBoxProps) => {
  const getSvgPath = () => {
    switch (iconName) {
      case 'curiosity':
        return 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
      case 'comment':
        return 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z';
      case 'heart':
        return 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z';
      default:
        break;
    }
  };

  return (
    <div className='flex items-center space-x-1.5 text-sm  text-gray-600'>
      <svg
        className='h-4 w-4'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d={getSvgPath()}
        ></path>
      </svg>
      <span>{content}</span>
    </div>
  );
};

export default IconBox;
