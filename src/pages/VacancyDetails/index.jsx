import Footer from '@components/Footer';
import Header from '@components/Header';
import Main from '@components/Main';
import VacancyDetail from './components/VacancyDetail';
import ReturnBtn from './components/ReturnBtn';
import SimilarVacancies from './components/SimilarVacancies';

const VacancyDetails = () => {
  return (
    <div className="app">
      <Header />
      <Main>
        <ReturnBtn />
        <VacancyDetail />
        <SimilarVacancies />
      </Main>
      <Footer />
    </div>
  );
};

export default VacancyDetails;
