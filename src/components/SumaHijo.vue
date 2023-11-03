<template>
    <div>
        <h1>Suma Hijo</h1>

        
        <div v-if="numero">
            <h2>Numero: {{numero}}</h2>
            <button @click="enviarNumero()">Sumar {{numero}}!</button>
        </div>
        
    </div>
</template>

<script>

    export default {
        name: "SumaHijo",
        props: ["numero"],
        methods: {
            enviarNumero(){
                this.$emit("sumarNumero", this.numero)
            }
        }
    }
</script>