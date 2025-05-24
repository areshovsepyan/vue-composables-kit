import { ref, watch } from 'vue';

export function useDarkMode() {
  const isDark = ref(localStorage.getItem('theme') !== 'light');

  const toggleDark = () => {
    isDark.value = !isDark.value;
  };

  watch(
    isDark,
    (val) => {
      document.documentElement.classList.toggle('dark', val);
      localStorage.setItem('theme', val ? 'dark' : 'light');
    },
    { immediate: true },
  );

  return { isDark, toggleDark };
}
