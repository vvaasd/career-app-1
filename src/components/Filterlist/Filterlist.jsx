import { ICON_NAMES } from '@/constants';
import { FilterItem } from '@/components';
import styles from './Filterlist.module.css';

const Filterlist = () => {
  return (
    <ul className={styles['list']}>
      <FilterItem type='input' iconName={ICON_NAMES.location}>
        Город
      </FilterItem>
      <FilterItem type='dropdown' iconName={ICON_NAMES.briefcase}>
        Тип занятости
      </FilterItem>
      <FilterItem type='dropdown' iconName={ICON_NAMES.filter}>
        Дополнительные фильтры
      </FilterItem>
    </ul>
  );
};

export default Filterlist;
