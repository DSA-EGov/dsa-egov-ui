import { FC, memo } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="absolute top-1/2 left-1/2 transform-gpu -translate-x-full -translate-y-full flex flex-col justify-center items-center">
      <h1 className="text-3xl text-error">404</h1>
      <h2 className="text-lg">
        <span className="text-link">{location.pathname}</span> Not Found
      </h2>
      <button className="text-lg text-link mt-8" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default memo(NotFound);
