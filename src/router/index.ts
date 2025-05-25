import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Clipboard',
    component: () => import('@/views/ClipboardView.vue'),
  },
  {
    path: '/dark-mode',
    name: 'Dark Mode',
    component: () => import('@/views/DarkModeView.vue'),
  },
  {
    path: '/debounce',
    name: 'Debounce',
    component: () => import('@/views/DebounceView.vue'),
  },
  {
    path: '/window-size',
    name: 'Window Size',
    component: () => import('@/views/WindowSizeView.vue'),
  },
  {
    path: '/event-listener',
    name: 'Event Listener',
    component: () => import('@/views/EventListenerView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
