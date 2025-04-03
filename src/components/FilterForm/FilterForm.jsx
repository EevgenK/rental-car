import { Field, Form, Formik } from 'formik';
import s from './FilterForm.module.css';
import { useState } from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomInput from '../CustomInput/CustomInput';
const initialValues = {
  brand: '',
  rentalPrice: '',
  mileageFrom: '',
  mileageTo: '',
};
const brands = ['BMW', 'Tesla', 'Audi', 'Chevrolet'];
const prices = ['30', '40', '50', '60', '70', '80'];
const FilterForm = () => {
  const [openSelect, setOpenSelect] = useState(null);
  const toggleOpen = (selectName) => {
    setOpenSelect((prev) => (prev === selectName ? null : selectName));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ setFieldValue }) => (
        <Form className={s.form}>
          <CustomSelect
            options={brands}
            label="Car brand"
            name={Object.keys(initialValues)[0]}
            placeholder="Choose a brand"
            setFieldValue={setFieldValue}
          />
          <CustomSelect
            options={prices}
            label="Price/ 1 hour"
            name={Object.keys(initialValues)[1]}
            placeholder="Choose a price"
            setFieldValue={setFieldValue}
          />

          <CustomInput
            position="left"
            label="Car mileage / km"
            name={Object.keys(initialValues)[2]}
            placeholder="From"
          />
          <CustomInput
            position="right"
            label="Car mileage to"
            name={Object.keys(initialValues)[3]}
            placeholder="To"
          />
          <button className={s.button} type="submit">
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
