import { Field, useField } from 'formik';
import s from './CustomInput.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import { getMiLageFormat } from '../../utils/getMiLageFormat';

const CustomInput = ({ label, name, placeholder, position }) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;
  const [displayValue, setDisplayValue] = useState('');
  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    const formattedValue = getMiLageFormat(rawValue, placeholder);
    setDisplayValue(formattedValue);
    setValue(rawValue);
  };

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
        value={displayValue}
        onChange={handleChange}
      />
    </label>
  );
};

export default CustomInput;
