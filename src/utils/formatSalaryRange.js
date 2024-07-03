import { separateStringNumberByThousands } from './';

export const formatSalaryRange = (min = null, max = null) => {
  const separatedMin = separateStringNumberByThousands(min);
  const separatedMax = separateStringNumberByThousands(max);

  if ((min || min === 0) && (max || max === 0)) {
    return `${separatedMin} - ${separatedMax} ₽`;
  } else if (min || min === 0) {
    return `от ${separatedMin} ₽`;
  } else if (max || max === 0) {
    return `до ${separatedMax} ₽`;
  } else {
    return `Не указана`;
  }
};
