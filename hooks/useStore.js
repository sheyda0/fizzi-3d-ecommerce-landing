import { create } from "zustand";

export const useStore = create((set) => ({
  ready: false,
  isReady: () => set({ ready: true }),
}));
