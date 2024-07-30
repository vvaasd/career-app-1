import formatDate from '@utils/formatDate';
import getQueryParams from '@utils/getQueryParams';
import { constVacanciesPerPage } from '@constants/constVacanciesPerPage';
import { create } from 'zustand';

const useVacanciesData = create((set, get) => ({
  data: [],
  loading: false,
  error: null,
  totalPages: 0,
  curPage: 0,
  hiddenIds: [],
  resetCurPage: () => {
    set({ curPage: 0 });
  },
  toggleVacancy: (id) => {
    const idsList = get().hiddenIds;
    const foundedId = idsList.find((item) => item === id);
    set({
      hiddenIds: foundedId
        ? idsList.filter((item) => item !== id)
        : [...idsList, id],
    });
  },
  fetchVacancy: (page = get().curPage, filters) => {
    set({ loading: true, error: null });
    const pagesCount = get().totalPages;
    if (!pagesCount) {
      page = 0;
    } else if (page >= pagesCount) {
      page = pagesCount - 1;
    }

    const params = getQueryParams(filters);
    const API = `https://api.hh.ru/vacancies?&per_page=${constVacanciesPerPage}&page=${page}&order_by=publication_time${params}`;

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        return set({
          totalPages: data.pages,
          curPage: page,
          data: data.items
            .map((vacancy) => {
              const formattedDate = formatDate(vacancy.published_at);
              return {
                id: vacancy.id,
                date:
                  formatDate(vacancy.published_at) === formatDate(Date.now())
                    ? 'Сегодня,' + formattedDate.split(',')[1]
                    : formattedDate,
                name: vacancy.name,
                salary: vacancy.salary,
                company: vacancy.employer.name,
                city: vacancy.area.name,
                experience: vacancy.experience.name,
              };
            })
            .reduce((prev, cur) => {
              if (!prev.find((item) => item?.date === cur.date)) {
                return [...prev, { date: cur.date, vacancies: [cur] }];
              } else {
                prev[prev.length - 1].vacancies.push(cur);
                return prev;
              }
            }, []),
        });
      })
      .catch((err) => set({ error: err.message }))
      .finally(() => set({ loading: false }));
  },
}));

export default useVacanciesData;
