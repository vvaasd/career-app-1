import { create } from 'zustand';
import storage from '@utils/storage';
import { deepEqual } from '@utils/deepEqual';
import { deepClone } from '@utils/deepClone';

const INITIAL_FILTERS = {
  area: [],
  employment: [],
  period: 0,
  experience: 0,
  schedule: [],
  stack: [],
  education: [],
  salary: 0,
  only_with_salary: 0,
  part_time: [],
  label: [], // другие параметры
  show_hidden: false, // show_hidden не относится к параметрам запроса к АПИ
};

const useFilters = create((set, get) => ({
  currentFilters: storage.get('filters') || deepClone(INITIAL_FILTERS),
  isFiltersDefault: true,
  checkAndSetIsFiltersDefault: () => {
    set({
      isFiltersDefault: deepEqual(get().currentFilters, INITIAL_FILTERS),
    });
  },
  handleFilterChange: (filterName, filterField) => {
    // исключение
    if (filterName === 'area') {
      const areaFilter = get().currentFilters[filterName];
      if (areaFilter.some((area) => area.id === filterField.id)) {
        const indexToSplice = areaFilter.findIndex(
          (area) => area.id === filterField.id
        );
        areaFilter.splice(indexToSplice, 1);
      } else {
        areaFilter.push(filterField);
      }
      set((state) => ({
        currentFilters: {
          ...state.currentFilters,
          [filterName]: areaFilter,
        },
      }));
      // исключение
    } else if (filterField === 'show_hidden') {
      set((state) => ({
        currentFilters: {
          ...state.currentFilters,
          show_hidden: !get().currentFilters.show_hidden,
        },
      }));
      // исключение
    } else if (filterField === 'only_with_salary') {
      set((state) => ({
        currentFilters: {
          ...state.currentFilters,
          only_with_salary: get().currentFilters.only_with_salary ? 0 : true,
        },
      }));
      // checkbox
    } else if (typeof get().currentFilters[filterName] === 'object') {
      const currentFilter = get().currentFilters[filterName];
      if (currentFilter.includes(filterField)) {
        const indexToSplice = currentFilter.indexOf(filterField);
        currentFilter.splice(indexToSplice, 1);
      } else {
        currentFilter.push(filterField);
      }
      set((state) => ({
        currentFilters: {
          ...state.currentFilters,
          [filterName]: currentFilter,
        },
      }));
    } else {
      // radio
      set((state) => ({
        currentFilters: { ...state.currentFilters, [filterName]: filterField },
      }));
    }

    set({
      isFiltersDefault: deepEqual(get().currentFilters, INITIAL_FILTERS),
    });
    storage.set('filters', get().currentFilters);
  },

  resetFilters: () => {
    set({
      currentFilters: deepClone(INITIAL_FILTERS),
      isFiltersDefault: true,
    });
    storage.set('filters', deepClone(INITIAL_FILTERS));
  },
}));

export default useFilters;
