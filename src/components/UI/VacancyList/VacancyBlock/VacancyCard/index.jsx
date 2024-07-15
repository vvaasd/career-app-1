import clsx from '@utils/clsx';
import styles from './VacancyCard.module.css';
import Experience from '@components/UI/icons/Experience';
import EyeSlashSolid from '@components/UI/icons/EyeSlashSolid';

const VacancyCard = ({ name, salary, company, city, experience }) => {
  return (
    <li className={styles.item}>
      <article className={styles.card}>
        <div className={styles.container}>
          <button
            className={clsx('btn', styles.hideBtn, !name && styles.skeleton)}
          >
            <EyeSlashSolid />
          </button>
          <h3 className={clsx('title', styles.name, !name && styles.skeleton)}>
            {name}
          </h3>
          <p
            className={clsx('descr', styles.salary, !salary && styles.skeleton)}
          >
            {salary}
          </p>
          <span className={clsx(styles.company, !company && styles.skeleton)}>
            {company}
          </span>
          <span className={clsx(styles.city, !city && styles.skeleton)}>
            {city}
          </span>
          <span className={styles.experience}>
            <span
              className={clsx(
                styles.experienceSvg,
                !experience && styles.skeleton
              )}
            >
              {experience && <Experience width="12" height="12" />}
            </span>
            <span
              className={clsx(
                styles.experienceText,
                !experience && styles.skeleton
              )}
            >
              {experience}
            </span>
          </span>
        </div>
      </article>
    </li>
  );
};

export default VacancyCard;
