<template>
  <div class="dashboard-body">
    <SearchBar />
    <InfoBox />
    <SmallBox
      main-icon="mdi:chart-line"
      title="Profit"
      icon-color="green"
      value="$12,628"
      profit-icon="mdi:arrow-up"
      profit-value="+72,80%"
      profit-icon-color="green"
    />
    <SmallBox
      main-icon="mdi:wallet-bifold-outline"
      title="Sales"
      icon-color="blue"
      value="$4,679"
      profit-icon="mdi:arrow-up"
      profit-value="+28,42%"
      profit-icon-color="green"
    />
    <ChartBox />
    <div class="small-boxes-wrapper">
      <SmallBox
        main-icon="ic:baseline-paypal"
        title="Payments"
        icon-color="red"
        value="$2,456"
        profit-icon="mdi:arrow-down"
        profit-value="-14,82%"
        profit-icon-color="red"
      />
      <SmallBox
        main-icon="mdi:credit-card-outline"
        title="Transactions"
        icon-color="orange"
        value="$14,857"
        profit-icon="mdi:arrow-up"
        profit-value="+28,14%"
        profit-icon-color="green"
      />
      <MiddleBox
        title="Profile report"
        badge-text="Year 2021"
        percentage-icon="mdi:chevron-up"
        percentage-icon-color="green"
        percentage-value="68,2%"
        value="$84,686k"
      />
    </div>
  </div>
</template>

<script setup>
import SearchBar from "./SearchBar.vue";
import InfoBox from "./InfoBox.vue";
import ChartBox from "./ChartBox.vue";
import SmallBox from "./SmallBox.vue";
import MiddleBox from "./MiddleBox.vue";
</script>

<style scoped>
.dashboard-body {
  margin: 0;
  padding: 1rem 1rem 1rem 0;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.small-boxes-wrapper {
  width: calc(30% + 1rem);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.small-boxes-wrapper .small-box {
  width: calc(50% - 0.5rem);
}
</style>
