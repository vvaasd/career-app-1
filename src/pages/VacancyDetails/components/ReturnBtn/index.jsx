import Button from '@components/UI/Button';
import Icon from '@components/UI/Icon';
import useCurPage from '@store/useCurPage';
import { pages } from '@constants/constPages';
import styles from './ReturnBtn.module.css';

const ReturnBtn = () => {
  const { navigate } = useCurPage();

  return (
    <Button
      className={styles.returnBtn}
      type="text"
      onClick={() => navigate(pages.vacanciesSearch)}
    >
      <Icon name="arrowToRight" className={styles.img} />К результатам поиска
    </Button>
  );
};

export default ReturnBtn;
