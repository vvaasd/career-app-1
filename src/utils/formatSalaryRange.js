const formatSalaryRange = (min = null, max = null) => {
  if ((min || min === 0) && (max || max === 0)) {
    return `${min} - ${max} ₽`;
  } else if (min || min === 0) {
    return `от ${min} ₽`;
  } else if (max || max === 0) {
    return `до ${max} ₽`;
  } else {
    return `Не указана`;
  }
};

export default formatSalaryRange;
