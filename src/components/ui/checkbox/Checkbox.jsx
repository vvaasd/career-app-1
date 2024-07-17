import { IconCheck } from '../icons';
import styles from './styles.module.css';

const Checkbox = ({className='', children}) => {
  return (
    <label className={`${styles.block} ${className}`}>
      <input className={styles.input} type="checkbox"/>
      <span className={styles.field}>
        <IconCheck className={styles.icon}/>
      </span>
      {children && <span className={styles.text}>{children}</span>}
    </label>
  );
};

export default Checkbox;