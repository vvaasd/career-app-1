import { VacancyBlock } from '@/components';
import mockVacancyBlockData from './mockVacancyBlockData';
import styles from './VacancyList.module.css';

const VacancyList = () => {
  return (
    <ul className={styles['list']}>
      <li className={styles['element']}>
        <VacancyBlock
          dateText='Сегодня, 5 февраля'
          vacancies={mockVacancyBlockData}
        />
      </li>
    </ul>
  );
};

export default VacancyList;
