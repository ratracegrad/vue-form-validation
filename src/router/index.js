import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/vuelidate',
        name: 'vuelidate',
        component: () =>
            import(/* webpackChunkName: "vuelidate" */ '../views/Vuelidate.vue')
    },
    {
        path: '/vuetify',
        name: 'vuetify',
        component: () =>
            import(/* webpackChunkName: "vuetify" */ '../views/Vuetify.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
