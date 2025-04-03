import { Link } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={s.section}>
      <h1 className={s.title}>Find your perfect rental car</h1>
      <h2 className={s.subtitle}>
        Reliable and budget-friendly rentals for any journey
      </h2>
      <Link className={s.link} to="catalog">
        View Catalog
      </Link>
    </section>
  );
};

export default HomePage;
