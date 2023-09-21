import { FC, memo, useCallback, useContext } from 'react';
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from '@react-oauth/google';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import type { Jwt } from '@/types/Jwt';
import { Route } from '@enums';
import { UserContext } from '@contexts/UserContext';
import { useApiService } from '@hooks';

const GoogleSSO: FC = () => {
  const navigate = useNavigate();
  const apiService = useApiService();
  const { logIn } = useContext(UserContext);

  const handleGoogleLogin = useCallback(async (res: CredentialResponse) => {
    try {
      const apiRes: Jwt = await apiService.post<Jwt>('/auth/google', {
        token: res.credential,
      });

      logIn(apiRes.accessToken);
      navigate(Route.HOME);
    } catch (err) {
      toast('Ceva a mers gresit', { type: 'error' });
      console.error(err);
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_G_CLIENT_ID}>
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        auto_select={false}
        ux_mode="popup"
        theme="filled_blue"
        text="signup_with"
        useOneTap
        type="standard"
        size="large"
        locale="ro"
        shape="pill"
      />
    </GoogleOAuthProvider>
  );
};

export default memo(GoogleSSO);
