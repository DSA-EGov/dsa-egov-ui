import { FC } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { Route } from '@enums';
import { mapRouteParams } from '@/helpers/mapRouteParams';
import { useAuth } from '@hooks';

const Header: FC = () => {
  const auth = useAuth();

  return (
    <div className="flex gap-12 h-[60px] px-12 border-b border-gray-600">
      <Link to={Route.HOME}>
        <img src="/egov.png" alt="eGov.AI" className="aspect-square h-full" />
      </Link>
      <div className="flex gap-3 items-center">
        <Link to={Route.TERMS}>Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default Header;
