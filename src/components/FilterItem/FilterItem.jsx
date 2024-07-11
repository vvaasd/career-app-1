import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import Icon from '../Icon/Icon';
import Dropdown from '../Dropdown/Dropdown';
import classes from './FilterItem.module.css';

export default function FilterItem({
  iconName,
  title,
  type = 'unnested',
  children,
}) {
  const [isOpened, setIsOpened] = useState(false);
  const filterItemRef = useRef(null);

  if (type === 'unnested') {
    useClickOutside(filterItemRef, () => {
      setIsOpened(false);
    });
  }

  return (
    <div ref={filterItemRef} className={classes['wrapper']}>
      <button
        className={`${classes['filter-btn']} ${
          type === 'nested' && classes['nested']
        } ${isOpened && classes['opened']}`}
        onClick={() => {
          setIsOpened((prev) => !prev);
        }}
      >
        <div className={classes['icon-and-text']}>
          <Icon name={iconName} className={classes['icon']} />
          <div className={`${classes['text']}`}>{title}</div>
        </div>
        <Icon
          name="arrowToRight"
          className={`${classes['arrow-icon']} ${
            isOpened && classes['rotated']
          }`}
        />
      </button>

      <Dropdown isOpened={isOpened} type={type}>
        {children}
      </Dropdown>
    </div>
  );
}
