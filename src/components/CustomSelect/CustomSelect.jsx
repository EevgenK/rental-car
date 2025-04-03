import { Field } from 'formik';
import s from './CustomSelect.module.css';
import { useState } from 'react';

const CustomSelect = ({ label, name, placeholder, setFieldValue, options }) => {
  //   const [selectedValue, setSelectedValue] = useState('');

  const [openSelect, setIsOpen] = useState(false);
  const selects = options.map((el) => (
    <option key={el} value={el}>
      {el}
    </option>
  ));
  const toggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <>
      <label htmlFor={name} className={s.label}>
        {label}
        <Field
          id={name}
          onClick={() => toggleOpen(name)}
          as="select"
          name={name}
          // value={selectedValue}
          onChange={(e) => {
            //   setSelectedValue(e.target.value);
            setFieldValue(name, e.target.value);
          }}
          className={s.select}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {selects}
        </Field>
        <svg className={`${s.icon} ${openSelect ? s.iconOpen : ''}`}>
          <use href="/icons/sprite.svg#icon-arrow-down"></use>
        </svg>
      </label>
    </>
  );
};

export default CustomSelect;
