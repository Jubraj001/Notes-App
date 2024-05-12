<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink :to="{ name: 'notes' }" class="navbar-item is-size-4 is-family-monospace">
        Notes
      </RouterLink>

      <a role="button" class="navbar-burger" :class="{ 'is-active': showNavbarMenu }" aria-label="menu"
        aria-expanded="false" data-target="navbarBasicExample" @click.prevent="showNavbarMenu = !showNavbarMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNavbarMenu }">
      <div class="navbar-end">
        <RouterLink :to="{ name: 'notes' }" active-class="is-active" class="navbar-item"> Notes </RouterLink>
        <RouterLink :to="{ name: 'stats' }" active-class="is-active" class="navbar-item"> Stats </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from 'vue';
  const showNavbarMenu = ref(false);
</script>

<style scoped>
  @media (max-width: 1023px) {
    .navbar-menu {
      position: absolute;
      width: 100%;
    }
  }
</style>
