import classes from './Main.module.css';
import Filterlist from '../Filterlist/Filterlist';
import VacancyList from '../VacancyList/VacancyList';

export default function Main() {
  return (
    <main className={classes.main}>
      <Filterlist />
      <VacancyList />
    </main>
  );
}
