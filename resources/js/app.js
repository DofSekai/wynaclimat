import {createApp} from "vue";
import App from './App.vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import router from './routes/router.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

createApp(App)
    .use(BootstrapVue3)
    .use(router)
    .mount('#app');
