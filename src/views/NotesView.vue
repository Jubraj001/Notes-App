<template>
  <AddEditNote v-model="newNote" ref="addEditNoteRef">
    <template #button>
      <button :disabled="!newNote" class="button is-link" @click.prevent="addNote">
        Add New Note
      </button>
    </template>
  </AddEditNote>
  <progress class="progress is-small is-primary" max="100" v-if="!notesStore.notesLoaded" />

  <template v-else>
    <SingleNote v-for="note in notes" :key="note.id" :note="note" />
  </template>

  <div class="has-text-centered py-6 is-size-4 has-text-gray-light" v-if="!notes.length && notesStore.notesLoaded">No notes added here yet!</div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import SingleNote from '../components/Notes/SingleNote.vue';
  import AddEditNote from '../components/Notes/AddEditNote.vue';
  import { useNotesStore } from '@/stores/NotesStore';
  import { storeToRefs } from 'pinia';
  import { useCharactersLimit } from '@/composables/useCharactersLimit';

  const notesStore = useNotesStore();
  const { notes } = storeToRefs(notesStore);

  const newNote = ref('');
  const addEditNoteRef = ref(null);

  onMounted(() => {
    notesStore.getNotes();
  })

  const addNote = () => {
    notesStore.addNote(newNote.value);

    newNote.value = '';
    addEditNoteRef.value.focusTextArea();
  };

  useCharactersLimit(newNote, 50);
</script>
