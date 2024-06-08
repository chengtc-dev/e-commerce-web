import { createRouter, createWebHistory } from 'vue-router';
import ProductsList from "./views/products/ProductList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/products',
        },
        {
            path: '/products',
            component: ProductsList,
        },
    ],
});

export default router;