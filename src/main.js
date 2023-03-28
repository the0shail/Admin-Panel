import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


// FontAwesome
import './plugins/fontawesome';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
    .use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')