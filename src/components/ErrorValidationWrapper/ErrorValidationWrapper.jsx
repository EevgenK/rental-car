import { ErrorMessage } from 'formik';
import s from './ErrorValidationWrapper.module.css';

const ErrorValidationWrapper = ({ name, children }) => {
  return (
    <label className={s.label}>
      {children}
      <ErrorMessage className={s.error} name={name} component="span" />
    </label>
  );
};

export default ErrorValidationWrapper;
