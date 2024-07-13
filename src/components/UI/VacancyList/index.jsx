import VacancyBlock from "./VacancyBlock";
import styles from "./VacancyList.module.css";

const VacancyList = ({ data }) => {
  return (
    data.map((item) => (
      <section key={item.date} className={styles.vacanciesSection}>
        <VacancyBlock data={item.vacancies} date={item.date}/>
      </section>
    ))
  );
}

export default VacancyList;