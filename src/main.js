import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router'
import HompComp from './pages/HomeComp.vue'
import VacanciesComp from './pages/VacanciesComp.vue'

const routes = [
    {
        path:'/',
        component:HompComp
    },
    {
        path:'/vacancies',
        component:VacanciesComp
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
