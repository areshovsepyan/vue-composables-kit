<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode';

const { isDark, toggleDark } = useDarkMode();
</script>

<template>
  <div class="p-6 space-y-4 bg-background text-foreground rounded-xl shadow">
    <h2 class="text-xl font-semibold">🌙 Dark Mode Demo</h2>
    <button @click="toggleDark" class="px-5 py-1 bg-primary border rounded-4xl transition">
      {{ isDark ? '☀️' : '🌙' }}
    </button>
    <p>
      Current mode: <strong>{{ isDark ? 'Dark' : 'Light' }}</strong>
    </p>
  </div>
</template>
