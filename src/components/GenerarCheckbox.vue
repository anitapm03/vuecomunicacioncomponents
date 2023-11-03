<template>
    <div>
        <h1>Generación de checkbox dinámicos</h1>

        <button @click="generarCheckbox()">Generar checkbox</button>

        <form >
            <div v-for="num in numeros" :key="num">
                <label>{{num}}</label>
                <input type="checkbox" :value="num" v-on:change.prevent="sumar(num)"/>
            </div>
        </form>

        <h3>La suma es de: {{suma}}</h3>
    </div>
</template>

<script>
    export default {
        name: "GenerarCheckbox",
        data() {
            return{
                numeros: [],
                suma: 0
            }
        },
        methods: {
            generarCheckbox(){
                var aux = [];
                for (var i = 0; i < 5; i++){
                    var num = parseInt(Math.random() * 100);
                    aux.push(num);
                }
                this.numeros = aux;
                this.suma = 0;
                console.log(this.numeros)
            },
            sumar(num){
                //console.log("ola " + num);
                this.suma += num;
            }
        }
    }
</script>