import Button from "@components/UI/Button";
import ChevronRight from "@components/UI/icons/ChevronRight";
import useCurPage from "@store/useCurPage";
import { pages } from "@constants/constPages";
import styles from "./ReturnBtn.module.css";

const ReturnBtn = () => {
  const { navigate } = useCurPage();

  return (
    <Button
      className={styles.returnBtn}
      type="text"
      onClick={() => navigate(pages.vacanciesSearch)}
    >
      <ChevronRight />К результатам поиска
    </Button>
  );
};

export default ReturnBtn;
