import FilterItem from "../FilterItem/FilterItem";
import classes from "./Filter.module.css";

export default function Filter() {
    return (
        <div className={`${classes["filter-wrapper"]}`}>
            <FilterItem />
        </div>
    )
}