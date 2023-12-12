import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '@enums';
import { useAuth } from '@hooks';

const Header: FC = () => {
  const auth = useAuth();

  return (
    <div className="flex gap-12 h-[60px] px-12 border-b border-gray-600">
      <Link to={AppRoute.HOME}>
        <img src="/egov.png" alt="eGov.AI" className="aspect-square h-full" />
      </Link>
      <div className="flex gap-6 lg:gap-9 xl:gap-12 items-center">
        <Link to={AppRoute.TERMS}>Terms & Conditions</Link>
        <span
          className="cursor-pointer text-link"
          onClick={() => navigator.clipboard.writeText(auth.token)}
        >
          Copy JWT
        </span>
      </div>
    </div>
  );
};

export default Header;
