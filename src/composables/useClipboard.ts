import { ref } from 'vue';

export function useClipboard() {
  const copied = ref(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      copied.value = true;
      setTimeout(() => (copied.value = false), 1500);
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      copied.value = false;
    }
  };

  return { copy, copied };
}
