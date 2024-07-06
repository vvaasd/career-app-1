import classes from "./FilterItem.module.css";
import location from "../../images/location.svg";
import filter from "../../images/filter.svg";
import briefcase from "../../images/briefcase.svg";
import chevron from "../../images/chevron.svg";

export default function FilterItem({ item }) {
  return (
    <>
      <button className={classes["filter-item"]}>
        <div className={classes["filter-item__wrapper"]}>
          <img src={location} alt="location" />
          <span>Город</span>
        </div>
      </button>
      <button className={classes["filter-item"]}>
        <div className={classes["filter-item__wrapper"]}>
          <img src={briefcase} alt="briefcase" />
          <span>Тип занятости</span>
        </div>
        <img src={chevron} alt="chevron" />
      </button>
      <button className={classes["filter-item"]}>
        <div className={classes["filter-item__wrapper"]}>
          <img src={filter} alt="filter" />
          <span>Дополнительные фильтры</span>
        </div>
        <img src={chevron} alt="chevron" />
      </button>
    </>
  );
}
