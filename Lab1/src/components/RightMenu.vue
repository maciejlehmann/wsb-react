<template>
  <div class="dashboard-nav-menu">
    <div class="logo-wrapper">
      <div class="logo">Lehmann</div>
    </div>
    <div class="nav-element active">
      <Icon icon="mdi:home-circle-outline" width="32" height="32" />
      Dashboard
    </div>
    <div class="nav-element">
      <Icon icon="mdi:account-circle-outline" width="32" height="32" />
      User profile
    </div>
    <div class="nav-element-category">Pages</div>
    <div class="nav-element">
      <Icon icon="mdi:cog-outline" width="32" height="32" />
      Account settings
    </div>
    <div class="nav-element">
      <Icon icon="mdi:lock-outline" width="32" height="32" />
      Authentications
    </div>
    <div class="nav-element">
      <Icon icon="mdi:cube-outline" width="32" height="32" />
      Misc
    </div>
    <div class="nav-element-category">Statistics</div>
    <div class="nav-element">
      <Icon icon="mdi:chart-line" width="32" height="32" />
      Profit
    </div>
    <div class="nav-element">
      <Icon icon="mdi:wallet-bifold-outline" width="32" height="32" />
      Sales
    </div>
    <div class="nav-element">
      <Icon icon="ic:baseline-paypal" width="32" height="32" />
      Payments
    </div>
    <div class="nav-element">
      <Icon icon="mdi:credit-card-outline" width="32" height="32" />
      Transactions
    </div>
    <div class="nav-element-category">Reports</div>
    <div class="nav-element">
      <Icon icon="mdi:chart-box-outline" width="32" height="32" />
      Yearly report
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.dashboard-nav-menu {
  margin: 0;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  background: #282828;
}

.logo-wrapper {
  margin: 0;
  padding: 0.5rem;
}

.logo {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 2.25rem;
}

.nav-element {
  margin: 0;
  padding: 0.5rem 0.75rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.75rem;
  font-size: 1.25rem;
  border-radius: 0.25rem;
}

.nav-element:hover {
  color: #10b981;
  background: #10b9812a;
  border-right: 1rem solid #10b981;
}

.nav-element.active {
  color: #10b981;
  font-weight: bold;
  background: #10b9812a;
  border-right: 1rem solid #10b981;
}

.nav-element-category {
  margin: 0;
  padding: 0.5rem 0.75rem;
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.25rem;
  color: rgba(160, 160, 160, 0.66);
}
</style>
