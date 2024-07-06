import classes from './Main.module.css'
import Filter from '../Filterlist/Filter'
import VacancyList from '../VacancyList/VacancyList'

export default function Main() {
    return (
        <main className={classes.main}>
            <Filter />
            <VacancyList />
        </main>
    )   
}