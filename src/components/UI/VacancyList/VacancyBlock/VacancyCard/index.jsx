import Experience from "@components/UI/icons/Experience";
import EyeSlashSolid from "@components/UI/icons/EyeSlashSolid";
import useCurPage from "@store/useCurPage";
import { pages } from "@constants/constPages";
import formatSalary from "@utils/formatSalary";
import clsx from "@utils/clsx";
import styles from "./VacancyCard.module.css";
import useVacanciesData from "@store/useVacanciesData";

const VacancyCard = ({ id, name, salary, company, city, experience }) => {
  const { navigate } = useCurPage();
  const { hiddenIds, toggleVacancy } = useVacanciesData();
  const formattedSalary = formatSalary(salary);

  const isHidden = !!hiddenIds.find((item) => item === id);

  if (isHidden) return null;

  return (
    <li className={styles.item}>
      <article
        className={clsx("card", styles.card)}
        tabIndex={0}
        onClick={() => navigate(pages.vacancyDetails, { id })}
      >
        <div className={styles.container}>
          <button
            className={clsx("btn", styles.hideBtn)}
            onClick={(e) => {
              e.stopPropagation();
              toggleVacancy(id);
            }}
          >
            <EyeSlashSolid />
          </button>
          <h3 className={clsx("title", styles.name)}>{name}</h3>
          <p className={clsx("descr", styles.salary)}>{formattedSalary}</p>
          <span className={styles.company}>{company}</span>
          <span className={styles.city}>{city}</span>
          <span className={styles.experience}>
            <Experience width="12" height="12" />
            {experience}
          </span>
        </div>
      </article>
    </li>
  );
};

export default VacancyCard;
