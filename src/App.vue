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
  import { useNotesStore } from './stores/NotesStore';

  const notesStore = useNotesStore();
  onMounted(() => {
    notesStore.getNotes();
  });
</script>

<style>
  @import 'bulma/css/bulma.min.css';
</style>
