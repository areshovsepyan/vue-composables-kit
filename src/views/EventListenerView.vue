<script setup lang="ts">
import { ref } from 'vue';
import { useEventListener } from '@/composables/useEventListener';

const key = ref('');

useEventListener(window, 'keydown', (e: KeyboardEvent) => {
  key.value = e.key;
});
</script>

<template>
  <div class="p-6 space-y-4 bg-background text-foreground rounded-xl shadow">
    <h2 class="text-xl font-semibold">🎧 Event Listener Demo</h2>
    <p>
      Pressed key: <strong>{{ key }}</strong>
    </p>
  </div>
</template>
