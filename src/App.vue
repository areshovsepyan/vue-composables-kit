<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Vue Composables Kit Demo</h1>

    <nav class="mb-6 space-x-4">
      <RouterLink to="/clipboard">Clipboard</RouterLink>
      <RouterLink to="/dark-mode">Dark Mode</RouterLink>
      <RouterLink to="/debounce">Debounce</RouterLink>
      <RouterLink to="/window-size">Window Size</RouterLink>
      <RouterLink to="/event-listener">Event Listener</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
