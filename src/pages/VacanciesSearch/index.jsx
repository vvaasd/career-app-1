import Footer from "@components/Footer";
import Header from "@components/Header";
import Main from "@components/Main";
import FilterList from "@components/UI/FilterList";
import VacancyList from "@components/UI/VacancyList";
import { dataFilter } from "@constants/constFilter";
import useVacanciesData from "@store/useVacanciesData";
import { useEffect } from "react";

const VacanciesSearch = () => {
  const vacancies = useVacanciesData();

  useEffect(() => {
    vacancies.fetch();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <FilterList items={dataFilter} />
        <VacancyList data={vacancies.data} isLoading={vacancies.loading} />
      </Main>
      <Footer />
    </div>
  );
};

export default VacanciesSearch;
