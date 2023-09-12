import { FC } from 'react';
import { Outlet } from 'react-router';

import { Layout } from '@components';

const App: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
