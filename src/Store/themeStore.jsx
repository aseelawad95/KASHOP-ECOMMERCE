
import { create } from 'zustand';


export const useThemeStore = create((set) => ({
    mode: 'light',
    toggleTheme: () => set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
}));
  

