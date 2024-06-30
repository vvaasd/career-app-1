import { VacancyBlock } from '@/components';
import mockVacancyBlockData from './mockVacancyBlockData';
import styles from './VacancyList.module.css';

const VacancyList = () => {
  return (
    <VacancyBlock
      dateText='Сегодня, 5 февраля'
      vacancies={mockVacancyBlockData}
    />
  );
};

export default VacancyList;
