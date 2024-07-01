import { clsx } from '@/utils';
import { Icon } from '@/components';
import { ICON_NAMES } from '@/constants';
import styles from './VacancyCard.module.css';

const VacancyCard = ({
  position,
  salary,
  companyName,
  cityName,
  experience,
}) => {
  return (
    <li className={styles['wrapper']}>
      <div>
        <h2 className={styles['title']}>{position}</h2>
        <div className={clsx(styles['title'], styles['subtitle'])}>
          {salary}
        </div>
      </div>
      <div className={styles['about-company']}>
        <p className={styles['text']}>{companyName}</p>
        <p className={styles['text']}> {cityName}</p>
      </div>
      <div className={styles['experience']}>
        <Icon
          name={ICON_NAMES.experience}
          className={styles['experience-img']}
        />
        <p className={styles['text']}>{experience}</p>
        <button type='button' className={styles['btn']}>
          <Icon name={ICON_NAMES.hide} className={styles['hide-img']} />
        </button>
      </div>
    </li>
  );
};

export default VacancyCard;
