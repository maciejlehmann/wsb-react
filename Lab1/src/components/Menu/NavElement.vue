<template>
  <div class="nav-element" :style="{ fontSize: fontStore.fontSize - 6 + 'px' }">
    Nav element {{ navElementLabel }}
  </div>
</template>

<script setup>
import { useFontStore } from "../../stores/fontStore";

const fontStore = useFontStore();

const props = defineProps({
  navElementLabel: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.nav-element {
  margin: 0;
  padding: 0.5rem 0.75rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.75rem;
  font-size: 1.25rem;
  border-radius: 0.25rem;
}
</style>
