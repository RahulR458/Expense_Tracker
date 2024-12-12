import * as Yup from 'yup';

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const loginSchema = Yup.object({
  mobile: Yup.string()
    .matches(phoneRegExp, 'Mobile number is not valid')
    .required('Number is required'),
  password: Yup.string()
    .min(3, 'Password must be at least 3 characters long')
    .required('Password is required'),
});
