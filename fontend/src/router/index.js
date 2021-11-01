import {createRouter, createWebHistory} from 'vue-router'

import Todos from "../components/CompTodos.vue"
import Home from "../components/CompHome.vue"
import Error from "../components/share/head/CompError.vue"

const routes = [
    {path: '/', component: Home},
    {path: '/todos', component: Todos},
    {path: '/:error(.*)*', component: Error},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 