import s from './CustomArrowIcon.module.css';
const CustomArrowIcon = ({ isOpen }) => {
  return (
    <svg
      width={16}
      height={16}
      className={`${s.icon} ${isOpen ? s.iconOpen : ''}`}
    >
      <use href="/icons/sprite.svg#icon-arrow-down"></use>
    </svg>
  );
};

export default CustomArrowIcon;
