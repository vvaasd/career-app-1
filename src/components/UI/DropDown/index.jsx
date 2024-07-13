import { useRef, useState } from 'react';
import { useClickOutside } from '@hooks';

import styles from './DropDown.module.css';
import ChevronRight from '../icons/ChevronRight';
import clsx from '@utils/clsx';

export function DropDown({ children, title, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handlerClose = () => {
    setIsOpen(false);
  };

  const handlerToogle = () => {
    setIsOpen((prev) => !prev);
  };

  useClickOutside(dropdownRef, handlerClose);
  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button
        className={clsx(styles.btn, {
          [styles.open]: isOpen,
        })}
        onClick={handlerToogle}
      >
        {icon && icon}
        <span>{title}</span>
        <ChevronRight
          className={clsx(styles.arrow, {
            [styles.open]: isOpen,
          })}
        />
      </button>
      {isOpen && <div className={styles.children}>{children}</div>}
    </div>
  );
}
