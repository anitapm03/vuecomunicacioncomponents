<template>
    <div>
        <h1>Tablas de multiplicar</h1>
        <ul id="menu">
            <li v-for="num in numeros" :key="num">
                <router-link v-bind:to="'/tabla/'+num">
                Tabla del {{num}} | </router-link>
            </li>
        </ul>
        
    </div>
</template>

<script>
    export default {
        name: "MenuTablas",
        data() {
            return {
                numeros: []
            }
        },
        methods: {
            generarNumeros(){
                var aux = [];
                for (var i = 0; i < 5; i++){
                    var num = parseInt(Math.random() * 100);
                    aux.push(num);
                }
                this.numeros = aux;
                this.suma = 0;
                console.log(this.numeros)
            }
        }, 
        mounted() {
            this.generarNumeros();
        }
    }
</script>

<style>
    ul#menu li {
        display: inline;
    }
</style>