export const separateStringNumberByThousands = str => {
  if (!str) {
    return '';
  }
  return str.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
};
