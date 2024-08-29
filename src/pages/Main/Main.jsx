import styles from './Main.module.css';

import { FilterList } from '@components/UI/FilterList/FilterList';
import { VacancyList } from '@components/UI/VacancyList/VacancyList';
import { filterItemsDesktop, filterItemsMobile, SIZE_CONTAINER } from '@constants';
import { useResize } from '@hooks/useResize';

export const Main = () => {
  const screenType = useResize()

  return (
    <main className={styles.main} id='content'>
      {screenType === SIZE_CONTAINER.desktop ? <FilterList items={filterItemsDesktop} /> : <FilterList items={filterItemsMobile} />}
      <VacancyList />
    </main>
  );
};
