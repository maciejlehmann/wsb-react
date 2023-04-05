<template>
  <div class="dashboard-body">
    <LongCard />
    <AverageCard />
    <SmallCard card-label="Card 3" />
    <SmallCard card-label="Card 4" />
    <BigCard />
    <div class="small-boxes-wrapper">
      <SmallCard card-label="Card 6" />
      <SmallCard card-label="Card 7" />
      <AverageSmallCard />
    </div>
  </div>
</template>

<script setup>
import LongCard from "./Cards/LongCard.vue";
import AverageCard from "./Cards/AverageCard.vue";
import SmallCard from "./Cards/SmallCard.vue";
import BigCard from "./Cards/BigCard.vue";
import AverageSmallCard from "./Cards/AverageSmallCard.vue";
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

.small-boxes-wrapper .card-wrapper {
  width: calc(50% - 0.5rem);
}
</style>
