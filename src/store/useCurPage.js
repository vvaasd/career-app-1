import { pages } from "@constants/constPages";
import { create } from "zustand";

const useCurPage = create((set) => ({
  page: pages.vacanciesSearch,
  params: null,
  navigate: (page, params = null) => set({ page, params })
}))

export default useCurPage;