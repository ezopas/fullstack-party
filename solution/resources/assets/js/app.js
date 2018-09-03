
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//var VueRouter = require('vue-router');

// let routes = [{ path: '/home', component: Ilist }]
//
// const router = new VueRouter({routes})

import VueRouter from 'vue-router';
Vue.use(VueRouter);
//import Issue from './components/Issue.vue';
import Ilist from './components/Ilist.vue';
import Issue from './components/Issue.vue';

//Vue.component('Ilist', require('./components/Ilist.vue'));


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Ilist,
        },
        {
            path: '/home/:id',
            name: 'Issue',
            component: Issue,
        },
    ],
})

// new Vue(Vue.util.extend({router}, Example)).$mount('#app')

const app = new Vue({
    el: '#app',
    router: router
});
