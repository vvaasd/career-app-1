const filtersData = [
  /* Тип занятости */
  {
    title: 'Тип занятости',
    name: 'employmentType',
    iconName: 'briefcase',
    buttonsLists: [
      [
        {
          type: 'checkbox',
          name: 'fullEmployment',
          title: 'Полная занятость',
        },
        {
          type: 'checkbox',
          name: 'partialEmployment',
          title: 'Частичная занятость',
        },
        {
          type: 'checkbox',
          name: 'Internship',
          title: 'Стажировка',
        },
        {
          type: 'checkbox',
          name: 'projectWork',
          title: 'Проектная работа',
        },
      ],
    ],
  },

  /* Дата публикации вакансии */
  {
    title: 'Дата публикации вакансии',
    name: 'date',
    iconName: 'calendar',
    buttonsLists: [
      [
        {
          type: 'radio',
          name: 'all_time',
          title: 'За все время',
        },
        {
          type: 'radio',
          name: 'month',
          title: 'За месяц',
        },
        {
          type: 'radio',
          name: 'week',
          title: 'За неделю',
        },
        {
          type: 'radio',
          name: '3_days',
          title: 'За последние 3 дня',
        },
        {
          type: 'radio',
          name: '1_day',
          title: 'За сутки',
        },
      ],
    ],
  },
  /* Опыт работы */
  {
    title: 'Опыт работы',
    name: 'experience',
    iconName: 'experience',
    buttonsLists: [
      [
        {
          type: 'radio',
          name: 'experience_no_sense',
          title: 'Не имеет значения',
        },
        {
          type: 'radio',
          name: 'no_experience',
          title: 'Нет опыта',
        },
        {
          type: 'radio',
          name: '1-3_years',
          title: 'От 1 года до 3 лет',
        },
        {
          type: 'radio',
          name: '3-6_years',
          title: 'От 3 до 6 лет',
        },
        {
          type: 'radio',
          name: '6_more_years',
          title: 'Более 6 лет',
        },
      ],
    ],
  },

  /* График работы */
  {
    title: 'График работы',
    name: 'schedule',
    iconName: 'time',
    buttonsLists: [
      [
        {
          type: 'checkbox',
          name: 'full_day',
          title: 'Полный день',
        },
        {
          type: 'checkbox',
          name: 'shift_method',
          title: 'Вахтовый метод',
        },
        {
          type: 'checkbox',
          name: 'shift_schedule',
          title: 'Сменный график',
        },
        {
          type: 'checkbox',
          name: 'flex',
          title: 'Гибкий график',
        },
        {
          type: 'checkbox',
          name: 'distant',
          title: 'Удаленная работа',
        },
      ],
    ],
  },

  /* Теги технологий */
  {
    title: 'Теги технологий',
    name: 'stack',
    iconName: 'stack',
    buttonsLists: [
      [
        {
          type: 'checkbox',
          name: 'jqueury',
          title: 'jQueury',
        },
        {
          type: 'checkbox',
          name: 'javascript',
          title: 'JavaScript',
        },
        {
          type: 'checkbox',
          name: 'css3',
          title: 'CSS3',
        },
        {
          type: 'checkbox',
          name: 'react',
          title: 'React',
        },
        {
          type: 'checkbox',
          name: 'git',
          title: 'Git',
        },
        {
          type: 'checkbox',
          name: 'vue',
          title: 'Vue',
        },
        {
          type: 'checkbox',
          name: 'flexbox',
          title: 'Flexbox',
        },
        {
          type: 'checkbox',
          name: 'html5',
          title: 'HTML5',
        },
      ],
    ],
  },

  /* Образование */
  {
    title: 'Образование',
    name: 'graduation',
    iconName: 'graduation',
    buttonsLists: [
      [
        {
          type: 'checkbox',
          name: 'not_stated',
          title: 'Не требуется или не указано',
        },
        {
          type: 'checkbox',
          name: 'college',
          title: 'Среднее профессиональное',
        },
        {
          type: 'checkbox',
          name: 'university',
          title: 'Высшее',
        },
      ],
    ],
  },

  /* Уровень дохода */
  {
    title: 'Уровень дохода',
    name: 'salary',
    iconName: 'salary',
    buttonsLists: [
      [
        {
          type: 'radio',
          name: 'money_no_sense',
          title: 'Не имеет значения',
        },
        {
          type: 'radio',
          name: '25k',
          title: 'от 25 000 ₽',
        },
        {
          type: 'radio',
          name: '50k',
          title: 'от 50 000 ₽',
        },
        {
          type: 'radio',
          name: '100k',
          title: 'от 100 000 ₽',
        },
        {
          type: 'radio',
          name: '150k',
          title: 'от 150 000 ₽',
        },
      ],
      [
        {
          type: 'checkbox',
          name: 'salary_indicated',
          title: 'Указан доход',
        },
      ],
    ],
  },

  /* Подработка */
  {
    title: 'Подработка',
    name: 'tome_job',
    iconName: 'tomeJob',
    buttonsLists: [
      [
        {
          type: 'checkbox',
          name: 'not_full',
          title: 'Неполный день',
        },
        {
          type: 'checkbox',
          name: '4_hours_more_tome',
          title: 'От 4 часов в день',
        },
        {
          type: 'checkbox',
          name: 'evening_job',
          title: 'По вечерам',
        },
        {
          type: 'checkbox',
          name: 'weekend_job',
          title: 'По выходным',
        },
        {
          type: 'checkbox',
          name: 'one_task',
          title: 'Разовое задание',
        },
      ],
    ],
  },

  /* Другие параметры */
  {
    title: 'Другие параметры',
    name: 'more_filters',
    iconName: 'moreFilters',
    buttonsLists: [
      [
        {
          type: 'checkbox',
          name: 'for_disabled_people',
          title: 'Доступные людям с инвалидностью',
        },
        {
          type: 'checkbox',
          name: 'hidden_vacancies',
          title: 'Скрытые вакансии',
        },
        {
          type: 'checkbox',
          name: '4_hours_more',
          title: 'От 4х часов в день',
        },
        {
          type: 'checkbox',
          name: 'accredited_companies',
          title: 'От аккредитованных ИТ компаний',
        },
        {
          type: 'checkbox',
          name: 'no_recruitment_agencies',
          title: 'Без вакансий от кадровых агенств',
        },
      ],
    ],
  },
];

export default filtersData;
