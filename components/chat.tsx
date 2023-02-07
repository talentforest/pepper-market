import { cls } from '@/libs/utils';

interface IChatProps {
  mine?: boolean;
  content: string;
}

const Chat = ({ mine, content }: IChatProps) => {
  return (
    <li
      className={cls(
        'flex items-start space-x-2',
        mine ? 'flex-row-reverse space-x-reverse text-end' : ''
      )}
    >
      <header className='h-8 w-8 rounded-full bg-slate-400' />
      <p className='block min-w-[60px] max-w-[75%] rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700'>
        {content}
      </p>
    </li>
  );
};

export default Chat;
