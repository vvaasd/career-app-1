import { useEffect, useRef } from 'react';
import useFilters from '@store/useFilters';
import classes from './Label.module.css';

export default function Label({
  children,
  htmlFor = '',
  inputType = 'checkbox',
  inputName = '',
  dataIsCheckedByDefault = false,
  onClick = () => {},
  pushRef = () => {},
}) {
  const inputId = `${inputName}_${htmlFor}`;
  const inputRef = useRef(null);
  const { currentFilters } = useFilters((state) => ({
    currentFilters: state.currentFilters,
  }));
  const getIsFilterChecked = (filterName, filterField) => {
    const currentFilter = currentFilters[filterName];
    if (filterField === 'only_with_salary' || filterField === 'show_hidden') {
      return currentFilters[filterField];
    }

    if (filterName === 'area') {
      return currentFilter.some((area) => area.id === filterField);
    }

    if (typeof currentFilter === 'object') {
      return currentFilter.includes(filterField);
    }

    return currentFilter === filterField;
  };

  const isFilterChecked = getIsFilterChecked(inputName, htmlFor);

  useEffect(() => {
    pushRef(inputRef);
  }, []);

  return (
    <label htmlFor={inputId} className={classes['label']}>
      <input
        ref={inputRef}
        className={classes['input']}
        id={inputId}
        name={htmlFor === 'only_with_salary' ? htmlFor : inputName}
        type={inputType}
        data-is-checked-by-default={dataIsCheckedByDefault}
        defaultChecked={isFilterChecked}
        onClick={() => {
          onClick(inputName, htmlFor);
        }}
      />
      <span className={`${classes['input-mark']} ${classes[inputType]}`}></span>
      {children}
    </label>
  );
}
