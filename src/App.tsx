import { FC } from 'react';

import { Outlet } from 'react-router';
import { AuthContextProvider } from '@/context/AuthContext';
import { Header } from '@components';

const App: FC = () => {
  return (
    <AuthContextProvider>
      <Header />
      <Outlet />
    </AuthContextProvider>
  );
};

export default App;
