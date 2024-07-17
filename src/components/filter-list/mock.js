import { Icon } from "../icon/Icon";


export const filterList = [
  {
    id: 1,
    title: '',
    icon: '',
    multyple: false,
    name: 'graphicType',
    items: [
      {
        name: 'Полная занятость',
        value: 1
      },
      {
        name: 'Частичная занятость',
        value: 2
      },
      {
        name: 'Стажировка',
        value: 3
      },
      {
        name: 'Проектная работа',
        value: 4
      }
    ]
  },
  // {
  //   id: 2,
  //   title: '',
  //   icon: '',
  //   multyple: true,
  //   name: 'graph2',
  //   items: [
  //     {
  //       name: 'Полная занятость',
  //       value: 1
  //     },
  //     {
  //       name: 'Частичная занятость',
  //       value: 2
  //     },
  //     {
  //       name: 'Стажировка',
  //       value: 3
  //     },
  //     {
  //       name: 'Проектная работа',
  //       value: 4
  //     }
  //   ]
  // }
];

export const sectionList = [
  {
    id: 3,
    title: 'Дата публикации вакансии',
    icon: <Icon icon={'calendar'} />,
    multyple: false,
    name: 'datepublic',
    items: [
      {
        name: 'За все время',
        value: 1
      },
      {
        name: 'За месяц',
        value: 2
      },
      {
        name: 'За неделю',
        value: 3
      },
      {
        name: 'За последние 3 дня',
        value: 4
      },
      {
        name: 'За сутки',
        value: 4
      }
    ]
  },
  {
    id: 4,
    title: 'Опыт работы',
    icon: <Icon icon={'star'} />,
    multyple: false,
    name: 'exp',
    items: [
      {
        name: 'Не имеет значения',
        value: 1
      },
      {
        name: 'Нет опыта',
        value: 2
      },
      {
        name: 'От 1 года до 3 лет',
        value: 3
      },
      {
        name: 'От 3 до 6 лет',
        value: 4
      },
      {
        name: 'Более 6 лет',
        value: 4
      }
    ]
  },
  {
    id: 5,
    title: 'График работы',
    icon: <Icon icon={'clock'} />,
    multyple: true,
    name: 'graphic',
    items: [
      {
        name: 'Полный день',
        value: 1
      },
      {
        name: 'Вахтовый метод',
        value: 2
      },
      {
        name: 'Сменный график',
        value: 3
      },
      {
        name: 'Гибкий график',
        value: 4
      },
      {
        name: 'Удалённая работа',
        value: 4
      }
    ]
  },

  {
    id: 6,
    title: 'Теги технологий',
    icon: <Icon icon={'stack'} />,
    multyple: true,
    name: 'techtags',
    items: [
      {
        name: 'JQuery',
        value: 1
      },
      {
        name: 'JavaScript',
        value: 2
      },
      {
        name: 'CSS3',
        value: 3
      },
      {
        name: 'React',
        value: 4
      },
      {
        name: 'Git',
        value: 4
      },
      {
        name: 'Vue',
        value: 4
      },
      {
        name: 'Flexbox',
        value: 4
      },
      {
        name: 'HTML5',
        value: 4
      }
    ]
  },

  {
    id: 7,
    title: 'Образование',
    icon: <Icon icon={'education'} />,
    multyple: true,
    name: 'education',
    items: [
      {
        name: 'Не требуется или не указано',
        value: 1
      },
      {
        name: 'Среднее профессиональное',
        value: 2
      },
      {
        name: 'Высшее',
        value: 3
      }
    ]
  },

  {
    id: 8,
    title: 'Уровень дохода',
    icon: <Icon icon={'coins'} />,
    multyple: false,
    name: 'salary',
    items: [
      {
        name: 'Не имеет значения',
        value: 1
      },
      {
        name: 'от 25 000 ₽',
        value: 2
      },
      {
        name: 'от 50 000 ₽',
        value: 3
      },
      {
        name: 'от 100 000 ₽',
        value: 4
      },
      {
        name: 'от 150 000 ₽',
        value: 5
      }
    ],
    otherItems: [
      {
        id: 88,
        title: '',
        multyple: true,
        name: 'setsalary',
        items: [
          {
            name: 'Указан доход',
            value: 1
          },
        ]
      }
    ]
  },

  {
    id: 9,
    title: 'Подработка',
    icon: <Icon icon={'bagClock'} />,
    multyple: true,
    name: 'salary',
    items: [
      {
        name: 'Неполный день',
        value: 1
      },
      {
        name: 'от 4 часов в день',
        value: 2
      },
      {
        name: 'По вечерам',
        value: 3
      },
      {
        name: 'По выходным',
        value: 4
      },
      {
        name: 'Разовое задание',
        value: 5
      }
    ]
  },
  {
    id: 10,
    title: 'Другие параметры',
    icon: <Icon icon={'other'} />,
    multyple: true,
    name: 'salary',
    items: [
      {
        name: 'Доступные людям с инфалидностью',
        value: 1
      },
      {
        name: 'Скрытые вакансии',
        value: 2
      },
      {
        name: 'От 4х часов в день',
        value: 3
      },
      {
        name: 'От аккредитованных ИТ компаний',
        value: 4
      },
      {
        name: 'Без вакансий от кадровых агенств',
        value: 5
      }
    ]
  },
];
