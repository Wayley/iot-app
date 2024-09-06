import i18n from '@/locale';
import { createSSRApp } from 'vue';
import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App);

  app.use(i18n);

  return { app };
}
