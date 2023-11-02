<template>
    <div>
        <h1 style="color: red">Hijo {{nombredeporte}}</h1>

        <button @click="seleccionarFavHijo()">Favorito!</button>
    </div>
</template>

<script>
    export default {
        name: "HijoDeporte",
        props: [ "nombredeporte" ],
        methods: {
            seleccionarFavHijo () {
                console.log("Favorito selecionado");
                //realizamos la llamada al parent
                //tenemos la posibilidad de enviar parámetros 
                //al metodo padre a continuación de la llamada 
                //y separados por comas
                this.$emit("seleccionarFavPadre", this.nombredeporte);

            }
        },
        mounted (){
            //console.log(this.nombredeporte);
        }
    }
</script>