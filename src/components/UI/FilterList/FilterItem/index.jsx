import styles from './FilterItem.module.css';
import { useState } from 'react';
import { DropDown } from '@components/UI/DropDown';
import { CloseIcon } from '@components/UI/icons';
import clsx from '@utils/clsx';

const FilterItem = ({ icon, input, id, value, cb, title, dropdown, children }) => {
  const [isOpen, setIsOpen] = useState()
  const handlerCity = (e) => {
    cb(e.target.value)
  }
  const handlerClearCity = () => { cb('') }
  return (
    <>
      {input && (
        <label className={clsx(styles.label, {
          [styles.filled]: value.trim().length > 0
        })} htmlFor={id}>
          {icon && icon}
          <input
            className={styles.input}
            value={value}
            onChange={handlerCity}
            type='text'
            placeholder={title}
          />
         {!!value.length &&  
         <button onClick={handlerClearCity} className={styles.close} type='reset'>
            <CloseIcon/>
          </button>}
        </label>
      )}
       {dropdown &&
         <DropDown title={title} icon={icon}>
          {children}
         </DropDown>
       }
    </>
  );
};

export default FilterItem;
