import Vue from 'vue'
import VueRouter from 'vue-router';
import Health from '../views/health.vue';
import Home from '../views/home.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/health',
        name: 'health',
        component: Health
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router