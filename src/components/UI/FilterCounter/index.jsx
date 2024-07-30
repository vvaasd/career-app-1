import styles from './FilterCounter.module.css';
import clsx from '@utils/clsx';

const FilterCounter = ({ count, className }) => {
  return (
    <div
      className={clsx(styles.wrapper, count < 1 && styles.hidden, className)}
    >
      <span className={styles.count}>{count}</span>
    </div>
  );
};

export default FilterCounter;
