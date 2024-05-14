import { watch } from "vue";

export function useCharactersLimit(value, limit) {
  watch(value, (newValue, oldValue) => {
    if(newValue.length === limit) {
      alert(`Sorry! Only ${limit} characters are allowed`);
    }
  })
}
