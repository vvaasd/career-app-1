import cityItemImg from '@/assets/img/location.svg';
import employmentStatusItemImg from '@/assets/img/briefcase.svg';
import addictionalFiltersItemImg from '@/assets/img/filter.svg';
import { FilterItem } from '@/components';
import styles from './Filterlist.module.css';

const Filterlist = () => {
  return (
    <ul className={styles['list']}>
      <FilterItem type='input' imgSrc={cityItemImg}>
        Город
      </FilterItem>
      <FilterItem type='dropdown' imgSrc={employmentStatusItemImg}>
        Тип занятости
      </FilterItem>
      <FilterItem type='dropdown' imgSrc={addictionalFiltersItemImg}>
        Дополнительные фильтры
      </FilterItem>
    </ul>
  );
};

export default Filterlist;
