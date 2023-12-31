import { FC } from 'react';

import { Outlet } from 'react-router';
import { Header, Sidebar } from '@components';

const App: FC = () => {
  return (
    <main className="mx-auto max-w-[1920px] h-screen max-h-screen overflow-auto flex flex-col font-plus-jakarta-sans font-normal">
      <Header />
      <div className="flex divide-x divide-gray-600 flex-1 overflow-auto">
        <Sidebar />
        <div className="relative overflow-auto flex-1 flex flex-col">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default App;
