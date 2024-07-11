import { useEffect, useState } from 'react';
import classes from './Dropdown.module.css';

export default function Dropdown({
  isOpened = false,
  type = 'unnested',
  children,
}) {
  const [isTransition, setIsTransition] = useState(false);
  const TRANSITION_DURATION = 200;

  useEffect(() => {
    if (type === 'unnested') {
      setIsTransition(true);

      const transitionTimer = setTimeout(() => {
        setIsTransition(false);
      }, TRANSITION_DURATION);
      return () => {
        clearTimeout(transitionTimer);
      };
    }
  }, [isOpened]);

  return (
    <div
      className={`${classes['dropdown']} ${classes[type]} ${
        isOpened && classes['shown']
      }`}
    >
      <div
        className={`${classes['dropdown-content']} ${
          isTransition && type === 'unnested' && classes['no-scroll']
        }`}
      >
        {children}
      </div>
    </div>
  );
}
