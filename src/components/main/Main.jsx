import { FilterList, VacancyList } from '../';

import styles from './styles.module.css';

export function Main() {
  return (
    <main className={styles.main}>
      <FilterList />
      <VacancyList />
    </main>
  );
}
