import useUser from '@/libs/client/useUser';
import { StreamMessage } from '@/pages/streams/[id]';
import { Fragment } from 'react';
import Chat from './chat';

interface IChatListProps {
  messages: StreamMessage[];
}

const ChatList = ({ messages }: IChatListProps) => {
  const { user } = useUser();

  return (
    <ul className='h-[50vh] space-y-4 overflow-y-scroll pt-3 px-2 pb-6 mb-8'>
      {messages.map((message) => (
        <Fragment key={message.id}>
          <Chat content={message.message} mine={message.user.id === user?.id} />
        </Fragment>
      ))}
    </ul>
  );
};

export default ChatList;
