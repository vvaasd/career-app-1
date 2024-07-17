import styles from './styles.module.css';

const Radio = ({name, className, children}) => {
  return (
    <label className={`${styles.block} ${className}`}>
      <input className={styles.input} name={name} type="radio"/>
      <span className={styles.field}></span>
      {children && <span className={styles.text}>{children}</span>}
    </label>
  );
};

export default Radio;