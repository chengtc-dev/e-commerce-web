import { createApp } from 'vue'
import './style.css'
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import toastOptions from './config/toastConfig';
import router from './router';
import store from "./store";
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(store);
app.use(Toast, toastOptions);
app.mount('#app')
