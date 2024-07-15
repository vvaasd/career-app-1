import clsx from '@utils/clsx';
import VacancyCard from './VacancyCard';
import styles from './VacancyBlock.module.css';

const VacancyBlock = ({ data, date }) => {
  const SKELETON_CARDS_COUNT = 12;

  const skeletonCards = Array.from(
    { length: SKELETON_CARDS_COUNT },
    (_, index) => <VacancyCard key={`skeletonCard${index}`} />
  );

  const vacancyCards = data?.map((vacancy) => (
    <VacancyCard
      key={vacancy.id}
      name={vacancy.name}
      salary={vacancy.salary}
      company={vacancy.company}
      city={vacancy.city}
      experience={vacancy.experience}
    />
  ));

  const isSkeletonCardsShown = !data || data?.length === 0;

  return (
    <>
      <h4
        className={clsx(
          'title',
          styles.title,
          isSkeletonCardsShown && styles.skeleton
        )}
      >
        {date}
      </h4>
      <ul className={clsx('list', styles.list)}>
        {!isSkeletonCardsShown ? vacancyCards : skeletonCards}
      </ul>
    </>
  );
};

export default VacancyBlock;
