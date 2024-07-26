import { create } from "zustand";

const useVacancyDetails = create((set, get) => ({
  detailsData: null,
  loading: false,
  error: null,
  fetchDetails: (id) => {
    set({ loading: true, error: null });
    fetch(`https://api.hh.ru/vacancies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        set({ detailsData: data });
      })
      .catch((err) => set({ error: err.message }))
      .finally(() => set({ loading: false }));
  },
  similarVacancies: [],
  similarVacanciesLoading: false,
  similarVacanciesError: null,
  similarVacanciesFound: 0,
  fetchSimilarVacancies: (id, per_page = 6) => {
    set({ similarVacanciesLoading: true, similarVacanciesError: null });
    fetch(
      `https://api.hh.ru/vacancies/${id}/related_vacancies?per_page=${per_page}`
    )
      .then((res) => res.json())
      .then((data) => {
        set({
          similarVacanciesFound: data.found,
          similarVacancies: data.items.map((vacancy) => {
            return {
              id: vacancy.id,
              name: vacancy.name,
              salary: vacancy.salary,
              company: vacancy.employer.name,
              city: vacancy.area.name,
              experience: vacancy.experience.name,
            };
          }),
        });
      })
      .catch((err) => set({ similarVacanciesError: err.message }))
      .finally(() => set({ similarVacanciesLoading: false }));
  },
  clearData: () => {
    set({
      detailsData: null,
      loading: false,
      error: null,
      similarVacancies: [],
      similarVacanciesLoading: false,
      similarVacanciesError: null,
      similarVacanciesFound: 0,
    });
  },
}));

export default useVacancyDetails;
