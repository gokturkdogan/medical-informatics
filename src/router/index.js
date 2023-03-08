import Vue from 'vue'
import VueRouter from 'vue-router';
import Health from '../views/health.vue';
import Training from '../views/training.vue';
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
    },
    {
        path: '/training',
        name: 'training',
        component: Training
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router