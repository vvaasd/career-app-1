import Button from '@components/UI/Button';
import Icon from '@components/UI/Icon';
import useVacanciesData from '@store/useVacanciesData';
import styles from './HideBtn.module.css';

const HideBtn = ({ vacancyId }) => {
  const { hiddenIds, toggleVacancy } = useVacanciesData();
  const isHidden = !!hiddenIds.find((item) => item === vacancyId);

  return (
    <Button
      className={styles.hideBtn}
      type="outlined"
      onClick={() => toggleVacancy(vacancyId)}
    >
      {isHidden ? (
        <Icon name="show" className={styles.img} />
      ) : (
        <Icon name="hide" className={styles.img} />
      )}
      {isHidden ? 'Показать' : 'Скрыть'}
    </Button>
  );
};

export default HideBtn;
