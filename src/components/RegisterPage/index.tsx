import { FC, useCallback } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { registerValidationSchema } from '@constants/validation-schemas';
import { Button, FormField, Icon } from '@components';
import { Route } from '@enums';

const registerValues = {
  username: '',
  password: '',
  email: '',
  passwordRepeat: '',
};

const RegisterPage: FC = () => {
  const handleRegister = useCallback(
    (
      values: typeof registerValues,
      helpers: FormikHelpers<typeof registerValues>,
    ) => {
      // TODO: perform register
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
      </div>
    </div>
  );
};

export default RegisterPage;
