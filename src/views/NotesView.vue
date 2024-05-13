<template>
  <AddEditNote v-model="newNote" ref="addEditNoteRef">
    <template #button>
      <button :disabled="!newNote" class="button is-link" @click.prevent="addNote">
        Add New Note
      </button>
    </template>
  </AddEditNote>

  <SingleNote v-for="note in notes" :key="note.id" :note="note" />
</template>

<script setup>
  import { ref } from 'vue';
  import SingleNote from '../components/Notes/SingleNote.vue';
  import AddEditNote from '../components/Notes/AddEditNote.vue';
  import { useNotesStore } from '@/stores/NotesStore';
  import { storeToRefs } from 'pinia';

  const notesStore = useNotesStore();
  const { notes } = storeToRefs(notesStore);

  const newNote = ref('');
  const addEditNoteRef = ref(null);

  const addNote = () => {
    notesStore.addNote(newNote.value);

    newNote.value = '';
    addEditNoteRef.value.focusTextArea();
  };
</script>
