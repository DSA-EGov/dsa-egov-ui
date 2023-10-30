import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { Route } from '@enums';
import { mapRouteParams } from '@/helpers/mapRouteParams';
import { AuthContext } from '@/context/AuthContext';

const Header: FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="flex gap-12">
      Header
      {/* temp */}
      <div className="flex gap-3 text-blue-500">
        <Link to={Route.HOME}>Home</Link>
        <Link to={Route.CHAT}>Chat</Link>
        <Link to={mapRouteParams(Route.SELECTED_CHAT, { id: uuid() })}>
          Opened chat
        </Link>
        {/*<Link to={Route.LOGIN}>Login</Link>*/}
        {/*<Link to={Route.REGISTER}>Register</Link>*/}
        <Link to={Route.TERMS}>Terms & Conditions</Link>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
