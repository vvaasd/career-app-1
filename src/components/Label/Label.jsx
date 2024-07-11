import classes from './Label.module.css';

export default function Label({
  children,
  htmlFor = '',
  inputType = 'checkbox',
  inputName = '',
}) {
  return (
    <label htmlFor={htmlFor} className={classes['label']}>
      <input
        id={htmlFor}
        name={inputName}
        type={inputType}
        className={classes['input']}
      />
      <span className={`${classes['input-mark']} ${classes[inputType]}`}></span>
      {children}
    </label>
  );
}
