import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importa el archivo CSS global
import './assets/styles.css'; // Ruta al archivo CSS

createApp(App).use(router).mount('#app');
