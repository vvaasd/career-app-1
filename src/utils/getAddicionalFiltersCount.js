export const getAddicionalFiltersCount = (filters) => {
  let count = 0;
  Object.entries(filters).forEach(([filterKey, filterValue]) => {
    if (filterKey !== 'employment' && filterKey !== 'area') {
      if (typeof filterValue === 'object') {
        count += filterValue.length;
      } else if (filterValue) {
        count++;
      }
    }
  });
  return count;
};
