import { create } from "zustand";

const useBear = create((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state) => ({ bears: state.bears + 1 })),
}));

export default useBear;