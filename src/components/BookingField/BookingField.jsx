import { Field, useField } from 'formik';
import s from './BookingField.module.css';
import ErrorValidationWrapper from '../ErrorValidationWrapper/ErrorValidationWrapper';

const BookingField = ({ name, type }) => {
  const [field] = useField(name);
  return (
    <ErrorValidationWrapper name={name}>
      <Field
        {...field}
        className={s.input}
        placeholder={`${name.charAt(0).toUpperCase() + name.slice(1)}*`}
        name={name}
        autoComplete="off"
        type={type}
      />
    </ErrorValidationWrapper>
  );
};

export default BookingField;
