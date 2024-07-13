import styles from './RadioButton.module.css';

export function RadioButton({ id, value, name, text, ...props }) {
  return (
    <label htmlFor={id} className={styles.label} {...props}>
      <input type='radio' name={name} value={value} className={styles.radio} id={id}/>
      <div className={styles.radioFake} />
      <span>{text}</span>
    </label>
  );
}
