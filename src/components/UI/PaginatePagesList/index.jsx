import useVacanciesData from "@store/useVacanciesData";
import PaginatePageItem from "./PaginatePageItem";
import { usePaginateMask } from "@hooks";
import styles from "./PaginatePagesList.module.css";

const PaginatePagesList = () => {
  const { totalPages, curPage, fetch: fetchVacancy } = useVacanciesData();

  const paginameMask = usePaginateMask(totalPages, curPage);

  const onClick = (page) => {
    fetchVacancy("", page - 1);
  };

  return (
    <>
      {totalPages > 1 && (
        <div className={styles.wrapper}>
          {paginameMask.map((item, i) => (
            <PaginatePageItem key={i} item={item} onClick={onClick} />
          ))}
        </div>
      )}
    </>
  );
};

export default PaginatePagesList;
