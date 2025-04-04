import s from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ text, link }) => {
  return (
    <Link className={s.link} to={link}>
      {text}
    </Link>
  );
};

export default Button;
