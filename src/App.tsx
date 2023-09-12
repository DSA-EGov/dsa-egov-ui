import { FC } from 'react';
import { Outlet } from 'react-router';

const App: FC = () => {
  return (
    <main>
      App
      <Outlet />
    </main>
  );
};

export default App;
