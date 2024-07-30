import useVacanciesData from '@store/useVacanciesData';
import PaginatePageItem from './PaginatePageItem';
import { usePaginateMask } from '@hooks';
import useFilters from '@store/useFilters';
import styles from './PaginatePagesList.module.css';

const PaginatePagesList = () => {
  const { totalPages, curPage, fetchVacancy } = useVacanciesData();
  const currentFilters = useFilters((state) => state.currentFilters);
  const paginameMask = usePaginateMask(totalPages, curPage);

  const onClick = (page) => {
    fetchVacancy(page - 1, currentFilters);
  };

  return (
    <>
      {totalPages > 1 && (
        <div className={styles.wrapper}>
          {paginameMask.map((item, i) => (
            <PaginatePageItem key={i} item={item} onClick={onClick} />
          ))}
        </div>
      )}
    </>
  );
};

export default PaginatePagesList;
