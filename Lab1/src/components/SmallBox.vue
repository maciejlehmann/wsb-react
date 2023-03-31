<template>
  <div class="small-box">
    <div class="small-box-upper">
      <div :class="'small-box-icon-wrapper ' + iconColor">
        <Icon :icon="mainIcon" width="32" height="32" />
      </div>
      <div class="small-box-options">
        <Icon icon="mdi:dots-vertical" width="32" height="32" />
      </div>
    </div>
    <div class="small-box-middle">
      <div class="small-box-middle-title">{{ title }}</div>
      <div class="small-box-middle-value">{{ value }}</div>
    </div>
    <div :class="'small-box-down ' + profitIconColor">
      <Icon :icon="profitIcon" width="32" height="32" />
      {{ profitValue }}
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  mainIcon: {
    type: String,
    required: true,
  },
  iconColor: {
    type: String,
    required: false,
    default: "turq",
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  profitIcon: {
    type: String,
    required: true,
  },
  profitIconColor: {
    type: String,
    required: true,
  },
  profitValue: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.small-box {
  margin: 0;
  padding: 1rem;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: #282828;
  border-radius: 0.25rem;
}

.small-box.double {
  width: 100%;
}

.small-box-upper {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.small-box-icon-wrapper {
  margin: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.small-box-icon-wrapper,
.small-box-options {
  margin: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
}
.small-box-options {
  padding: 0.5rem 0;
}

.small-box-icon-wrapper.green {
  background: #1374003a;
  color: #199400;
}
.small-box-icon-wrapper.blue {
  background: #0059743a;
  color: #007e94;
}
.small-box-icon-wrapper.red {
  background: #bb000036;
  color: #bb0000;
}
.small-box-icon-wrapper.orange {
  background: #af78003a;
  color: #c48f00;
}
.small-box-icon-wrapper.turq {
  color: #10b981;
  background: #10b9812a;
}

.small-box-middle-title {
  font-size: 1.5rem;
}
.small-box-middle-value {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.66);
  font-weight: bold;
}

.small-box-down {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}
.small-box-down.green {
  color: #199400;
}
.small-box-down.red {
  color: #bb0000;
}
</style>
