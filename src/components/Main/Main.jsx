import { FilterList, VacancyList } from '@/components';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles['main']}>
      <FilterList />
      <VacancyList />
    </main>
  );
};

export default Main;
