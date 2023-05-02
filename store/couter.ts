import { acceptHMRUpdate } from "pinia";

export const useCounter = defineStore("counter", {
  state: () => ({
    counter: 10,
  }),
  getters: {
    double: (state) => state.counter * 2,
  },
  actions: {
    increment(addNum: string) {
      this.counter++;
    },
  },
});
