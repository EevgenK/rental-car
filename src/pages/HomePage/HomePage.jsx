import s from './HomePage.module.css';
import Button from '../../components/Button/Button';

const HomePage = () => {
  return (
    <section className={s.section}>
      <h1 className={s.title}>Find your perfect rental car</h1>
      <h2 className={s.subtitle}>
        Reliable and budget-friendly rentals for any journey
      </h2>
      <Button text="View Catalog" link="catalog" />
    </section>
  );
};

export default HomePage;
