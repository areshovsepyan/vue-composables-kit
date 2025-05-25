<script setup lang="ts">
import { routes } from '@/router';
</script>

<template>
  <div class="min-h-screen bg-background text-foreground transition-colors">
    <main class="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <h1 class="text-3xl font-bold text-center mb-6">🧩 Vue Composables Playground</h1>

      <nav class="flex flex-wrap justify-center gap-4 mb-8">
        <RouterLink
          v-for="(route, index) in routes"
          :key="index"
          :to="route.path"
          class="px-3 rounded-xl font-bold"
        >
          {{ route.name }}
        </RouterLink>
      </nav>

      <RouterView />
    </main>
  </div>
</template>
