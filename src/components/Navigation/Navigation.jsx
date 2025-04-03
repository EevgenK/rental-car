import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = ({ links }) => {
  const items = links.map((el) => {
    return (
      <li key={el.title}>
        <NavLink className={s.link} to={el.link}>
          {el.title}
        </NavLink>
      </li>
    );
  });
  return (
    <nav className={s.nav}>
      <ul className={s.nav}>{items}</ul>
    </nav>
  );
};

export default Navigation;
