<template>
    <div>
        <h1>Suma Padre</h1>

        <h2 style="color: red">La suma es: {{suma}}</h2>

        <button @click="generarNumeroPadre()">Nuevo número</button>

        <div v-for="num in numeros" :key="num">
            <SumaHijo :numero="num" v-on:sumarNumero="sumarNumero"/>
        </div>
        
    </div>
</template>

<script>
import SumaHijo from './SumaHijo.vue';
    export default {
        name: "SumaPadre",
        components: {
            SumaHijo
        },
        data() {
            return {
                suma: 0,
                numeros:[]
            }
        },
        methods: {
            generarNumeroPadre(){
                var random = Math.floor(Math.random() * 100);
                this.numeros.push(random);
            },
            sumarNumero(num){
                this.suma += num;
            }
        }
    }
</script>