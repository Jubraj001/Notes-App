<template>
  <div class="py-4 mb-4">
    <textarea class="textarea" placeholder="Add New Note" v-model="newNote" ref="newNoteRef"></textarea>
    <button :disabled="!newNote" class="button is-link" @click.prevent="addNote">Add New Note</button>
  </div>

  <SingleNote v-for="note in notes" :key="note.id" :note="note" />
</template>

<script setup>
  import { ref } from 'vue';
  import SingleNote from '../components/Notes/SingleNote.vue';
  import { useNotesStore } from '@/stores/NotesStore';
  import { storeToRefs } from 'pinia';

  const notesStore = useNotesStore();
  const { notes } = storeToRefs(notesStore);

  const newNote = ref('');
  const newNoteRef = ref(null);

  const addNote = () => {
    notesStore.addNote(newNote.value);

    newNote.value = '';
    newNoteRef.value.focus();
  };
</script>
