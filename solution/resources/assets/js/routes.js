import Vue from 'vue'
import VueRouter from 'vue-router';

import Issue from './components/Issue.vue';
import Ilist from './components/Ilist.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: "/",
        component: Ilist
    }]
})

export default