import { separateNumberByThousands } from '@utils';
import { CURRENCIES } from '@constants';

export const formatSalary = (min = null, { max = null, currency = 'RUR' }) => {
  const separatedMin = separateNumberByThousands(min);
  const separatedMax = separateNumberByThousands(max);

  const cur = CURRENCIES[currency] || CURRENCIES.RUR;

  if ((min || min === 0) && (max || max === 0)) {
    return `${separatedMin} - ${separatedMax} ${cur}`;
  } else if (min || min === 0) {
    return `от ${separatedMin} ${cur}`;
  } else if (max || max === 0) {
    return `до ${separatedMax} ${cur}`;
  } else {
    return `Не указана`;
  }
};
