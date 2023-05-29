'use client';

import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { useState } from 'react';

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);

  const closeSidebar = () => setSidebarOpened(false);

  const handlerClearConversations = () => {};

  const handleNewChat = () => {};

  console.log(sidebarOpened);

  return (
    <main className='flex min-h-screen bg-gpt-gray '>
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handlerClearConversations}
        onNewChat={handleNewChat}
      >
        <div className=''>...</div>
      </Sidebar>

      <section className='flex flex-col w-full'>
        <Header
          openSidebarClick={openSidebar}
          title={`Bla bla bla`}
          newChatClick={handleNewChat}
        />
      </section>
    </main>
  );
};

export default Page;
