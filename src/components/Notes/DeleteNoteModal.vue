<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content" ref="deleteModalRef">
      <div>Delete Note</div>
      <div>Are you sure you want to delete it?</div>
      <button class="button" @click="deleteNote">Delete</button>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>

<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import { onClickOutside } from '@vueuse/core';
  import { useNotesStore } from '@/stores/NotesStore';

  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true
    },
    noteId: {
      type: String,
      required: true
    }
  });

  const handleClose = (event) => {
    if(event.key === 'Escape') {
      closeModal();
    }
  };
  const closeModal = () => {
    emits('update:modelValue', false);
  };

  const deleteModalRef = ref(null);
  onClickOutside(deleteModalRef, closeModal);

  const notesStore = useNotesStore();
  const deleteNote = () => {
    notesStore.deleteNote(props.noteId);
  }

  onMounted(() => {
    document.addEventListener('keyup', handleClose);
  });

  onUnmounted(() => {
    document.removeEventListener('keyup', handleClose);
  });

  const emits = defineEmits(['update:modelValue']);
</script>
