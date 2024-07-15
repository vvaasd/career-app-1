export class ApiService {
  static async getVacanciesData(cityName) {
    const orderBy = 'publication_time';
    try {
      const encodedCityName = encodeURIComponent(cityName);
      const response = await fetch(
        `https://api.hh.ru/vacancies?text=frontend${encodedCityName}&only_with_salary=true&per_page=100&order_by=${orderBy}`
      );
      if (!response.ok) {
        throw new Error(
          `Ошибка получения данных от api.hh.ru. HTTP:${!response.status}`
        );
      }

      return await response.json();
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
}
