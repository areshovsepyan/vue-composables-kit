<script setup lang="ts">
import { useWindowSize } from '@/composables/useWindowSize';

const { width, height } = useWindowSize();
</script>

<template>
  <div class="p-6 space-y-4 bg-background text-foreground rounded-xl shadow">
    <h2 class="text-xl font-semibold">📐 Window Size Demo</h2>
    <p>
      Width: <strong>{{ width }}</strong> px
    </p>
    <p>
      Height: <strong>{{ height }}</strong> px
    </p>
  </div>
</template>
