import { FC, useCallback, useContext } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { loginValidationSchema } from '@constants/validation-schemas';
import { Button, FormField, GoogleSSO, Icon } from '@components';
import { Route } from '@enums';
import type { Jwt } from '@/types/Jwt';
import type { ExistingUser } from '@/types/User';
import { useApiService } from '@hooks';
import { UserContext } from '@contexts/UserContext';

const loginValues = { username: '', password: '' };

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const apiService = useApiService();
  const { logIn } = useContext(UserContext);

  const handleLogin = useCallback(
    async (
      values: typeof loginValues,
      helpers: FormikHelpers<typeof loginValues>,
    ) => {
      try {
        const res: Jwt = await apiService.post<Jwt, ExistingUser>(
          'auth/login',
          {
            password: values.password,
            username: values.username,
          },
        );

        logIn(res.accessToken);
        helpers.resetForm();
        navigate(Route.HOME);
      } catch (err) {
        if (err instanceof AxiosError && err.response.status === 401) {
          toast('Parola gresita', {
            type: 'warning',
          });
        } else {
          toast('Ceva a mers gresit', { type: 'error' });
          console.error(err);
        }
      }
    },
    [],
  );

  return (
    <div className="flex items-center flex-1 justify-center">
      <div className="flex flex-col items-center gap-5 p-12 rounded-2xl shadow-2xl">
        <Icon className="w-16" />
        <Formik
          initialValues={loginValues}
          onSubmit={handleLogin}
          validationSchema={loginValidationSchema}
        >
          <Form className="flex flex-col gap-3">
            <FormField
              name="username"
              type="text"
              placeholder="Username"
              autoComplete
            />
            <FormField
              name="password"
              type="password"
              placeholder="Parola"
              autoComplete
            />
            <Button type="submit">Logare</Button>
          </Form>
        </Formik>
        <Link to={Route.REGISTER}>Creeaza cont</Link>
        <GoogleSSO />
      </div>
    </div>
  );
};

export default LoginPage;
