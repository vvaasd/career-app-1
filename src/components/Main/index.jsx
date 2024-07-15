import FilterList from '@components/UI/FilterList';
import clsx from '@utils/clsx';
import styles from './Main.module.css';
import VacancyList from '@components/UI/VacancyList';

const Main = () => {
  return (
    <main>
      <div className={clsx('container', styles.container)}>
        <FilterList />
        <VacancyList />
      </div>
    </main>
  );
};

export default Main;
