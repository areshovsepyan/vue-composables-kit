<script setup lang="ts">
import { ref } from 'vue';
import { useDebounce } from '@/composables/useDebounce';

const input = ref('');
const debounced = useDebounce(input, 500);
</script>

<template>
  <div class="p-6 space-y-4 bg-background text-foreground rounded-xl shadow">
    <h2 class="text-xl font-semibold">🕒 Debounce Demo</h2>

    <input
      v-model="input"
      type="text"
      class="w-full px-4 py-2 rounded bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Type something"
    />

    <p>
      Debounced: <strong>{{ debounced }}</strong>
    </p>
  </div>
</template>
