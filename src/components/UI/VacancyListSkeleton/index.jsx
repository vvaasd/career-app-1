import clsx from '@utils/clsx';
import styles from './VacancyListSkeleton.module.css';

const VacancyListSkeleton = ({ cardsCount = 18, withTitle = true }) => {
  return (
    <section className={styles.vacanciesSection}>
      {withTitle && <h1 className={clsx('title', styles.skeleton, styles.title)} />}
      <ul className={clsx('list', styles.list)}>
        {Array.from({ length: cardsCount }).map((_, index) => (
          <li key={index} className={styles.item}>
            <article className={clsx("card", styles.card)}>
              <div className={styles.container}>
                <h3 className={clsx('title', styles.skeleton, styles.name)} />
                <p className={clsx('descr', styles.skeleton, styles.salary)} />
                <span className={clsx(styles.skeleton, styles.company)} />
                <span className={clsx(styles.skeleton, styles.city)} />
                <span className={styles.experience}>
                  <span className={clsx(styles.skeleton, styles.icon)} />
                  <span className={clsx(styles.skeleton, styles.value)} />
                </span>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VacancyListSkeleton;
