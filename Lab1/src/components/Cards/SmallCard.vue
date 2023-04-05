<template>
  <div
    class="card-wrapper"
    :style="{ fontSize: fontStore.fontSize + 8 + 'px' }"
  >
    {{ cardLabel }}
  </div>
</template>

<script setup>
import { useFontStore } from "../../stores/fontStore";

const fontStore = useFontStore();

const props = defineProps({
  cardLabel: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card-wrapper {
  width: 15%;
  height: 16rem;
}
</style>
