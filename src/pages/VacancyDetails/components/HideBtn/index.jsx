import Button from "@components/UI/Button";
import EyeSlashSolid from "@components/UI/icons/EyeSlashSolid";
import EyeSolid from "@components/UI/icons/EyeSolid";
import useVacanciesData from "@store/useVacanciesData";
import styles from "./HideBtn.module.css";

const HideBtn = ({ vacancyId }) => {
  const { hiddenIds, toggleVacancy } = useVacanciesData();
  const isHidden = !!hiddenIds.find((item) => item === vacancyId);

  return (
    <Button
      className={styles.hideBtn}
      type="outlined"
      onClick={() => toggleVacancy(vacancyId)}
    >
      {isHidden ? <EyeSolid /> : <EyeSlashSolid />}
      {isHidden ? "Показать" : "Скрыть"}
    </Button>
  );
};

export default HideBtn;
