import { router } from './routes.js';

const app = Vue.createApp({
    setup() {
        return {};
    }
});

app.use(router);
app.mount('#app');
