<script setup lang="ts">
import { ref } from 'vue';
import { useClipboard } from '@/composables/useClipboard';

const text = ref('');
const { copy, copied } = useClipboard();

const handleCopy = () => {
  if (text.value.trim()) {
    copy(text.value);
  }
};
</script>

<template>
  <div class="p-6 space-y-5 bg-background text-foreground rounded-xl shadow-xl">
    <h2 class="text-xl font-semibold">📋 Clipboard Demo</h2>

    <input
      v-model="text"
      type="text"
      class="w-full px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Type something to copy"
    />

    <button
      @click="handleCopy"
      class="px-4 py-2 bg-primary text-primary border rounded-xl hover:opacity-90 transition"
    >
      Copy to Clipboard
    </button>

    <p v-if="copied" class="text-green-500">Copied!</p>
  </div>
</template>
