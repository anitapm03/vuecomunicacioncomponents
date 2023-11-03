<template>
    <div>
        <h1>Numero doble</h1>

        <h3 style="color:red" v-if="mensaje">
            {{mensaje}}
        </h3>

        <div v-else>
            <h2 style="color: blue">Numero recibido: {{numero}}</h2>
            <h2 style="color: blue">Doble del recibido: {{doble}}</h2>
        </div>

        <button @click="redirectToHome()">Home</button>

    </div>
</template>

<script>
    export default {
        name: "NumeroDoble",
        watch: {
            '$route.params.numero'(nextVal, oldVal){

                //solo hacemos las acciones cuando nuestro parámetro cambie
                if (nextVal != oldVal){
                    this.numero=parseInt(this.$route.params.numero);
                    this.doble = this.numero * 2;
                }
            }
        },
        methods:{
            redirectToHome(){
                this.$router.push("/");
            }
        },
        data(){
            return {
                mensaje: null,
                numero: 0,
                doble: 0
            }
        },
        mounted(){

            //dibujamos nuestro parámetro
            //los parametros son string
            console.log(this.$route.params.numero);
            var paramNumero = this.$route.params.numero;

            if (paramNumero == ""){
                console.log("Sin parametro");
                this.mensaje = "No hay parametros..."
            }else {
                console.log("Parametro recibido: " + paramNumero);
                this.numero = parseInt(this.$route.params.numero);
                this.doble = this.numero * 2;
            }
        }
    }
</script>