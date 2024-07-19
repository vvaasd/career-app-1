import { MAX_VACANCIES_PER_PAGE } from '../../constans/constants';
import { PaginationBlock } from '../ui/pagination-block/PaginationBlock';
import styles from './styles.module.css';

export function VacancyListSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.date}></div>
      <ul className={styles.list}>
        {[...Array(MAX_VACANCIES_PER_PAGE)].map((_, index) => {
          return (
            <li key={index} className={styles.card}>
              <div className={styles.title}></div>
              <div className={styles.salary}></div>
              <div className={styles.desc}></div>
              <div className={styles.desc2}></div>
              <div className={styles.footer}>
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
