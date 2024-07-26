import formatCurrency from "./formatCurrency";

const formatSalary = (salary, format = "short") => {
  const formattedCurrency = formatCurrency(salary?.currency);
  const formattedFrom = salary?.from?.toLocaleString();
  const formattedTo = salary?.to?.toLocaleString();
  const salaryType = salary?.gross ? "до вычета налогов" : "на руки";

  switch (format) {
    case "short":
      return formattedFrom && !formattedTo
        ? `от ${formattedFrom} ${formattedCurrency}`
        : !formattedFrom && formattedTo
          ? `до ${formattedTo} ${formattedCurrency}`
          : formattedFrom && formattedTo
            ? `${formattedFrom} - ${formattedTo} ${formattedCurrency}`
            : 'Доход не указан';

    case "full":
      return formattedFrom || formattedTo
        ? `${formattedFrom ? `от ${formattedFrom} ` : ""}${formattedTo ? `до ${formattedTo} ` : ""}${formattedCurrency} ${salaryType}`
        : 'Доход не указан';
    default:
      return formattedFrom || formattedTo
        ? `${formattedFrom ? `от ${formattedFrom} ` : ""}${formattedTo ? `до ${formattedTo} ` : ""}${formattedCurrency} ${salaryType}`
        : 'Доход не указан';
  }
}

export default formatSalary;