const formatParams = (params = [], paramName) => {
  if (!params?.length) {
    return '';
  }

  return params
    .map((param) => {
      if (+param === 0) {
        return '';
      }
      if (paramName === 'area') {
        return `&${paramName}=${param.id}`;
      }
      return `&${paramName}=${param}`;
    })
    .join('');
};

const getQueryParams = (filters) => {
  if (!filters) {
    return '';
  }
  const queryParams =
    formatParams(filters?.area, 'area') +
    formatParams(filters?.employment, 'employment') +
    formatParams(filters?.schedule, 'schedule') +
    formatParams(filters?.education, 'education') +
    formatParams(filters?.part_time, 'part_time') +
    formatParams(filters?.label, 'label') +
    formatParams([filters?.experience], 'experience') + // [] - если значение это строка (не массив)
    formatParams([filters?.only_with_salary], 'only_with_salary') +
    formatParams([filters?.period], 'period') +
    formatParams([filters?.salary], 'salary');

  let textParams = `&text=frontend`;
  if (filters?.stack?.length) {
    textParams += `+${filters?.stack?.join('+')}`;
  }
  return `${queryParams}${textParams}`;
};

export default getQueryParams;
