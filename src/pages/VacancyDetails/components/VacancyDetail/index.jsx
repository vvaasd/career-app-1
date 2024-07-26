import { useEffect } from "react";
import StickyCompanyBlock from "../StickyCompanyBlock";
import SkillsList from "../SkillsList";
import HideBtn from "../HideBtn";
import useVacancyDetails from "@store/useVacancyDetails";
import formatSalary from "@utils/formatSalary";
import styles from "./VacancyDetail.module.css";
import useCurPage from "@store/useCurPage";
import clsx from "@utils/clsx";
import formatDate from "@utils/formatDate";
import RequirementsList from "../RequirementsList";

const VacancyDetail = () => {
  const { params } = useCurPage();
  const { loading, detailsData, fetchDetails, clearData } = useVacancyDetails();

  useEffect(() => {
    fetchDetails(params.id);
    return () => {
      clearData();
    };
  }, [params.id]);

  if (loading) return "Загрузка...";

  return (
    <section className={styles.details}>
      <div className="card">
        <h1 className={clsx("title", styles.vacancyName)}>
          {detailsData?.name}
        </h1>
        <p className={clsx("descr", styles.salary)}>
          {formatSalary(detailsData?.salary, "full")}
        </p>
        <RequirementsList
          experience={detailsData?.experience.name.toLowerCase()}
          employment={detailsData?.employment.name}
          schedule={detailsData?.schedule.name}
        />
        <HideBtn vacancyId={detailsData?.id} />
        <h2 className={clsx("title", styles.descriptionTitle)}>Описание</h2>
        <div
          className={styles.vacancyData}
          dangerouslySetInnerHTML={{ __html: detailsData?.description }}
        />
        <SkillsList skills={detailsData?.key_skills} />
        <p className={clsx("descr", styles.publishDate)}>
          Вакансия опубликована {formatDate(detailsData?.created_at, "full")} в
          г. {detailsData?.area.name}
        </p>
      </div>
      <StickyCompanyBlock
        logo={detailsData?.employer?.logo_urls?.original}
        name={detailsData?.employer.name}
        address={detailsData?.address?.raw || detailsData?.area?.name}
      />
    </section>
  );
};

export default VacancyDetail;
