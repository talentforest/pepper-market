import Chat from './chat';

const ChatList = () => {
  return (
    <ul className='h-[50vh] space-y-4 overflow-y-scroll pt-3 px-2 pb-6 mb-8'>
      <Chat content='안녕하세요~ 거래하고 싶어요!' mine />
      <Chat content='반갑습니다~ 장소는 어디가 괜찮으세요?' />
    </ul>
  );
};

export default ChatList;
