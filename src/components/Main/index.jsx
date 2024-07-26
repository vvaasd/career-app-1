import { useEffect } from 'react';
import useVacanciesData from '@store/useVacanciesData';
import clsx from '@utils/clsx';
import styles from './Main.module.css';

const Main = ({ children }) => {

  return (
    <main>
      <div className={clsx('container', styles.container)}>
        {children}
      </div>
    </main>
  );
};

export default Main;
