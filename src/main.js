import { createApp } from 'vue';
import App from './App.vue'; // Importuojame pagrindinį komponentą
import router from './router'; // Importuojame router'į, kad galėtume valdyti maršrutus

const app = createApp(App); // Sukuriame Vue aplikaciją su App komponentu
app.use(router); // Pridedame router'į prie aplikacijos
app.mount('#app'); // Montuojame aplikaciją į HTML elementą su id "app"