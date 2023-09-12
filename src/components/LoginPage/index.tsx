import { FC, useCallback } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { loginValidationSchema } from '@constants/validation-schemas';
import { FormField } from '@components';
import { Route } from '@enums';

const loginValues = { username: '', password: '' };

const LoginPage: FC = () => {
  const handleLogin = useCallback(
    (
      values: typeof loginValues,
      helpers: FormikHelpers<typeof loginValues>,
    ) => {
      // TODO: perform login
      console.log(values);
      helpers.resetForm();
    },
    [],
  );

  const handleGoogleLogin = useCallback((res: CredentialResponse) => {
    const credentials = jwtDecode(res.credential);
    // TODO: send credentials
    console.log(credentials);
  }, []);

  return (
    <div className="flex items-center flex-1 justify-center">
      <div className="flex flex-col gap-5 p-12 rounded-2xl shadow-2xl">
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
            <button type="submit">Logare</button>
          </Form>
        </Formik>
        <Link to={Route.REGISTER}>Creeaza cont</Link>
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          auto_select={false}
          ux_mode="popup"
          theme="filled_blue"
          text="continue_with"
          useOneTap
          type="standard"
          size="large"
          locale="auto"
          shape="pill"
        />
      </div>
    </div>
  );
};

export default LoginPage;
