import { cn } from '../../utils';
import { Icon } from '../icon/Icon';
import styles from './styles.module.css';

export function VacancyItem({ title, salary, company, city, expirience }) {
  return (
    <div className={styles.card}>
      <button className={styles.iconBtn}>
        <Icon icon={'eye'} />
      </button>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.salary}>{salary}</p>
      <p className={styles.desc}>{company}</p>
      <p className={styles.desc}>{city}</p>
      <p className={cn(styles.desc, styles.expirience)}>
        <Icon icon={'star'} /> {expirience}
      </p>
    </div>
  );
}
