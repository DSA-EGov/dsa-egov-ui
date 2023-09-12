import { object, string } from 'yup';

// TODO: proper validation
export const registerValidationSchema = object({
  email: string().email().required(),
  username: string().required(),
  password: string().required(),
  passwordConfirm: string().required(),
});
