<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode';

const { isDark, toggleDark } = useDarkMode();
</script>

<template>
  <div class="p-6 space-y-4 bg-background text-foreground rounded-xl shadow">
    <h2 class="text-xl font-semibold">🌙 Dark Mode Demo</h2>
    <button
      @click="toggleDark"
      class="px-4 py-2 bg-primary text-white rounded hover:opacity-90 transition"
    >
      Toggle Dark Mode
    </button>
    <p>
      Current mode: <strong>{{ isDark ? 'Dark' : 'Light' }}</strong>
    </p>
  </div>
</template>
