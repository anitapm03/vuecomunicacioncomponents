<template>
    <div>
        <h1>Padre deportes</h1>
        <h2 v-html="favorito" style="color: green"></h2>
        <ul>
            <li v-for="dep in deportes" :key="dep">
                <!-- lleva : porque dep hace referencia a una variable -->
                <HijoDeporte :nombredeporte="dep" v-on:seleccionarFavPadre="seleccionarFavPadre"/>
            </li>
        </ul>
        
    </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue'

    export default {
        name: "PadreDeportes",
        components: {
            HijoDeporte
        },
        methods:{
            //vamos a crear un método sin recibir nada 
            seleccionarFavPadre(nombre){
                console.log("Favorito: " + nombre);
                this.favorito = nombre;
            }
        },
        data() {
            return {
                favorito: null,
                deportes: ["Tenis", "Futbol", "Baloncesto", "Petanca", "Ping-pong"]
            }
        }
    }
</script>