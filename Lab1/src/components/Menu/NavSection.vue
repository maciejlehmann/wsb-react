<template>
  <div class="nav-section" :style="{ fontSize: fontStore.fontSize - 8 + 'px' }">
    Section {{ navSectionLabel }}
  </div>
</template>

<script setup>
import { useFontStore } from "../../stores/fontStore";

const fontStore = useFontStore();

const props = defineProps({
  navSectionLabel: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.nav-section {
  padding: 0.5rem 0.75rem;
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.25rem;
  color: #006699;
}

.dashboard-container.dark .nav-section {
  color: rgb(224, 224, 0);
}
</style>
