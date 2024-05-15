<template>
  <div class="py-4 mb-4">
    <label class="label" v-if="label">{{ label }}</label>
    <textarea class="textarea" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" ref="textAreaRef" maxlength="100" v-autofocus ></textarea>
    <slot name="button"></slot>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { vAutofocus } from '@/directives/vAutoFocus';

  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'Add Note'
    },
    placeholder: {
      type: String,
      default: 'Add Note'
    }
  });
  const emit = defineEmits(['update:modelValue']);
  const textAreaRef = ref(null);

  const focusTextArea = () => {
    textAreaRef.value.focus();
  }

  defineExpose({
    focusTextArea
  })
</script>
