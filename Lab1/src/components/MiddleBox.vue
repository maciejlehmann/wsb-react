<template>
  <div class="middle-box">
    <div class="middle-box-left">
      <div class="middle-box-title">{{ title }}</div>
      <div class="middle-box-badge">{{ badgeText }}</div>
      <div :class="'middle-box-percentage ' + percentageIconColor">
        <Icon :icon="percentageIcon" width="32" height="32" />
        {{ percentageValue }}
      </div>
      <div class="middle-box-value">{{ value }}</div>
    </div>
    <div class="middle-box-right">
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        class="h-30rem"
      />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import Chart from "primevue/chart";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  badgeText: {
    type: String,
    required: true,
  },
  percentageIcon: {
    type: String,
    required: true,
  },
  percentageIconColor: {
    type: String,
    required: true,
  },
  percentageValue: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [12, 62, 21, 33, 47, 59, 37, 61, 72],
        fill: true,
        borderColor: documentStyle.getPropertyValue("--orange-500"),
        tension: 0.4,
        backgroundColor: "rgba(255,167,38,0.2)",
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          display: false,
        },
        grid: {
          color: surfaceBorder,
          display: false,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
          display: false,
        },
        grid: {
          color: surfaceBorder,
          display: false,
        },
      },
    },
  };
};
</script>

<style scoped>
.middle-box {
  margin: 0;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.5rem;
  background: #282828;
  border-radius: 0.25rem;
}

.middle-box-left {
  margin: 0;
  padding: 0;
  width: calc(50% - 0.25rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  row-gap: 0.5rem;
}

.middle-box-title {
  font-size: 2rem;
}

.middle-box-badge {
  margin: 0;
  padding: 0.25rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  background: #af78003a;
  color: #c48f00;
  border-radius: 0.25rem;
}

.middle-box-percentage {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 1.5rem;
}
.middle-box-percentage.red {
  color: #bb0000;
}
.middle-box-percentage.green {
  color: #199400;
}
.middle-box-value {
  font-size: 2.5rem;
  font-weight: bold;
}

.middle-box-right {
  margin: 0;
  padding: 0;
  width: calc(50% - 0.25rem);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.p-chart {
  width: 100%;
  height: 100%;
}
</style>
