import s from './Loader.module.css';
const Loader = () => {
  return (
    <div className={s.sharingon}>
      <div className={s.ring}>
        <div className={s.to}></div>
        <div className={s.to}></div>
        <div className={s.to}></div>
        <div className={s.circle}></div>
      </div>
    </div>
  );
};

export default Loader;
