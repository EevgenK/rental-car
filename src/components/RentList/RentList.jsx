import { nanoid } from '@reduxjs/toolkit';
import s from './RentList.module.css';

const RentList = ({ icon, items, title }) => {
  const renderList = items.map((item, idx) => {
    return (
      <li key={nanoid()} className={s.listItem}>
        {typeof icon === 'string' ? (
          <svg className={s.icon} width={16} height={16}>
            <use href={icon} />
          </svg>
        ) : (
          <svg className={s.icon} width={16} height={16}>
            <use href={icon[idx]} />
          </svg>
        )}
        {item}
      </li>
    );
  });

  return (
    <li className={s.box}>
      <h4 className={s.title}>{title}</h4>
      <ul className={s.list}>{renderList}</ul>
    </li>
  );
};

export default RentList;
