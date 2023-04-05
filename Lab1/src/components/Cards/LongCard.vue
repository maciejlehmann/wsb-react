<template>
  <div
    class="card-wrapper"
    :style="{ fontSize: fontStore.fontSize + 8 + 'px' }"
  >
    Card 1
  </div>
</template>

<script setup>
import { useFontStore } from "../../stores/fontStore";

const fontStore = useFontStore();
</script>

<style scoped>
.card-wrapper {
  width: 100%;
  height: 6rem;
}
</style>
