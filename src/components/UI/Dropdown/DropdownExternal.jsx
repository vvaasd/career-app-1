import { useEffect, useState } from 'react';
import useOutsideClickObserver from '@hooks/useOutsideClickObserver';
import { ChevronSVG } from '../IconsSVG/ChevronSVG';
import clsx from '@utils/clsx';
import styles from './Dropdown.module.css';
import { RadioButton } from '../RadioButton/RadioButton';
import { Checkbox } from '../Checkbox/Checkbox';
import { useGetFiltersCount } from '@hooks/useGetFiltersCount';
import { Dropdown } from './Dropdown';

export const DropdownExternal = ({
  type = 'default',
  name,
  placeholder,
  icon: Icon,
  items,
  isActive,
  className,
  setIsActive
}) => {

  const ref = useOutsideClickObserver(() => {
    if (type === 'default') setIsActive(false);
  });

  const count = useGetFiltersCount(name, true);

  const toggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      ref={ref}
      className={clsx(styles.dropdown, type === 'nested' && styles.nested, className)}
    >
      <button
        className={clsx(
          'btn',
          styles.dropdownToggle,
          isActive && styles.active,
          !isActive && styles.dropdownSmall
        )}
        onClick={toggle}
      >
        <Icon className={styles.icon} />
        <h3 className={styles.title}>{placeholder}</h3>
        {!!count && <div className={clsx(styles.counter, !isActive && styles.countSmall)}>{count}</div>}
        {isActive && <ChevronSVG className={styles.chevronIcon} />}
      </button>
      <div className={clsx(styles.dropdownMenu, isActive && styles.active)}>
        <ul className={styles.dropdownList}>
          {items.map((item) =>
            item.type === 'dropdown' ? (
              <li key={item.name}>
                <Dropdown
                  name={item.name}
                  placeholder={item.text}
                  icon={item.icon}
                  items={item.items}
                  type='nested'
                />
              </li>
            ) : item.type === 'radio' ? (
              <li key={`${item.name}-${item.value}`}>
                <RadioButton
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  text={item.text}
                />
              </li>
            ) : item.type === 'checkbox' ? (
              <li key={`${item.name}-${item.value}`}>
                <Checkbox
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  text={item.text}
                />
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};
