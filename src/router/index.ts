import { createRouter, createWebHistory } from 'vue-router';
import ClipboardView from '../views/ClipboardView.vue';
import DarkModeView from '../views/DarkModeView.vue';
import DebounceView from '../views/DebounceView.vue';
import WindowSizeView from '../views/WindowSizeView.vue';
import EventListenerView from '../views/EventListenerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/clipboard' },
    { path: '/clipboard', component: ClipboardView },
    { path: '/dark-mode', component: DarkModeView },
    { path: '/debounce', component: DebounceView },
    { path: '/window-size', component: WindowSizeView },
    { path: '/event-listener', component: EventListenerView },
  ],
});

export default router;
