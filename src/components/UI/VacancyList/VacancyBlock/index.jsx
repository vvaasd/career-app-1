import clsx from '@utils/clsx';
import VacancyCard from './VacancyCard';
import styles from './VacancyBlock.module.css';
import useVacanciesData from '@store/useVacanciesData';
import useFilters from '@store/useFilters';

const VacancyBlock = ({ data }) => {
  const hiddenIds = useVacanciesData((state) => state.hiddenIds);
  const show_hidden = useFilters((state) => state.currentFilters.show_hidden);
  let hiddenCards = 0;
  const vacancyCards = data.map((vacancy) => {
    const isInHiddenPool = !!hiddenIds.find((item) => item === vacancy.id);
    if (isInHiddenPool && !show_hidden) {
      hiddenCards++;
      return null;
    }

    return (
      <VacancyCard
        key={vacancy.id}
        id={vacancy.id}
        name={vacancy.name}
        salary={vacancy.salary}
        company={vacancy.company}
        city={vacancy.city}
        experience={vacancy.experience}
        isInHiddenPool={isInHiddenPool}
      />
    );
  });
  const isAllCardsHidden = hiddenCards === data.length;

  return isAllCardsHidden ? (
    <p>Вы скрыли все вакансии данного блока на этой странице.</p>
  ) : (
    <ul className={clsx('list', styles.list)}>{vacancyCards}</ul>
  );
};

export default VacancyBlock;
