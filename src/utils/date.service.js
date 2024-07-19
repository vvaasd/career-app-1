export class DateService {
  static getWeekDay(dateStr) {
    const date = new Date(dateStr);
    const formatter = new Intl.DateTimeFormat('ru', {
      weekday: 'long',
    });

    const result = formatter.format(date);
    return result[0].toUpperCase() + result.slice(1);
  }

  static checkTodayOrYesterDay(date) {
    const checkDate = new Date(date);
    const today = new Date();
    const isTheSameMonth = checkDate.getMonth() === today.getMonth();
    const isTheSameYear = checkDate.getFullYear() === today.getFullYear();

    if (
      checkDate.getDate() === today.getDate() &&
      isTheSameMonth &&
      isTheSameYear
    ) {
      return 'Сегодня';
    }

    if (
      checkDate.getDate() + 1 === today.getDate() &&
      isTheSameMonth &&
      isTheSameYear
    ) {
      return 'Вчера';
    }

    if (
      checkDate.getDate() + 2 === today.getDate() &&
      isTheSameMonth &&
      isTheSameYear
    ) {
      return 'Позавчера';
    }

    return DateService.getWeekDay(date);
  }

  static formatDate(dateStr) {
    const date = new Date(dateStr);
    const formatter = new Intl.DateTimeFormat('ru', {
      month: 'long',
      day: 'numeric',
    });

    const year =
      date.getFullYear() === new Date().getFullYear() ? '' : date.getFullYear();

    return (
      `${DateService.checkTodayOrYesterDay(dateStr)}, ${formatter.format(
        date
      )} ` + year
    );
  }
}
