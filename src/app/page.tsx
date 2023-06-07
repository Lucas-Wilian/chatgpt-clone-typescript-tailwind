'use client';

import { ChatArea } from '@/components/ChatArea';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Chat } from '@/types/Chat';
import { useState } from 'react';

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>({
    id: '123',
    title: 'teste de mesagem',
    messages: [
      { id: '99', author: 'me', body: 'Opa, tudo bem?' },
      {
        id: '88',
        author: 'ai',
        body: 'Tudo sim em que posso ajudar?',
      },
    ],
  });

  const openSidebar = () => setSidebarOpened(true);

  const closeSidebar = () => setSidebarOpened(false);

  const handlerClearConversations = () => {};

  const handleNewChat = () => {};

  const handleSendMessage = () => {};
  const [AiLoading, setAiLoading] = useState(false);

  return (
    <main className='flex min-h-screen bg-gpt-gray '>
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handlerClearConversations}
        onNewChat={handleNewChat}
      >
        <div>...</div>
      </Sidebar>

      <section className='flex flex-col w-full'>
        <Header
          openSidebarClick={openSidebar}
          title={`Bla bla bla`}
          newChatClick={handleNewChat}
        />
        <ChatArea chat={chatActive} />
        <Footer
          onSendMessage={handleSendMessage}
          disabled={AiLoading}
        />
      </section>
    </main>
  );
};

export default Page;
