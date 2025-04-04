import { useDispatch, useSelector } from 'react-redux';
import s from './CarGallery.module.css';
import { selectCarsList, selectIsLoading } from '../../redux/cars/selectors';
import { fetchCars } from '../../redux/cars/operations';
import { useEffect, useRef } from 'react';

import CarCard from '../CarCard/CarCard';
import Loader from '../Loader/Loader';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

export const CarGallery = () => {
  const carsGallery = useSelector(selectCarsList);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const galleryRef = useRef(null);
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={s.gallery} ref={galleryRef}>
          {carsGallery.length > 0 &&
            carsGallery.map((car) => <CarCard key={car.id} car={car} />)}
        </ul>
      )}
      <LoadMoreButton takenRef={galleryRef} />
    </>
  );
};

export default CarGallery;
