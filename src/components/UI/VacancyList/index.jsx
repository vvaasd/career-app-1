import { useEffect } from 'react';
import { ApiService } from '@services';
import { useVacanciesStore } from '@stores/useVacanciesStore';
import { mapVacanciesData, formatVacanciesBlockDate } from '@utils';
import VacancyBlock from './VacancyBlock';
import styles from './VacancyList.module.css';

const VacancyList = () => {
  const setVacanciesData = useVacanciesStore((state) => state.setVacanciesData);
  const vacanciesData = useVacanciesStore((state) => state.vacanciesData);
  const vacancyBlocksData = mapVacanciesData(vacanciesData);

  async function fetchAndSetVacanciesData(cityName) {
    try {
      const data = await ApiService.getVacanciesData(cityName);
      setVacanciesData(data.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAndSetVacanciesData('Москва');
  }, []);

  const skeletonBlock = (
    <section className={styles.vacanciesSection}>
      <VacancyBlock />
    </section>
  );

  const vacancyBlocks = vacancyBlocksData.map((blockData) => {
    const blockDate = blockData[0].publishedAt.split('T')[0];
    return (
      <section key={blockDate} className={styles.vacanciesSection}>
        <VacancyBlock
          data={blockData}
          date={formatVacanciesBlockDate(new Date(blockDate))}
        />
      </section>
    );
  });

  return <>{vacancyBlocks.length !== 0 ? vacancyBlocks : skeletonBlock}</>;
};

export default VacancyList;
