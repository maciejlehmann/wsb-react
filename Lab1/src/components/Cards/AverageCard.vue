<template>
  <div
    class="card-wrapper"
    :style="{ fontSize: fontStore.fontSize + 12 + 'px' }"
  >
    Card 2
  </div>
</template>

<script setup>
import { useFontStore } from "../../stores/fontStore";

const fontStore = useFontStore();
</script>

<style scoped>
.card-wrapper {
  width: calc(70% - 2rem);
  height: 16rem;
}
</style>
