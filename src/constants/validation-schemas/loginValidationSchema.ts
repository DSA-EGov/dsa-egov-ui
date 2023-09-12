import { object, string } from 'yup';

// TODO: proper validation
export const loginValidationSchema = object({
  username: string().required(),
  password: string().required(),
});
