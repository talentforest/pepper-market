import ChatList from '@/components/chatList';
import Keyboard from '@/components/keyboard';
import Layout from '@/components/layout';
import type { NextPage } from 'next';

const ChatDetail: NextPage = () => {
  return (
    <Layout title='채팅방' canGoBack>
      <ChatList />
      <Keyboard />
    </Layout>
  );
};
export default ChatDetail;
