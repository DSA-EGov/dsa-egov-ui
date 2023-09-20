import { FC, useCallback, useContext } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { registerValidationSchema } from '@constants/validation-schemas';
import { Button, FormField, GoogleSSO, Icon } from '@components';
import { Route } from '@enums';
import { useApiService } from '@hooks';
import type { CreateUser } from '@/types/User';
import type { Jwt } from '@/types/Jwt';
import { UserContext } from '@contexts/UserContext';

const registerValues = {
  username: '',
  password: '',
  email: '',
  passwordRepeat: '',
};

const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const apiService = useApiService();

  const { logIn } = useContext(UserContext);

  const handleRegister = useCallback(
    async (
      values: typeof registerValues,
      helpers: FormikHelpers<typeof registerValues>,
    ) => {
      if (values.password !== values.passwordRepeat) {
        toast('Parolele nu se potrivesc', { type: 'error' });
        return;
      }

      try {
        const res: Jwt = await apiService.post<Jwt, CreateUser>(
          'auth/register',
          {
            email: values.email,
            password: values.password,
            username: values.username,
          },
        );

        logIn(res.accessToken);
        helpers.resetForm();
        navigate(Route.HOME);
      } catch (err) {
        if (err instanceof AxiosError && err.response.status === 409) {
          toast(`Utilizatorul "${values.username}" deja exista`, {
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
        <p>Creeaza cont</p>
        <Formik
          initialValues={registerValues}
          onSubmit={handleRegister}
          validationSchema={registerValidationSchema}
        >
          <Form className="flex flex-col gap-3">
            <FormField
              name="username"
              type="text"
              placeholder="Username"
              autoComplete
            />
            <FormField
              name="email"
              type="text"
              placeholder="Email"
              autoComplete
            />
            <FormField
              name="password"
              type="password"
              placeholder="Parola"
              autoComplete
            />
            <FormField
              name="passwordRepeat"
              type="password"
              placeholder="Repeta parola"
              autoComplete
            />
            <Button type="submit">Registrare</Button>
          </Form>
        </Formik>
        <Link to={Route.LOGIN}>Ai deja un cont?</Link>
        <GoogleSSO />
      </div>
    </div>
  );
};

export default RegisterPage;
