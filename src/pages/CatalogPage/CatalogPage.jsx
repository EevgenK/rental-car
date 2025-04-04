import CarGallery from '../../components/CarGallery/CarGallery';
import FilterForm from '../../components/FilterForm/FilterForm';

import s from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <section className={s.section}>
      <FilterForm />

      <CarGallery />
    </section>
  );
};

export default CatalogPage;
