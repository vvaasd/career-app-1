import Icon from '@components/UI/Icon';
import clsx from '@utils/clsx';
import styles from './RequirementsList.module.css';

const RequirementsList = ({ experience, employment, schedule }) => {
  return (
    <>
      <h2 className={clsx('title', styles.requirementsTitle)}>
        Требования к вакансии
      </h2>
      <ul className={clsx('list', styles.requirementsList)}>
        <li className={styles.requirementsItem}>
          <Icon name="experience" />
          Опыт работы {experience}
        </li>
        <li className={styles.requirementsItem}>
          <Icon name="briefcase" />
          {employment}
        </li>
        <li className={styles.requirementsItem}>
          <Icon name="time" />
          {schedule}
        </li>
      </ul>
    </>
  );
};

export default RequirementsList;
