<template>
  <Navbar />
  <div class="container">
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import Navbar from './components/Layout/Navbar.vue';
  import { useAuthStore } from './stores/AuthStore';

  const authStore = useAuthStore();
  onMounted(() => {
    authStore.init();
  });
</script>

<style>
  @import 'bulma/css/bulma.min.css';
</style>
