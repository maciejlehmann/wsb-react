<template>
  <div class="dashboard-nav-menu">
    <div class="controls__wrapper">
      <div @click="fontStore.increaseFont">
        <Icon icon="mdi:plus-thick" width="32" height="32" />
      </div>
      <div @click="fontStore.decreaseFont">
        <Icon icon="mdi:minus-thick" width="32" height="32" />
      </div>
      <div @click="toggleThemeAction">
        <Icon icon="mdi:theme-light-dark" width="32" height="32" />
      </div>
    </div>
    <NavElement nav-element-label="1" />
    <NavElement nav-element-label="2" />
    <NavSection nav-section-label="1" />
    <NavElement nav-element-label="3" />
    <NavElement nav-element-label="4" />
    <NavElement nav-element-label="5" />
    <NavSection nav-section-label="2" />
    <NavElement nav-element-label="6" />
    <NavElement nav-element-label="7" />
    <NavElement nav-element-label="8" />
    <NavElement nav-element-label="9" />
    <NavSection nav-section-label="3" />
    <NavElement nav-element-label="10" />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useFontStore } from "../stores/fontStore";
import NavElement from "./Menu/NavElement.vue";
import NavSection from "./Menu/NavSection.vue";

const fontStore = useFontStore();

const toggleThemeAction = () => {
  const container = document.getElementById("dashboard-container");
  container.classList.toggle("dark");
};
</script>

<style scoped>
.dashboard-nav-menu {
  margin: 0;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  background: #fff;
}

.dashboard-container.dark .dashboard-nav-menu {
  background: #2e2e2e;
}

.controls__wrapper {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.controls__wrapper div {
  margin: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
}

.controls__wrapper div:hover {
  color: #10b981;
  background: #10b9812a;
  cursor: pointer;
}
</style>
