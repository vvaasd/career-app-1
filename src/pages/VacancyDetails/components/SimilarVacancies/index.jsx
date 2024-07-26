import { useEffect, useLayoutEffect, useState } from "react";
import VacancyList from "@components/UI/VacancyList";
import useVacancyDetails from "@store/useVacancyDetails";
import useCurPage from "@store/useCurPage";
import clsx from "@utils/clsx";
import styles from "./SimilarVacancies.module.css";

const SimilarVacancies = () => {
  const { params } = useCurPage();
  const [similarCount, setSimilarCount] = useState(6);
  const {
    similarVacanciesFound,
    similarVacanciesLoading,
    similarVacancies,
    fetchSimilarVacancies,
  } = useVacancyDetails();

  useLayoutEffect(() => {
    setSimilarCount(6);
  }, [params.id]);

  useEffect(() => {
    fetchSimilarVacancies(params.id, similarCount);
  }, [params.id, similarCount]);

  return (
    <section className={styles.similar}>
      <h2 className={clsx("title", styles.similarTitle)}>Похожие вакансии</h2>
      <VacancyList
        data={similarVacancies}
        perPage={6}
        isLoading={similarVacanciesLoading}
        type="infinity-list"
        groupByDate={false}
        onShowMore={() => setSimilarCount((prev) => prev + 6)}
        isShowMoreBtnVisible={similarCount < similarVacanciesFound}
      />
    </section>
  );
};

export default SimilarVacancies;
