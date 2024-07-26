import clsx from '@utils/clsx';
import VacancyBlock from './VacancyBlock';
import PaginatePagesList from '../PaginatePagesList';
import VacancyListSkeleton from '../VacancyListSkeleton';
import styles from './VacancyList.module.css';
import Button from '../Button';

const VacancyList = ({
  data,
  isLoading,
  perPage = 18,
  type = "with-pagination",
  groupByDate = true,
  onShowMore,
  isShowMoreBtnVisible
}) => {
  if (!isLoading && !data.length) return 'Нет данных';

  const dataOutput = (data) => groupByDate ? data.map((item) => (
    <section key={item.date} className={styles.vacanciesSection}>
      <h1 className={clsx('title', styles.title)}>{item.date}</h1>
      <VacancyBlock data={item.vacancies} />
    </section>
  )) : (
    <VacancyBlock data={data} />
  )

  const WithPagination = () => (
    <>
      {isLoading ? (
        <VacancyListSkeleton cardsCount={perPage} />
      ) : dataOutput(data)}
      <PaginatePagesList />
    </>
  )

  const InfinityList = () => (
    <>
      {dataOutput(data)}
      {isLoading && (
        <VacancyListSkeleton cardsCount={perPage} withTitle={false} />
      )}
      {isShowMoreBtnVisible && (
        <Button className={styles.showMoreBtn} onClick={onShowMore} disabled={isLoading}>
          Показать ещё
        </Button>
      )}
    </>
  )

  return type === "with-pagination" ? (
    <WithPagination />
  ) : (
    <InfinityList />
  );
};

export default VacancyList;
