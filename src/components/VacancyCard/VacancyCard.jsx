import { clsx } from '@/utils';
import experienceImg from '@/assets/img/experience.svg';
import hideImg from '@/assets/img/eye-slash.svg';
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
      <div className={styles['title-and-btn']}>
        <div>
          <h2 className={styles['title']}>{position}</h2>
          <div className={clsx(styles['title'], styles['subtitle'])}>
            {salary}
          </div>
        </div>
        <button type='button' className={styles['btn']}>
          <img src={hideImg} alt='Скрыть' />
        </button>
      </div>
      <div className={styles['about-company']}>
        <p className={styles['text']}>{companyName}</p>
        <p className={styles['text']}> {cityName}</p>
      </div>
      <div className={styles['experience']}>
        <img
          src={experienceImg}
          alt='Требование к опыту'
          className={styles['experience-img']}
        />
        <p className={styles['text']}>{experience}</p>
      </div>
    </li>
  );
};

export default VacancyCard;
