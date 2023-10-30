import { FC } from 'react';

import { Outlet } from 'react-router';
import { AuthContextProvider } from '@/context/AuthContext';
import { Header } from '@components';

const App: FC = () => {
  return (
    <AuthContextProvider>
      <main className="overflow-auto mx-auto max-w-[1920px]">
        <Header />
        <Outlet />
      </main>
    </AuthContextProvider>
  );
};

export default App;
