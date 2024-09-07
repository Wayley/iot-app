import i18n from '@/i18n';
import { createPinia } from 'pinia';
import { createSSRApp } from 'vue';
import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App);

  app.use(i18n);
  app.use(createPinia());

  return { app };
}
