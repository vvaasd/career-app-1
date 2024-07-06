import classes from "./VacancyCard.module.css";
import experience from "../../images/experience.svg";
import hide from "../../images/hide.svg";

export default function VacancyCard({
  id,
  title,
  salary,
  company,
  location,
  experienceWork,
}) {
  return (
    <li className={classes["vacancy-card"]}>
      <div className={classes["vacancy-card__hide"]}>
        <img src={hide} alt="hide" />
      </div>
      <div className={classes["vacancy-card__title"]}>
        <h2>{title}</h2>
        <p>{salary}</p>
      </div>
      <div className={classes["vacancy-card__info"]}>
        <div className={classes["info__company-location"]}>
          <p>{company}</p>
          <p>{location}</p>
        </div>
        <div className={classes["info__experience"]}>
          <img src={experience} alt="experience" />
          <p>{experienceWork}</p>
        </div>
      </div>
    </li >
  );
}
