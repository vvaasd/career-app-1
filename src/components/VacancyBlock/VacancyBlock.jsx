import VacancyCard from "../VacancyCard/VacancyCard";
import classes from "./VacancyBlock.module.css";
import data from "../../data/data";

export default function VacancyBlock() {

  return (
    <div className={classes["vacancy-block"]}>
      <div className={classes["vacancy-block__data"]}>
        <h1>Сегодня, 2 января</h1>
      </div>
      <ul className={classes["vacancy-block__cards"]}>
        {data.map((vacancy) => (
          <VacancyCard
            key={vacancy.id}
            id={vacancy.id}
            title={vacancy.title}
            salary={vacancy.salary}
            company={vacancy.company}
            location={vacancy.location}
            experienceWork={vacancy.experienceWork}
          />
        ))}
      </ul>
    </div>
  );
}

