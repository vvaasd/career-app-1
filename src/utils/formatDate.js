const formatDate = (date, format = "short") => {
  switch (format) {
    case "short":
      const formattedDate = new Date(date).toLocaleDateString("ru-RU", { weekday: "long", day: "numeric", month: "long" });
      return formattedDate[0].toUpperCase() + formattedDate.slice(1);

    default:
      return new Date().toLocaleDateString("ru-RU", { day: "2-digit", month: "long", year: "numeric" }).slice(0, -3);
  }
}

export default formatDate;