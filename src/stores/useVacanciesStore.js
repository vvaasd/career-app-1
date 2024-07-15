import { create } from 'zustand';

export const useVacanciesStore = create((set) => ({
  vacanciesData: [],
  setVacanciesData: (vacancies) => set(() => ({ vacanciesData: vacancies })),
}));
