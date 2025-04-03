import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to="/">
        <svg className={s.logo}>
          <use href="/icons/sprite.svg#icon-logo" />
        </svg>
      </NavLink>

      <Navigation
        links={[
          { link: '/', title: 'Home' },
          { link: '/catalog', title: 'Catalog' },
        ]}
      />
    </header>
  );
};
export default Header;
