import { ICON_NAMES } from '@/constants/ICON_NAMES';
import { Icon } from '@/components';
import styles from './FilterItem.module.css';

const FilterItem = ({ type, iconName, children }) => {
  return (
    <li className={styles['wrapper']}>
      <button type='button' className={styles['btn']}>
        <div className={styles['img-and-text']}>
          <Icon name={iconName} className={styles['img']} />
          <p className={styles['text']}>{children}</p>
        </div>
        {type === 'dropdown' && (
          <Icon
            name={ICON_NAMES.arrowToRight}
            className={styles['arrow-img']}
          />
        )}
      </button>
    </li>
  );
};

export default FilterItem;
