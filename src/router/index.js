import { createRouter, createWebHistory } from 'vue-router'


const routes = [{
        path: '/',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ('../views/HomeView.vue');
        }
    },
    {
        path: '/profile',
        name: 'profile',

        component: function() {
            return import ('../views/ProfileView.vue');
        }
    },
    {
        path: '/terminal',
        name: 'terminal',
        component: function() {
            return import ('../views/TerminalView.vue');
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: function() {
            return import ('../views/SettingsView.vue');
        }
    },
    {
        path: '/employee',
        name: 'employee',
        component: function() {
            return import ('../views/EmployeeView.vue');
        }
    },
    {
        path: '/employee/edit/:id',
        name: 'employeeEdit',
        component: function() {
            return import ('../views/EmployeeEditView.vue');
        }
    },
    {
        path: '/employee/add/',
        name: 'employeeAdd',
        component: function() {
            return import ('../views/EmployeeAddView.vue');
        }
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router