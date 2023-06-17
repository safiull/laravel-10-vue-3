import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/home/index.vue";
import Users from "./components/users/index.vue";
import Customers from "./components/customers/index.vue";

import Categories from "./components/categories/index.vue";
import CategoriesCreate from "./components/categories/create.vue";

const routes = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/users",
        component: Users,
    },
    {
        path: "/customers",
        component: Customers,
    },
    {
        path: "/categories",
        component: Categories,
        name: 'categories.index'
    },
    {
        path: "/categories/create",
        component: CategoriesCreate,
        name: 'categories.create'
    },
];

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
});

export default router;
