import { create } from 'zustand';
import { formatVacancy } from '@utils/formatFetch';
import { formatDate } from '@utils/formatDate';
import { LIMIT_CARD_FOR_MAIN_PAGE } from '@constants';

export const useVacancyStore = create((set, get) => ({
  blackList: [],
  toggleToBlackList: (idBlock) => {
    const idInBlackList = get().blackList
    const foundedId = idInBlackList.find((item) => item === idBlock);
    set({
      blackList: foundedId ? idInBlackList.filter((idItem) => idItem !== idBlock) : [...idInBlackList, idBlock]
    })
  },
  pages: 0,
  page: 1,
  setPage: (newPage) => set({ page: newPage }),
  loading: false,
  vacancies: [],
  fetchVacancies: async (params, page = 0) => {

    try {
      set({ loading: true });
      const response = await fetch(
        // `https://api.hh.ru/vacancies?text=frontend${city}&only_with_salary=true&page=${page}&per_page=${LIMIT_CARD_FOR_MAIN_PAGE}&order_by=publication_time`
        `https://api.hh.ru/vacancies?${params}&page=${page}&per_page=${LIMIT_CARD_FOR_MAIN_PAGE}&order_by=publication_time`
      );
      const data = await response.json();
      const groupedVacancies = {};

      data.items.forEach((item) => {
        const date = formatDate(item.published_at).result;
        if (!groupedVacancies[date]) {
          groupedVacancies[date] = { date: date, vacancies: [] };
        }
        groupedVacancies[date].vacancies.push(formatVacancy(item));
      });

      set({ vacancies: groupedVacancies, pages: data.pages });
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      set({ loading: false });
    }
  },
}));
