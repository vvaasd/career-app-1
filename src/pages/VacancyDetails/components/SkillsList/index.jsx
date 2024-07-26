import clsx from "@utils/clsx";
import styles from "./SkillsList.module.css";

const SkillsList = ({ skills }) => {
  return (
    skills?.length > 0 && (
      <>
        <h2 className={clsx("title", styles.skillsTitle)}>Ключевые навыки</h2>
        <ul className={clsx("list", styles.skillsList)}>
          {skills.map((skill) => (
            <li key={skill.name} className={styles.skillsItem}>
              {skill.name}
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default SkillsList;
