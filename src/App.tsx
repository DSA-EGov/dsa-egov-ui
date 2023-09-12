import { FC } from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'react-toastify/dist/ReactToastify.min.css';

import { Layout } from '@components';
import { UserContextProvider } from '@/contexts/UserContext';
import { toastDefaultProps } from '@constants/toastDefaultProps';

const App: FC = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_G_CLIENT_ID}>
      <UserContextProvider>
        <Layout>
          <ToastContainer {...toastDefaultProps} />
          <Outlet />
        </Layout>
      </UserContextProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
