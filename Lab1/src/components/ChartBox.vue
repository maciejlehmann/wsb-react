<template>
  <div class="chart-box">
    <div class="chart-wrapper">
      <Chart type="bar" :data="chartData" :options="chartOptions" />
    </div>
    <div class="chart-info-box">
      <div class="year-button">
        2022
        <Icon icon="mdi:chevron-down" width="32" height="32" />
      </div>
      <div class="circle-chart">
        <Chart
          type="doughnut"
          :data="chartCircleData"
          :options="chartCircleOptions"
        />
      </div>
      <div class="chart-info-box-text">62% company growth</div>
      <div class="chart-info-icons-wrapper">
        <div class="chart-info-icon-box">
          <div class="chart-box-icon-wrapper orange">
            <Icon icon="mdi:currency-usd" width="36" height="36" />
          </div>
          <div class="chart-info-year">2022</div>
          <div class="chart-info-value">$32.5k</div>
        </div>
        <div class="chart-info-icon-box">
          <div class="chart-box-icon-wrapper turq">
            <Icon icon="mdi:wallet-bifold-outline" width="36" height="36" />
          </div>
          <div class="chart-info-year">2021</div>
          <div class="chart-info-value">$41.2k</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import Chart from "primevue/chart";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
  chartCircleData.value = setChartCircleData();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  return {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "2020",
        backgroundColor: "#c48f00",
        borderColor: "#c48f00",
        data: [18, 75, 33, 19, 55, 27, 78],
      },
      {
        label: "2021",
        backgroundColor: "#10b981",
        borderColor: "#10b981",
        data: [32, 54, 35, 65, 77, 65, 90],
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 0.66)",
        },
      },
      title: {
        display: true,
        text: "Total revenue",
        font: {
          size: 28,
        },
        color: "rgba(255, 255, 255, 0.66)",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "rgba(255, 255, 255, 0.66)",
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: "rgba(255, 255, 255, 0.66)",
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
      },
    },
  };
};

const chartCircleData = ref();
const chartCircleOptions = ref({
  cutout: "60%",
});

const setChartCircleData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: ["#007e94", "#c48f00", "#199400"],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--blue-400"),
          documentStyle.getPropertyValue("--yellow-400"),
          documentStyle.getPropertyValue("--green-400"),
        ],
      },
    ],
  };
};
</script>

<style scoped>
.chart-box {
  margin: 0;
  padding: 1rem;
  width: calc(70% - 2rem);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 1rem;
  background: #282828;
  border-radius: 0.25rem;
}

.chart-wrapper {
  width: 60%;
}

.p-chart {
  height: 30rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.circle-chart {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
}

.circle-chart .p-chart {
  height: 15rem;
  width: 100%;
}

.chart-info-box {
  margin: 0;
  padding: 0 0 0 1rem;
  width: calc(40% - 1rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 1rem;
  border-left: 0.063rem solid rgba(235, 235, 235, 0.64);
}

.chart-info-box-text {
  font-size: 1.75rem;
}

.chart-info-icons-wrapper {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 0.5rem;
}

.chart-info-icon-box {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 0.5rem;
}
.chart-info-icon-box .chart-box-icon-wrapper {
  grid-row: 1 / 3;
}

.chart-box-icon-wrapper {
  margin: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
}
.chart-box-icon-wrapper.orange {
  background: #af78003a;
  color: #c48f00;
}
.chart-box-icon-wrapper.turq {
  color: #10b981;
  background: #10b9812a;
}

.chart-info-value {
  font-size: 1.5rem;
  font-weight: bold;
}

.year-button {
  margin: 0.5rem 0 0 0;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: #10b981;
  border: 0.125rem solid #10b981;
  border-radius: 0.25rem;
}
</style>
