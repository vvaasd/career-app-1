import FilterList from "@components/UI/FilterList";
import clsx from "@utils/clsx";
import styles from "./Main.module.css";
import VacancyList from "@components/UI/VacancyList";
import { vacanciesData } from "@data";

const Main = () => {
  return (
    <main>
      <div className={clsx("container", styles.container)}>
        <FilterList />
        <VacancyList data={vacanciesData} />
      </div>
    </main>
  );
}

export default Main;