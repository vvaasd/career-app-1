import clsx from '@utils/clsx';
import { useRef, useState } from 'react';

import ChevronRight from '@components/UI/icons/ChevronRight';
import styles from './AccordeonItem.module.css';
import { Checkbox } from '@components/UI/Checkbox';
import { RadioButton } from '@components/UI/RadioButton';

export function AccordeonItem({ icon, title, list, name, type = 'checkbox' }) {
  const [isOpen, setIsOpen] = useState(false);

  const accordeonRef = useRef(null);
  const btnRef = useRef(null);

  const height = 39; //когда придет время адаптива придумай хук useResize и меняй это значение в зависимости от ширины экрана(высота ряда в аккордионе)

  const handlerToogle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <fieldset ref={accordeonRef} className={styles.accordion}>
      <button
        ref={btnRef}
        className={clsx(styles.btn, {
          [styles.open]: isOpen,
        })}
        onClick={handlerToogle}
      >
        {icon && icon}
        <legend>{title}</legend>
        <ChevronRight
          className={clsx(styles.arrow, {
            [styles.open]: isOpen,
          })}
        />
      </button>
      <div
        className={styles.children}
        style={{ height: `${isOpen ? height * list.length : 0}px` }}
      >
        {list.map(({ id, value }) => {
          return (
            <>
              {type === 'checkbox' ? (
                <Checkbox
                  key={id}
                  id={id}
                  value={value}
                  name={name}
                  text={value}
                  style={{ height: `${height}px` }}
                />
              ) : (
                <RadioButton
                  key={id}
                  id={id}
                  value={value}
                  name={name}
                  text={value}
                  style={{ height: `${height}px` }}
                />
              )}
            </>
          );
        })}
      </div>
    </fieldset>
  );
}
