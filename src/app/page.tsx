'use client';

import { Sidebar } from '@/components/Sidebar';
import { useState } from 'react';

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const closeSidebar = () => {
    setSidebarOpened(false);
  };

  const handlerClearConversations = () => {};

  const handleNewChat = () => {};

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
        <button onClick={() => setSidebarOpened(true)}>Abir sidebar</button>
      </section>
    </main>
  );
};

export default Page;
