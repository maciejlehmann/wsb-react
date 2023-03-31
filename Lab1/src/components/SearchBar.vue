<template>
  <div class="search-bar-wrapper">
    <div class="search-bar">
      <Icon icon="mdi:magnify" width="32" height="32" />
      <input type="text" placeholder="Search..." />
    </div>
    <div class="user-info">
      <div class="stars">
        <div class="star">
          <Icon icon="mdi:star-outline" width="28" height="28" />
          Star
        </div>
        <div class="count">154</div>
      </div>
      <div class="user-avatar">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        />
      </div>
      <div class="mobile-menu-wrapper">
        <Icon icon="mdi:menu-open" width="42" height="42" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.search-bar-wrapper {
  margin: 0;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  border-radius: 0.25rem;
  grid-column: 1 / 5;
}

.search-bar {
  margin: 0;
  padding: 0;
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.5rem;
}

.search-bar input {
  margin: 0;
  padding: 0.75rem;
  width: 100%;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  color: rgba(235, 235, 235, 0.64);
}
.search-bar input:focus,
.search-bar input:active,
.search-bar input:hover {
  border-color: rgba(235, 235, 235, 0.64);
}

.user-info {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 2rem;
}

.stars {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 0.063rem solid rgba(235, 235, 235, 0.64);
  border-radius: 0.25rem;
}

.star {
  margin: 0;
  padding: 0.25rem 0.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.25rem;
  border-right: 0.063rem solid rgba(235, 235, 235, 0.64);
}

.count {
  margin: 0;
  padding: 0.25rem 0.75rem;
}

.user-avatar {
  margin: 0;
  padding: 0;
  width: 3.5rem;
  height: 3.5rem;
}
.user-avatar img {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.mobile-menu-wrapper {
  margin: 0;
  padding: 0;
  display: none;
  justify-content: flex-start;
  align-items: center;
}
</style>
