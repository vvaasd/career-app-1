import styles from './styles.module.css';
import useFilterFieldInput from '../../../hooks/useFilterFieldInput';
import { IconCross } from '../../ui/icons';
import { Icon } from '../../icon/Icon';

export const FilterInput = ({
  icon,
  placeholder
}) => {

  const {
    input, 
    inputFocus,
    handleSetInput,
    handleSetFocus,
    handleSetBlur,
    handleReset,
    showCross
  } = useFilterFieldInput();

  return (
    <label className={`${styles.block} ${inputFocus?styles.focus:''}`}>
      <Icon icon={icon} />
      <input
        type='text'
        placeholder={placeholder}
        className={styles.input}
        value={input}
        onChange={handleSetInput}
        onFocus={handleSetFocus}
        onBlur={handleSetBlur}
      />
      {
        showCross && 
          <button onClick={handleReset} className={`btn-reset ${styles.reset}`}>
            <IconCross className={styles.cross}/>
          </button>
      }
    </label>
  );
};
