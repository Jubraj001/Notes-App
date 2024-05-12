<template>
  <Navbar />
  <div class="container">
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
  import Navbar from './components/Layout/Navbar.vue';
</script>

<style>
  @import 'bulma/css/bulma.min.css';
</style>
