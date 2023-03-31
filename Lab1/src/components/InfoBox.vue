<template>
  <div class="info-box-wrapper">
    <div class="info-box-information">
      <div class="info-box-title">
        Congratulations Maciek!
        <Icon icon="mdi:party-popper" width="32" height="32" />
      </div>
      <div class="info-box-text">
        You have done <b>72%</b> more sales today. Check you new badge in your
        profile.
      </div>
      <div class="info-box-button">View badges</div>
    </div>
    <div class="info-box-image">
      <img src="../assets/work.png" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.info-box-wrapper {
  margin: 0;
  padding: 1rem;
  width: calc(70% - 2rem);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 5rem;
  background: #282828;
  border-radius: 0.25rem;
}

.info-box-information {
  margin: 0;
  padding: 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  row-gap: 1.25rem;
  font-size: 1.25rem;
}

.info-box-title {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #10b981;
}

.info-box-button {
  margin: 0.5rem 0 0 0;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: #10b981;
  border: 0.125rem solid #10b981;
  border-radius: 0.25rem;
}

.info-box-image {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.info-box-image img {
  width: 100%;
  border-radius: 0.25rem;
}
</style>
