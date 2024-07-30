import { useRef, useState } from 'react';
import { useClickOutside } from '@hooks';
import Icon from '@components/UI/Icon';
import Dropdown from '@components/UI/Dropdown';
import FilterCounter from '@components/UI/FilterCounter';
import useFilters from '@store/useFilters';
import styles from './FilterItem.module.css';

export default function FilterItem({
  iconName,
  title,
  type = 'unnested',
  children,
  filterName,
  nestedCount = 0,
}) {
  const [isOpened, setIsOpened] = useState(false);
  const currentFilters = useFilters((state) => state.currentFilters);
  const filterItemRef = useRef(null);
  const currentFilter = currentFilters[filterName];

  let filterCount = 0;
  if (typeof currentFilter === 'object') {
    filterCount = currentFilter.length;
  } else if (currentFilter) {
    filterCount = 1;
  }
  // переменные чекбоксов, которые хранятся вне массивов для чекбоксов
  if (filterName === 'salary' && currentFilters.only_with_salary) {
    filterCount++;
  }
  if (filterName === 'label' && currentFilters.show_hidden) {
    filterCount++;
  }

  if (type === 'unnested') {
    useClickOutside(filterItemRef, () => {
      setIsOpened(false);
    });
  }

  return (
    <div ref={filterItemRef} className={styles['wrapper']}>
      <button
        className={`${styles['filter-btn']} ${
          type === 'nested' && styles['nested']
        } ${isOpened && styles['opened']}`}
        onClick={() => {
          setIsOpened((prev) => !prev);
        }}
      >
        <div className={styles['icon-and-text']}>
          <Icon name={iconName} className={styles['icon']} />
          <div
            className={`${styles['text']} ${
              (nestedCount || filterCount) && styles['short']
            }`}
          >
            {title}
          </div>
        </div>
        <div className={styles['counter-and-arrow']}>
          <FilterCounter count={nestedCount || filterCount} />
          <Icon
            name="arrowToRight"
            className={`${styles['arrow-icon']} ${
              isOpened && styles['rotated']
            }`}
          />
        </div>
      </button>

      <Dropdown isOpened={isOpened} type={type}>
        {children}
      </Dropdown>
    </div>
  );
}
