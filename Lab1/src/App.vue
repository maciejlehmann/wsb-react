<template>
  <div class="dashboard-container">
    <RightMenu />
    <DashboardBody />
  </div>
</template>

<script setup>
import RightMenu from "./components/RightMenu.vue";
import DashboardBody from "./components/DashboardBody.vue";
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
.dashboard-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% calc(80% - 1rem);
  column-gap: 1rem;
}
</style>
