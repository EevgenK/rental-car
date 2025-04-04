import { useDispatch, useSelector } from 'react-redux';
import s from './LoadMoreButton.module.css';
import {
  selectCurrentPage,
  selectIfFavorite,
} from '../../redux/cars/selectors';
import { fetchMoreCars } from '../../redux/cars/operations';
import { smoothScroll } from '../../utils/smoothScroll';

const LoadMoreButton = ({ takenRef }) => {
  const isDisabled = useSelector(selectIfFavorite);
  const currentPage = useSelector(selectCurrentPage);

  const dispatch = useDispatch();
  const handleLoadMore = () => {
    dispatch(fetchMoreCars({ page: currentPage + 1 }));
    setTimeout(() => {
      smoothScroll(takenRef);
    }, 100);
  };
  return (
    <button
      onClick={handleLoadMore}
      disabled={isDisabled}
      type="button"
      className={s.load}
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;
