import Experience from "@components/UI/icons/Experience";
import BriefCase from "@components/UI/icons/BriefCase";
import Time from "@components/UI/icons/Time";
import clsx from "@utils/clsx";
import styles from "./RequirementsList.module.css";

const RequirementsList = ({ experience, employment, schedule }) => {
  return (
    <>
      <h2 className={clsx("title", styles.requirementsTitle)}>
        Требования к вакансии
      </h2>
      <ul className={clsx("list", styles.requirementsList)}>
        <li className={styles.requirementsItem}>
          <Experience />
          Опыт работы {experience}
        </li>
        <li className={styles.requirementsItem}>
          <BriefCase />
          {employment}
        </li>
        <li className={styles.requirementsItem}>
          <Time />
          {schedule}
        </li>
      </ul>
    </>
  );
};

export default RequirementsList;
