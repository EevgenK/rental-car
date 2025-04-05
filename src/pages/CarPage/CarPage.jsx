import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';

import BookingForm from '../../components/BookingForm/BookingForm';
import { getIdFromUrl } from '../../utils/getIdFromUrl';
import { formatMilage } from '../../utils/cardHelpers';
import RentList from '../../components/RentList/RentList';
import { fetchCarDescription } from '../../redux/carDescription/operations';
import s from './CarPage.module.css';
import {
  selectCarDescriptionList,
  selectCarDescriptionLoading,
} from '../../redux/carDescription/selectors';
import Loader from '../../components/Loader/Loader';

const CarPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectCarDescriptionLoading);
  const car = useSelector(selectCarDescriptionList);

  useEffect(() => {
    if (id) {
      dispatch(fetchCarDescription(id));
    }
  }, [id, dispatch]);
  const location = car?.address?.split(' ') || [];
  return (
    <section className={s.section}>
      {isLoading || Object.keys(car).length === 0 ? (
        <Loader />
      ) : (
        <>
          <div>
            <img className={s.img} src={car?.img} alt="Car photo" />
            <BookingForm />
          </div>
          <div className={s.details}>
            <h2 className={s.title}>
              {car?.brand + ' '}
              {car?.model}, {car?.year}
              <span>id: {getIdFromUrl(car?.img)}</span>
            </h2>
            <p className={s.address}>
              <svg className={s.icon} width={16} height={16}>
                <use href="/icons/sprite.svg#icon-location" />
              </svg>
              {location[location.length - 2] + ' '}
              {location[location.length - 1]}
              <span>Mileage: {formatMilage(car?.mileage)}</span>
            </p>
            <p className={s.price}>${car?.rentalPrice}</p>
            <p className={s.description}>{car?.description}</p>
            <ul className={s.rent_lists}>
              <RentList
                title="Rental Conditions:"
                key={nanoid()}
                icon="/icons/sprite.svg#icon-check"
                items={car?.rentalConditions}
              />
              <RentList
                title="Car Specifications:"
                key={nanoid()}
                icon={[
                  '/icons/sprite.svg#icon-year',
                  '/icons/sprite.svg#icon-type',
                  '/icons/sprite.svg#icon-fuel',
                  '/icons/sprite.svg#icon-engine',
                ]}
                items={[
                  `Year: ${car?.year}`,
                  `Type: ${car?.type}`,
                  `Fuel Consumption: ${car?.fuelConsumption}`,
                  `Engine Size: ${car?.engineSize}`,
                ]}
              />
              <RentList
                title="Accessories and functionalities:"
                key={nanoid()}
                icon="/icons/sprite.svg#icon-check"
                items={[
                  ...(car?.accessories || []),
                  ...(car?.functionalities || []),
                ]}
              />
            </ul>
          </div>
        </>
      )}
    </section>
  );
};

export default CarPage;
