import { FilterItem } from './filter-item/FilterItem';
import { filterList, sectionList } from './mock';
import styles from './styles.module.css';


export function FilterList() {
  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        <li>
          <FilterItem 
            icon={'direction'} 
            placeholder={'Город'}
          />
        </li>

        <li>
          <FilterItem
            icon={'bag'} 
            placeholder={'Тип занятости'} 
            data={filterList}
            dropdown
          />
        </li>

        <li>
          <FilterItem
            icon={'additional'} 
            placeholder={'Дополнительные фильтры'} 
            data={sectionList}
            dropdown
          />
        </li>
      </ul>
      <button className={`btn-reset ${styles.btn}`}>Сбросить все фильтры</button>
    </div>
  );
}
