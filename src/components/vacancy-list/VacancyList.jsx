import { VacancyBlock } from '../vacancy-block/VacancyBlock';
import styles from './styles.module.css';

import { useHH } from '../../store'
import { DateService } from '../../utils';


export function VacancyList() {

  const { error, vacancyList } = useHH(state => ({
    error: state.error,
    vacancyList: state.vacancyList
  }))

  if (error) {
    return (
      <div className={styles.error}>{error}</div>
    )
  }

  const dates = Array.from(new Set(
    vacancyList.map(el => {
      return DateService.formatDate(el?.created_at)
    })))

  return (
    <div>
      {dates.map(date => {
        return (<VacancyBlock
          key={date}
          list={vacancyList.filter(vacancy => DateService.formatDate(vacancy?.created_at) === date)}
          date={date}
        />)
      })}
    </div>
  );
}
