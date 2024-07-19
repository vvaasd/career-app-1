import { VacancyBlock, PaginationBlock, VacancyListSkeleton } from '../';
import { useEffect } from 'react';
import { useHH } from '../../store';
import { DateService } from '../../utils';
import styles from './styles.module.css';
import { MAX_VACANCIES_PER_PAGE } from '../../constans/constants';

export function VacancyList() {
  const { loading, error, vacancyList, fetchVacancies, totalVacanciesCount } =
    useHH((state) => ({
      error: state.error,
      loading: state.loading,
      vacancyList: state.vacancyList,
      fetchVacancies: state.fetchVacancies,
      totalVacanciesCount: state.totalVacanciesCount,
    }));

  const { vacancyListPage, setVacancyListPage } = useHH((state) => ({
    vacancyListPage: state.vacancyListPage,
    setVacancyListPage: state.setVacancyListPage,
  }));

  useEffect(() => {
    // fetchVacancies({isTodayOnly: true}) //Раскоментировать если нужно на один день
    fetchVacancies(); //Закоментировать если нужно на один день
  }, [vacancyListPage]);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  const dates = Array.from(
    new Set(
      vacancyList.map((el) => {
        return DateService.formatDate(el?.created_at);
      })
    )
  );

  const pagesCount = Math.ceil(totalVacanciesCount / MAX_VACANCIES_PER_PAGE);

  return (
    <>
      {!loading ? (
        dates.map((date) => {
          return (
            <VacancyBlock
              key={date}
              list={vacancyList.filter(
                (vacancy) =>
                  DateService.formatDate(vacancy?.created_at) === date
              )}
              date={date}
            />
          );
        })
      ) : (
        <VacancyListSkeleton />
      )}
      <PaginationBlock
        onSelect={setVacancyListPage}
        maxPages={pagesCount}
        currentPage={vacancyListPage}
        maxItems={5}
      />
    </>
  );
}
