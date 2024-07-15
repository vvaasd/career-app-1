const isToday = (date = new Date()) => {
  const today = new Date();

  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
};

const isYesterday = (date = new Date()) => {
  const targetDate = date;
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  return targetDate.getTime() === yesterday.getTime();
};

const isCurrentYear = (date = new Date()) => {
  const currentYear = new Date().getFullYear();
  return date.getFullYear() === currentYear;
};

const formatter = Intl.DateTimeFormat('ru', {
  day: 'numeric',
  month: 'long',
});

export const formatVacanciesBlockDate = (date = new Date()) => {
  const preffix = `${isToday(date) ? 'Сегодня, ' : ''}${
    isYesterday(date) ? 'Вчера, ' : ''
  }`;

  const postfix = !isCurrentYear(date) ? `, ${date.getFullYear()}` : '';
  return `${preffix}${formatter.format(date)}${postfix}`;
};
