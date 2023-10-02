import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css';
import { markRaw } from 'vue'
import { createPinia } from 'pinia';


const app = createApp(App)
const pinia = createPinia();

pinia.use(({ store }) => {
    store.$router = markRaw(router)
});


app.use(router)
app.use(pinia)
app.mount('#app')

