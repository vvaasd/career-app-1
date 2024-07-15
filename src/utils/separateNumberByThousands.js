export const separateNumberByThousands = (num) => {
  if (!num) {
    return '';
  }
  return num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
};
