import clsx from '@utils/clsx';
import FilterItem from './FilterItem';
import styles from './FilterList.module.css';
import Location from '../icons/Location';
import BriefCase from '../icons/BriefCase';
import FilterSolid from '../icons/FilterSolid';

import {
  listEducation,
  listExpirience,
  listPartTime,
  listRestFilters,
  listSalary,
  listTechnologies,
  listTime,
  listTimeLine,
} from '@data/filtersData';
import Experience from '../icons/Experience';
import {
  EducationIcon,
  LabelIcon,
  PartTimeIcon,
  StackIcon,
  TimeIcon,
  CalendarIcon,
  SalaryIcon,
} from '../icons';
import { Accordeon } from '../Accordeon';
import { Checkbox } from '../Checkbox';
import { useState } from 'react';

const FilterList = () => {
  const [city, setCity] = useState('')
  const filters = [
    {
      title: 'Дата публикации вакансии',
      icon: <CalendarIcon />,
      list: listTime,
      type: 'radio',
      name: 'datePublic'
    },
    {
      title: 'Опыт работы',
      icon: <Experience width='16' height='16' />,
      list: listExpirience,
      type: 'radio',
      name: 'Expirience'
    },
    {
      title: 'График работы',
      icon: <TimeIcon />,
      list: listTimeLine,
      type: 'checkbox',
    },
    {
      title: 'Теги технологий',
      icon: <StackIcon />,
      list: listTechnologies,
      type: 'checkbox',
    },
    {
      title: 'Образование',
      icon: <EducationIcon />,
      list: listEducation,
      type: 'checkbox',
    },
    {
      title: 'Уровень дохода',
      icon: <SalaryIcon />,
      list: listSalary,
      type: 'radio',
      name: 'salary'
    },
    {
      title: 'Подработка',
      icon: <PartTimeIcon />,
      list: listPartTime,
      type: 'checkbox',
    },
    {
      title: 'Другие параметры',
      icon: <LabelIcon />,
      list: listRestFilters,
      type: 'checkbox',
    },
  ];
  return (
    <form
      className={clsx('list', styles.form)}
      onSubmit={(e) => e.preventDefault()}
    >
      <FilterItem
        input
        icon={<Location />}
        title={'Город'}
        value={city}
        cb={setCity}
      />
      <FilterItem title={'Тип занятости'} icon={<BriefCase />} dropdown>
        <div className={styles.dropdownContent}>
          <Checkbox
            id={1}
            value={'Полная занятость'}
            text={'Полная занятость'}
          />
          <Checkbox
            id={2}
            value={'Частичная занятость'}
            text={'Частичная занятость'}
          />
          <Checkbox id={3} value={'Стажировка'} text={'Стажировка'} />
          <Checkbox
            id={4}
            value={'Проектная работа'}
            text={'Проектная работа'}
          />
        </div>
      </FilterItem>
      <FilterItem
        title={'Дополнительные фильтры'}
        icon={<FilterSolid />}
        dropdown
      >
        <Accordeon filters={filters} />
      </FilterItem>
      <button className={styles.reset} type='reset'>
        Сбросить все фильтры
      </button>
    </form>
  );
};

export default FilterList;
