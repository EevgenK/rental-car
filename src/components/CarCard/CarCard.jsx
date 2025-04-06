import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import s from './CarCard.module.css';
import { formatMilage, formatRegister } from '../../utils/cardHelpers';
import { setFavorites } from '../../redux/favorites/slice';
import { selectIfFavorite } from '../../redux/favorites/selectors';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const liked = useSelector(selectIfFavorite(car.id));

  const toggleLike = () => {
    dispatch(setFavorites(car.id));
  };
  const location = car?.address?.split(',') || [];

  return (
    <li className={s.card}>
      <div className={s.background}>
        <svg
          onClick={toggleLike}
          className={clsx(s.favorite, liked && s.liked)}
        >
          <use href="/icons/sprite.svg#icon-liked" loading="lazy" />
        </svg>
        <img className={s.photo} src={car?.img} alt="car photo" />
      </div>

      <div className={s.wrap}>
        <h3 className={s.title}>
          {car?.brand + ' '}
          <span>{car?.model}, </span>
          {car?.year}
        </h3>
        <p>${car?.rentalPrice}</p>
      </div>
      <ul className={s.features}>
        <li className={s.detail}>{location[1]}</li>
        <li className={s.detail}>{location[2]}</li>
        <li className={s.detail}>{car?.rentalCompany}</li>

        <div className={s.details}>
          {' '}
          <li className={s.detail}>{formatRegister(car?.type)}</li>
          <li className={s.detail}>{formatMilage(car?.mileage)}</li>
        </div>
      </ul>
      <Button link={`/catalog/${car.id}`} text="Read more" />
    </li>
  );
};

export default CarCard;
