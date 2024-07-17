import { VacancyItem } from '../vacancy-item/VacancyItem';
import styles from './styles.module.css';

export function VacancyBlock({ list, date }) {
  return (
    <div className={styles.container}>
      <time className={styles.time} dateTime={date}>
        {date}
      </time>
      <ul className={styles.list}>
        {list.length > 0 &&
          list.map((item, index) => {
            return (
              <li key={index} className={styles.item}>
                <VacancyItem {...item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
