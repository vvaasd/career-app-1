import classes from './FilterItemInput.module.css';
import Icon from '../Icon/Icon';
import { useState } from 'react';

export default function FilterItemInput({ iconName }) {
  const [inputValue, setInputValue] = useState('');
  const [isBgColored, setIsBgColored] = useState(false);

  const handleBlurInput = () => {
    if (!inputValue) {
      setIsBgColored(false);
    }
  };

  const handleClearInput = () => {
    setIsBgColored(false);
    setInputValue('');
  };

  return (
    <div
      className={`${classes['input-wrapper']} ${
        isBgColored && classes['bg-colored']
      }`}
    >
      <input
        value={inputValue}
        onInput={(e) => setInputValue(e.target.value)}
        onFocus={() => {
          setIsBgColored(true);
        }}
        onBlur={handleBlurInput}
        className={`${classes['input']}`}
        placeholder="Город"
      />
      <button className={classes['reset-btn']} onClick={handleClearInput}>
        <Icon name="xmark" />
      </button>
      <Icon name={iconName} className={classes['bg-icon']} />
    </div>
  );
}
