import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import routes from '@/app/router';

import App from './app/App.vue';

import './app/normalize.css';
import './app/style.scss';

import { generateCssVariablesFromThemeColors, themeColors } from '@/shared/ui/helpers.ts';

generateCssVariablesFromThemeColors(themeColors);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');

