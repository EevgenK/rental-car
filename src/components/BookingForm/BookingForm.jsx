import { Field, Form, Formik } from 'formik';
import s from './BookingForm.module.css';
import BookingField from '../BookingField/BookingField';
import DataField from '../DataField/DataField';
import { bookingValidationSchema } from '../../utils/bookingValidationSchema';
import ErrorValidationWrapper from '../ErrorValidationWrapper/ErrorValidationWrapper';
import toast from 'react-hot-toast';

const initialValues = {
  name: '',
  email: '',
  bookingDate: '',
  comment: '',
};
const BookingForm = () => {
  const onHandleSubmit = (values, action) => {
    action.resetForm();
    toast.success(`Dear ${values.name}, your booking  is confirmed!`);
  };
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Book your car now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={bookingValidationSchema}
        validateOnBlur={false}
        onSubmit={onHandleSubmit}
      >
        <Form className={s.form}>
          <BookingField name="name" type="text" />
          <BookingField name="email" type="email" />
          <DataField name="bookingDate" />
          <ErrorValidationWrapper name="comment">
            <Field
              as="textarea"
              className={s.textarea}
              id="comment"
              name="comment"
              rows="2"
              cols="50"
              placeholder="Comment"
            />
          </ErrorValidationWrapper>

          <button className={s.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
