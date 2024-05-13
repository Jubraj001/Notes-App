<template>
  <div class="py-4 mb-4">
    <textarea class="textarea" placeholder="Add New Note" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" ref="textAreaRef"></textarea>
    <slot name="button"></slot>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const props = defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);
  const textAreaRef = ref(null);

  const focusTextArea = () => {
    textAreaRef.value.focus();
  }

  defineExpose({
    focusTextArea
  })
</script>
