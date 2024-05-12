<template>
  <div class="py-4 mb-4">
    <textarea class="textarea" placeholder="Add New Note" v-model="newNote" ref="newNoteRef"></textarea>
    <button :disabled="!newNote" class="button is-link" @click.prevent="addNote">Add New Note</button>
  </div>

  <SingleNote v-for="note in notes" :key="note.id" :note="note" @onDeleteClicked="deleteNote"/>
</template>

<script setup>
  import { ref } from 'vue';
  import SingleNote from '../components/Notes/SingleNote.vue';

  const notes = ref([
    {id: 'id1', content: 'First Note'},
    {id: 'id2', content: 'Second Note'}
  ]);

  const newNote = ref('');
  const newNoteRef = ref(null);

  const addNote = () => {
    const currentDate = new Date().getTime().toString();
    const note = {
      id: currentDate,
      content: newNote.value
    }

    notes.value.unshift(note);
    newNote.value = '';
    newNoteRef.value.focus();
  };

  const deleteNote = (idToDelete) => {
    notes.value = notes.value.filter((note) => note.id !== idToDelete);
  };
</script>
