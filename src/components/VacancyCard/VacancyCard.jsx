import classes from './VacancyCard.module.css';
import Icon from '../Icon/Icon';

export default function VacancyCard({
  id,
  title,
  salary,
  company,
  location,
  experienceWork,
}) {
  return (
    <li className={classes['vacancy-card']}>
      <div className={classes['vacancy-card__hide']}>
        <Icon name="hide" />
      </div>
      <div className={classes['vacancy-card__title']}>
        <h2>{title}</h2>
        <p>{salary}</p>
      </div>
      <div className={classes['vacancy-card__info']}>
        <div className={classes['info__company-location']}>
          <p>{company}</p>
          <p>{location}</p>
        </div>
        <div className={classes['info__experience']}>
          <Icon name="experience" />
          <p>{experienceWork}</p>
        </div>
      </div>
    </li>
  );
}
