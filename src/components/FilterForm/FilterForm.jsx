import { Field, Form, Formik } from 'formik';
import s from './FilterForm.module.css';
import { useEffect, useState } from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomInput from '../CustomInput/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarBrands,
  selectCarPricesMemo,
} from '../../redux/carBrands/selectors';
import { fetchCarBrands } from '../../redux/carBrands/opreations';
import { setFilters, resetFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import { fetchCars } from '../../redux/cars/operations';

const initialValues = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

const FilterForm = () => {
  const brands = useSelector(selectCarBrands);
  const prices = useSelector(selectCarPricesMemo);
  const filters = useSelector(selectFilter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarBrands());
  }, []);

  useEffect(() => {
    dispatch(fetchCars(filters));
  }, [filters, dispatch]);

  const handleSearch = (values) => {
    dispatch(resetFilter());
    dispatch(setFilters(values));
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSearch}>
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
