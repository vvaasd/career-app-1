import Icon from '@components/UI/Icon';
import useCurPage from '@store/useCurPage';
import { pages } from '@constants/constPages';
import formatSalary from '@utils/formatSalary';
import clsx from '@utils/clsx';
import styles from './VacancyCard.module.css';
import useVacanciesData from '@store/useVacanciesData';

const VacancyCard = ({
  id,
  name,
  salary,
  company,
  city,
  experience,
  isInHiddenPool,
}) => {
  const { navigate } = useCurPage();
  const { toggleVacancy } = useVacanciesData();

  const formattedSalary = formatSalary(salary);

  return (
    <li className={styles.item}>
      <article
        className={clsx('card', styles.card)}
        tabIndex={0}
        onClick={() => navigate(pages.vacancyDetails, { id })}
      >
        <div className={styles.container}>
          <button
            className={clsx('btn', styles.hideBtn)}
            onClick={(e) => {
              e.stopPropagation();
              toggleVacancy(id);
            }}
          >
            {isInHiddenPool ? (
              <Icon name="show" className={styles.hideImg} />
            ) : (
              <Icon name="hide" className={styles.hideImg} />
            )}
          </button>
          <h3 className={clsx('title', styles.name)}>{name}</h3>
          <p className={clsx('descr', styles.salary)}>{formattedSalary}</p>
          <span className={styles.company}>{company}</span>
          <span className={styles.city}>{city}</span>
          <span className={styles.experience}>
            <Icon name="experience" />
            {experience}
          </span>
        </div>
      </article>
    </li>
  );
};

export default VacancyCard;
