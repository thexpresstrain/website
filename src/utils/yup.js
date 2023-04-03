import * as Yup from 'yup';

export const contactFormValidation = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email address is required'),
  message: Yup.string().required('Message cannot be empty'),
  agree: Yup.boolean().oneOf([true], 'Must agree to our Privacy Policy'),
});

export const newsletterValidation = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email address is required'),
});
