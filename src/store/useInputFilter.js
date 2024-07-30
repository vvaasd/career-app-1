import { create } from 'zustand';

const useInputFilter = create((set) => ({
  inputValue: '',
  setInputValue: (value) => set({ inputValue: value }),
}));

export default useInputFilter;
