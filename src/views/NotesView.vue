<template>
  <div class="py-4 mb-4">
    <textarea class="textarea" placeholder="Add New Note" v-model="newNote" ref="newNoteRef"></textarea>
    <button :disabled="!newNote" class="button is-link" @click.prevent="addNote">Submit</button>
  </div>
  <div class="card mb-4" v-for="note in notes" :key="note.id">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

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
</script>
