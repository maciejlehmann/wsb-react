import { defineStore } from "pinia";

export const useFontStore = defineStore("fontStore", {
  state: () => ({
    fontSize: 28,
  }),
  actions: {
    increaseFont() {
      this.fontSize = this.fontSize < 40 ? this.fontSize + 4 : 40;
    },
    decreaseFont() {
      this.fontSize = this.fontSize > 16 ? this.fontSize - 4 : 16;
    },
  },
});
