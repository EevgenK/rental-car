import { Field } from 'formik';
import s from './CustomInput.module.css';
import clsx from 'clsx';

const CustomInput = ({ label, name, placeholder, position }) => {
  return (
    <label htmlFor={name} className={s.label}>
      {' '}
      {label}
      <Field
        id={name}
        className={clsx(s.input, position === 'right' ? s.right : s.left)}
        type="text"
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
};

export default CustomInput;
