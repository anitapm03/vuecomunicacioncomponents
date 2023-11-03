import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import PadreDeportes from './components/PadreDeportes.vue';
import SumaPadre from './components/SumaPadre.vue';
import ComicsComponent from './components/ComicsComponent.vue';
import SelectMultiple from './components/SelectMultiple.vue';
import GenerarCheckbox from './components/GenerarCheckbox.vue';
import NumeroDoble from './components/NumeroDoble.vue';
import MenuTablas from './components/MenuTablas.vue';
import TablasMultiplicar from './components/TablasMultiplicar.vue';

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
    },
    {
        path: "/checkbox", component: GenerarCheckbox
    },
    {   //en esta ruta numero es opcional
        path: "/numerodoble/:numero?", component: NumeroDoble
    },
    {   
        path: "/tablas", component: MenuTablas
    },
    {   
        path: "/tabla/:numero", component: TablasMultiplicar
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;