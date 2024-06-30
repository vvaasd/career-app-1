import { formatExperienceRange, formatSalaryRange } from '@/utils';
import VacancyCard from '@/components/VacancyCard/VacancyCard';
import styles from './VacancyBlock.module.css';

const VacancyBlock = ({ dateText, vacancies }) => {
  return (
    <section className={styles['wrapper']}>
      <h2 className={styles['date']}>{dateText}</h2>
      <ul className={styles['list']}>
        {vacancies.map((vacancy, index) => {
          const salaryStr = formatSalaryRange(
            vacancy.salaryRange.min,
            vacancy.salaryRange.max,
          );
          const experienceStr = formatExperienceRange(
            vacancy.experienceRange.min,
            vacancy.experienceRange.max,
          );

          return (
            <VacancyCard
              key={index} // тут нужно будет менять
              position={vacancy.positionName}
              salary={salaryStr}
              companyName={vacancy.companyName}
              cityName={vacancy.cityName}
              experience={experienceStr}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default VacancyBlock;
