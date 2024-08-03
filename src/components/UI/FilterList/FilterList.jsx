import { useEffect, useState } from 'react';

import styles from './FilterList.module.css';

import { FilterItem } from './FilterItem/FilterItem';
import { formatCitiesJson } from '@utils/formatCitiesJson';
import clsx from '@utils/clsx';
import { useVacancyStore } from '@store/vacancyStore';
import { useGetFiltersCount } from '@hooks/useGetFiltersCount';

export const FilterList = ({ items }) => {
  const [citiesList, setCitiesList] = useState([]);
  const [filtersCount, setFiltersCount] = useState(0);

  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const [isInputActive, setisInputActive] = useState(false)


  const [
    filters,
    fetchVacancies,
    clearFilters,
    changeFilters,
    clearChangeFilters,
  ] = useVacancyStore((state) => [
    state.filters,
    state.fetchVacancies,
    state.clearFilters,
    state.changeFilters,
    state.clearChangeFilters,
  ]);

  useEffect(() => {
    setCitiesList(formatCitiesJson());
  }, []);

  useEffect(() => {
    clearChangeFilters();
    setFiltersCount(
      Object.keys(filters).reduce((count, key) => {
        if (Array.isArray(filters[key])) return count + filters[key].length;
        else if (filters[key] !== 'none' && filters[key] !== false)
          return count + 1;
        return count;
      }, 0)
    );
    sessionStorage.setItem(
      'filters_of_Andrey_Lashkevich',
      JSON.stringify(filters)
    );
    fetchVacancies();
  }, [changeFilters]);

  const handleClearFilters = () => {
    clearFilters();
  };

  const count = useGetFiltersCount('additional', true);

  return (
    <section className={clsx(styles.container, !!filtersCount && styles.resetStyle)}>
      <div className={clsx(styles.filterList, (isInputActive || isDropdownActive) && styles.oneFilter, count && styles.bigExternalDropdown)}>
        {items.map((item) => (
          <FilterItem
            key={item.name}
            type={item.type}
            name={item.name}
            text={item.text}
            icon={item.icon}
            items={item.type === 'dropdown' ? item.items : citiesList}
            isDropdownActive={isDropdownActive}
            setIsDropdownActive={setIsDropdownActive}
            isInputActive={isInputActive}
            setisInputActive={setisInputActive}
          />
        ))}
      </div>
      {!!filtersCount && (
        <button
          className={clsx('btn', styles.resetBtn)}
          onClick={handleClearFilters}
        >
          Сбросить все фильтры
        </button>
      )}
    </section>
  );
};
