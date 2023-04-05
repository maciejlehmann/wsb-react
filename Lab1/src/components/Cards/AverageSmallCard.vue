<template>
  <div
    class="card-wrapper-as"
    :style="{ fontSize: fontStore.fontSize + 12 + 'px' }"
  >
    Card 8
  </div>
</template>

<script setup>
import { useFontStore } from "../../stores/fontStore";

const fontStore = useFontStore();
</script>

<style scoped>
.card-wrapper-as {
  width: 100%;
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 0.25rem;
}

.dashboard-container.dark .card-wrapper-as {
  background: #2e2e2e;
}
</style>
