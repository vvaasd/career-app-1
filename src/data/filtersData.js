export const filtersData = [
  /* Тип занятости */
  {
    title: 'Тип занятости',
    name: 'employment',
    iconName: 'briefcase',
    buttonsLists: [
      [
        {
          type: 'checkbox',
          name: 'full',
          title: 'Полная занятость',
        },
        {
          type: 'checkbox',
          name: 'part',
          title: 'Частичная занятость',
        },
        {
          type: 'checkbox',
          name: 'probation',
          title: 'Стажировка',
        },
        {
          type: 'checkbox',
          name: 'project',
          title: 'Проектная работа',
        },
      ],
    ],
  },

  /* Дата публикации вакансии */
  {
    title: 'Дата публикации вакансии',
    name: 'period',
    iconName: 'calendar',
    buttonsLists: [
      [
        {
          type: 'radio',
          name: 0,
          title: 'За все время',
        },
        {
          type: 'radio',
          name: '30',
          title: 'За месяц',
        },
        {
          type: 'radio',
          name: '7',
          title: 'За неделю',
        },
        {
          type: 'radio',
          name: '3',
          title: 'За последние 3 дня',
        },
        {
          type: 'radio',
          name: '1',
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
          name: 0,
          title: 'Не имеет значения',
        },
        {
          type: 'radio',
          name: 'noExperience',
          title: 'Нет опыта',
        },
        {
          type: 'radio',
          name: 'between1And3',
          title: 'От 1 года до 3 лет',
        },
        {
          type: 'radio',
          name: 'between3And6',
          title: 'От 3 до 6 лет',
        },
        {
          type: 'radio',
          name: 'moreThan6',
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
          name: 'fullDay',
          title: 'Полный день',
        },
        {
          type: 'checkbox',
          name: 'flyInFlyOut',
          title: 'Вахтовый метод',
        },
        {
          type: 'checkbox',
          name: 'shift',
          title: 'Сменный график',
        },
        {
          type: 'checkbox',
          name: 'flexible',
          title: 'Гибкий график',
        },
        {
          type: 'checkbox',
          name: 'remote',
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
    name: 'education',
    iconName: 'graduation',
    buttonsLists: [
      [
        {
          type: 'checkbox',
          name: 'not_required_or_not_specified',
          title: 'Не требуется или не указано',
        },
        {
          type: 'checkbox',
          name: 'special_secondary',
          title: 'Среднее профессиональное',
        },
        {
          type: 'checkbox',
          name: 'higher',
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
          name: 0,
          title: 'Не имеет значения',
        },
        {
          type: 'radio',
          name: '25000',
          title: 'от 25 000 ₽',
        },
        {
          type: 'radio',
          name: '50000',
          title: 'от 50 000 ₽',
        },
        {
          type: 'radio',
          name: '100000',
          title: 'от 100 000 ₽',
        },
        {
          type: 'radio',
          name: '150000',
          title: 'от 150 000 ₽',
        },
      ],
      [
        {
          type: 'checkbox',
          name: 'only_with_salary',
          title: 'Указан доход',
        },
      ],
    ],
  },

  /* Подработка */
  {
    title: 'Подработка',
    name: 'part_time',
    iconName: 'tomeJob',
    buttonsLists: [
      [
        {
          type: 'checkbox',
          name: 'employment_part',
          title: 'Неполный день',
        },
        {
          type: 'checkbox',
          name: 'from_four_to_six_hours_in_a_day',
          title: 'От 4 часов в день',
        },
        {
          type: 'checkbox',
          name: 'start_after_sixteen',
          title: 'По вечерам',
        },
        {
          type: 'checkbox',
          name: 'only_saturday_and_sunday',
          title: 'По выходным',
        },
        {
          type: 'checkbox',
          name: 'employment_project',
          title: 'Разовое задание',
        },
      ],
    ],
  },

  /* Другие параметры */
  {
    title: 'Другие параметры',
    name: 'label',
    iconName: 'moreFilters',
    buttonsLists: [
      [
        {
          type: 'checkbox',
          name: 'accept_handicapped',
          title: 'Доступные людям с инвалидностью',
        },
        {
          type: 'checkbox',
          name: 'show_hidden',
          title: 'Скрытые вакансии',
        },
        {
          type: 'checkbox',
          name: 'accredited_it',
          title: 'От аккредитованных ИТ компаний',
        },
        {
          type: 'checkbox',
          name: 'not_from_agency',
          title: 'Без вакансий от кадровых агенств',
        },
      ],
    ],
  },
];
