import useCurPage from "@store/useCurPage";
import VacanciesSearch from "@pages/VacanciesSearch";
import VacancyDetails from "@pages/VacancyDetails";
import { pages } from "@constants/constPages";

const App = () => {
  const { page } = useCurPage();

  return page === pages.vacanciesSearch ? (
    <VacanciesSearch />
  ) : page === pages.vacancyDetails ? (
    <VacancyDetails />
  ) : (
    "Страница не найдена"
  );
};

export default App;
