import { create } from 'zustand';
import { StringService } from '../utils';

export const useHH = create((set, get) => ({
    vacancyList: [],
    loading: false,
    error: null,
    text: 'frontend',
    city: 'москва',
    
    fetchVacancies: async (isTodayOnly=false) => {
      let API = `https://api.hh.ru/vacancies?text=frontend ${'москва'}&only_with_salary=true&per_page=100&order_by=publication_time`
      if (isTodayOnly) API += `&date_from=${new Date(Date.now())
        .toLocaleDateString({
          timeZone: "Europe/Moscow",
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/\//g, '-')}`;

      set({ loading: true, error: null })
      
      try {
        const res = await fetch(API)
  
        if (!res.ok) throw new Error('Faidel to fetch')

        const data =  await res.json()

        const list = data?.items?.map((el) => {
          const { name, salary, employer, experience, area, created_at } = el
          return ({
            title: name,
            salary: StringService.formatSalary(salary.from, salary.to, salary.currency),
            company: employer.name,
            city: area.name,
            expirience: experience.name,
            created_at
          })
        })  
        set({ vacancyList: list, error: null })
      } catch (error) {
        set({ error: 'Произошла ошибка при загрузке данных.' })
      } finally {
        set({ loading: false })
      }
    }
  }), { name: 'vacancies' })
  
  export const useFilter = create(set => ({
    filter: 'all',
    setFilter: (value) => set({ filter: value })
  }))