require('./bootstrap');


import { createApp } from  'vue/dist/vue.esm-bundler'

import Conter from './components/Conter.vue'

const app = createApp({
    components:{
        Conter
    }
});
app.mount('#app');

