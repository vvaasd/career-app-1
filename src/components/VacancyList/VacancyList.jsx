import VacancyBlock from "../VacancyBlock/VacancyBlock";
import classes from "./VacancyList.module.css";

export default function VacancyList() {
    return (
        <div className={`${classes["vacancy-list"]} container`}>
            <VacancyBlock />
        </div>
    )
}