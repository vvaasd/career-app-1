import { ChevronSVG } from '@components/UI/IconsSVG/ChevronSVG';
import { SimilarVacancy } from '@components/UI/SimilarVacancy/SimilarVacancy';
import { VacancyDetail } from '@components/UI/VacancyDetail/VacancyDetail';
import { APP_PAGE } from '@constants';
import { useRouteStore } from '@store/routeStore';
import { useDetailVacancyStore } from '@store/detailVacancyStore';
import styles from './DetailVacancy.module.css';

export const DetailVacancy = () => {
  const { setPageApp } = useRouteStore();
  const { resetVacancyDetail } = useDetailVacancyStore();

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.btn} ${styles.back}`}
        onClick={() => {
          resetVacancyDetail();
          setPageApp(APP_PAGE.main);
        }}
      >
        <ChevronSVG className={styles.icon} />К результатам поиска
      </button>
      <VacancyDetail />
      <SimilarVacancy />
    </div>
  );
};
