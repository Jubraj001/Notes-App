<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns has-text-grey-light">
          <small class="column">{{ formattedDate }}</small>
          <small class="column has-text-right">{{ characterLength }} characters</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="{ name: 'editNote', params: { id: note.id } }" class="card-footer-item">Edit</RouterLink>
      <a href="#" class="card-footer-item" @click.prevent="handleDeleteClick">Delete</a>
    </footer>
    <DeleteNoteModal v-if="modals.deleteModal" v-model="modals.deleteModal" :noteId="note.id"/>
  </div>
</template>

<script setup>
  import { computed, reactive } from "vue";
  import DeleteNoteModal from './DeleteNoteModal.vue';
  import { useDateFormat } from "@vueuse/core";

  const props = defineProps({
    note: {
      type: Object,
      required: true,
    },
  });

  const formattedDate = computed(() => {
    const date = new Date(+props.note.date);
    const formatDate = useDateFormat(date, 'DD-MM-YYYY @ HH:mm');
    return formatDate.value;
  });

  const characterLength = computed(() => {
    return props.note.content.length;
  });

  const handleDeleteClick = () => {
    modals.deleteModal = true;
  };

  const modals = reactive({
    deleteModal: false
  });
</script>
