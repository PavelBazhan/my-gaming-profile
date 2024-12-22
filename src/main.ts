import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import routes from '@/app/router';

import App from './app/App.vue';

import './app/normalize.css';
import './app/style.scss';

import { generateCssVariablesFromThemeColors, themeColors } from '@/shared/ui/helpers.ts';

import { worker } from '@/app/mocks.ts';

generateCssVariablesFromThemeColors(themeColors);


async function prepareWorkers(): Promise<void> {
  await worker.start();
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});


prepareWorkers().then(() => {
  createApp(App)
    .use(router)
    .mount('#app');
});