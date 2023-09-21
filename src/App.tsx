import { FC } from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import { Layout } from '@components';
import { UserContextProvider } from '@/contexts/UserContext';
import { toastDefaultProps } from '@constants/toastDefaultProps';

const App: FC = () => {
  return (
    <UserContextProvider>
      <Layout>
        <ToastContainer {...toastDefaultProps} />
        <Outlet />
      </Layout>
    </UserContextProvider>
  );
};

export default App;
