import { onUnmounted } from 'vue';

export function useEventListener<K extends keyof WindowEventMap>(
  target: Window,
  type: K,
  handler: (event: WindowEventMap[K]) => void,
) {
  const wrappedHandler = (event: Event) => handler(event as WindowEventMap[K]);
  target.addEventListener(type, wrappedHandler);

  // Cleanup
  onUnmounted(() => {
    target.removeEventListener(type, wrappedHandler);
  });
}
