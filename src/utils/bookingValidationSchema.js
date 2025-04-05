import * as Yup from 'yup';

export const bookingValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Email is required'),
  bookingDate: Yup.date()
    .min(new Date(), 'Should be not in past')
    .required('Booking date is required'),
  comment: Yup.string().max(500, 'Comment is too long'),
});
