<template>
  <div
    class="card-wrapper"
    :style="{ fontSize: fontStore.fontSize + 24 + 'px' }"
  >
    Card 5
  </div>
</template>

<script setup>
import { useFontStore } from "../../stores/fontStore";

const fontStore = useFontStore();
</script>

<style scoped>
.card-wrapper {
  width: calc(70% - 2rem);
  height: 33rem;
}
</style>
