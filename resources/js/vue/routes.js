import { createRouter, createWebHistory } from "vue-router";

import authMiddleware from "./middleware/authMiddleware";

import authLayout from "./components/layouts/authLayout.vue";
import adminLayout from "./components/layouts/adminLayout.vue";
import Login from "./components/auth/login.vue";
import Register from "./components/auth/register.vue";
import NotFound from "./components/layouts/notFound.vue";

import Dashboard from "./components/dashboard/index.vue";
import Users from "./components/users/index.vue";
import Customers from "./components/customers/index.vue";
import CustomersAddNew from "./components/customers/AddNew.vue";
import Categories from "./components/categories/index.vue";
import CategoriesCreate from "./components/categories/create.vue";

const routes = [
    {
        path: "/admin",
        component: adminLayout,
        beforeEnter: authMiddleware,
        children: [
            {
                path: "/dashboard",
                component: Dashboard,
                name: "dashboard",
            },
            {
                path: "/users",
                component: Users,
            },
            {
                path: "/customers",
                component: Customers,
                name: "customers.index",
            },
            {
                path: "/customers/create",
                component: CustomersAddNew,
                name: "customers.create",
            },
            {
                path: "/categories",
                component: Categories,
                name: "categories.index",
            },
            {
                path: "/categories/create",
                component: CategoriesCreate,
                name: "categories.create",
            },
        ],
    },
    {
        path: "/login",
        component: authLayout,
        children: [
            {
                path: "",
                component: Login,
                name: "login",
            },
        ],
    },
    {
        path: "/register",
        component: authLayout,
        children: [
            {
                path: "",
                component: Register,
                name: "register",
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
        name: "not-found",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Apply the authMiddleware to the router
router.beforeEach((to, from, next) => {
    authMiddleware(to, from, next, app);
});

export default router;
