import Footer from '@components/Footer';
import Header from '@components/Header';
import Main from '@components/Main';
import FilterList from '@components/UI/FilterList';
import VacancyList from '@components/UI/VacancyList';
import useVacanciesData from '@store/useVacanciesData';
import useFilters from '@store/useFilters';
import { useEffect } from 'react';

const VacanciesSearch = () => {
  const { fetchVacancy, data, loading, curPage } = useVacanciesData(
    (state) => ({
      fetchVacancy: state.fetchVacancy,
      data: state.data,
      loading: state.loading,
      curPage: state.curPage,
    })
  );
  const currentFilters = useFilters((state) => state.currentFilters);

  useEffect(() => {
    fetchVacancy(curPage, currentFilters);
  }, [curPage, currentFilters]);

  return (
    <div className="app">
      <Header />
      <Main>
        <FilterList />
        <VacancyList data={data} isLoading={loading} />
      </Main>
      <Footer />
    </div>
  );
};

export default VacanciesSearch;
