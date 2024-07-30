import { filtersData } from '@data/filtersData';
import FilterItemInput from './FilterItemInput';
import FilterItem from './FilterItem';
import Label from '@components/UI/Label';
import styles from './Filterlist.module.css';
import useFilters from '@store/useFilters';
import useVacanciesData from '@store/useVacanciesData';
import useInputFilter from '@store/useInputFilter';
import { getAddicionalFiltersCount } from '@utils/getAddicionalFiltersCount';
import { useEffect, useRef } from 'react';

export default function Filterlist() {
  const firstFilterData = filtersData[0];
  const refs = useRef([]);
  const {
    currentFilters,
    handleFilterChange,
    resetFilters,
    isFiltersDefault,
    checkAndSetIsFiltersDefault,
  } = useFilters((state) => ({
    currentFilters: state.currentFilters,
    handleFilterChange: state.handleFilterChange,
    resetFilters: state.resetFilters,
    isFiltersDefault: state.isFiltersDefault,
    checkAndSetIsFiltersDefault: state.checkAndSetIsFiltersDefault,
  }));
  const setInputValue = useInputFilter((state) => state.setInputValue);
  const resetCurPage = useVacanciesData((state) => state.resetCurPage);

  const resetFiltersMarks = () => {
    refs.current.forEach((ref) => {
      if (ref?.current) {
        const isCheckedByDefault = JSON.parse(
          ref?.current?.getAttribute('data-is-checked-by-default')
        );
        ref.current.checked = isCheckedByDefault;
      }
    });
  };

  const handlePushRef = (ref) => {
    refs.current.push(ref);
  };

  useEffect(() => {
    checkAndSetIsFiltersDefault();
  }, []);

  const renderFilterItemContent = (filterItemData) => {
    return (
      <div className={styles['button-lists']}>
        {filterItemData.buttonsLists.map((buttonsList, index) => {
          return (
            <ul
              className={styles['list']}
              key={`list${index}:${filterItemData.name}`}
            >
              {buttonsList.map((buttonData, index) => {
                return (
                  <li
                    className={styles['element']}
                    key={`${filterItemData.name}_${buttonData.name}`}
                  >
                    <Label
                      inputName={filterItemData.name}
                      htmlFor={buttonData.name}
                      inputType={buttonData.type}
                      onClick={(inputName, htmlFor) => {
                        resetCurPage();
                        handleFilterChange(inputName, htmlFor);
                      }}
                      pushRef={handlePushRef}
                      dataIsCheckedByDefault={
                        index === 0 && buttonData.type === 'radio'
                      }
                    >
                      {buttonData.title}
                    </Label>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    );
  };

  const nestedFiltersCount = getAddicionalFiltersCount(currentFilters);

  return (
    <div className={`${styles['filter-list-wrapper']} container`}>
      <div className={`${styles['filter-list']}`}>
        <FilterItemInput iconName="location" pushRef={handlePushRef} />

        <FilterItem
          type={'unnested'}
          iconName={firstFilterData.iconName}
          title={firstFilterData.title}
          key={firstFilterData.name}
          filterName={firstFilterData.name}
        >
          {renderFilterItemContent(firstFilterData)}
        </FilterItem>

        <FilterItem
          iconName="filter"
          title={'Дополнительные фильтры'}
          nestedCount={nestedFiltersCount}
        >
          <ul className={styles['nested-list']}>
            {filtersData.map((filterItemData, index) => {
              // пропуск уже отображающегося фильтра
              if (index === 0) {
                return;
              }

              return (
                <li
                  key={filterItemData.name}
                  className={styles['nested-filter']}
                >
                  <FilterItem
                    type={'nested'}
                    iconName={filterItemData.iconName}
                    title={filterItemData.title}
                    filterName={filterItemData.name}
                  >
                    {renderFilterItemContent(filterItemData)}
                  </FilterItem>
                </li>
              );
            })}
          </ul>
        </FilterItem>
      </div>
      <div
        className={`${styles['reset-btn-wrapper']} ${
          isFiltersDefault && styles['hidden']
        }`}
      >
        <button
          onClick={() => {
            resetFilters();
            resetFiltersMarks();
            setInputValue('');
            resetCurPage();
          }}
          className={`${styles['reset-btn']}`}
          type="reset"
        >
          Сбросить все фильтры
        </button>
      </div>
    </div>
  );
}
