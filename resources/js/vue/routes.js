import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/home/index.vue";
import Users from "./components/users/index.vue";
import Customers from "./components/customers/index.vue";

const routes = [
    {
        path: "/",
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
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
