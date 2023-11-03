import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import PadreDeportes from './components/PadreDeportes.vue';
import SumaPadre from './components/SumaPadre.vue';
import ComicsComponent from './components/ComicsComponent.vue';
import SelectMultiple from './components/SelectMultiple.vue';

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/deportes", component: PadreDeportes
    },
    {
        path: "/sumas", component: SumaPadre
    },
    {
        path: "/comics", component: ComicsComponent
    },
    {
        path: "/select", component: SelectMultiple
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;