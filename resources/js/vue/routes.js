import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./components/dashboard/index.vue";
import Users from "./components/users/index.vue";
import Customers from "./components/customers/index.vue";
import CustomersAddNew from "./components/customers/AddNew.vue";

const routes = [
    {
        path: "/dashboard",
        component: Dashboard,
    },
    {
        path: "/users",
        component: Users,
    },
    {
        path: "/customers",
        component: Customers,
        name: 'customers.index'
    },
    {
        path: "/customers/create",
        component: CustomersAddNew,
        name: 'customers.create'
    },
];

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
});

export default router;
