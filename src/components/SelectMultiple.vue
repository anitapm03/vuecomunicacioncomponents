<template>
    <div>
        <h1>Selección múltiple</h1>

        <form v-om:submit.prevent="mostrarSeleccionados()" >
            <select size="8" multiple v-model="opcionesSeleccionadas">
                <option v-for="opt in options" :key="opt">
                    {{opt}}
                </option>
            </select>

            <button>Mostrar seleccionados</button>
        </form>

        <h3 style="color:blue">{{seleccionados}}</h3>

        
    </div>
</template>

<script>
//import Multiselect from 'vue-multiselect';

    export default {
        name: "SelectMultiple",
        components: {
            
        },
        data() {
            return{
                options: ["A", "B", "C", "D", "E", "F", "opcion T"],
                opcionesSeleccionadas:[],
                seleccionados: ""
            }
        },
        methods:{
            mostrarSeleccionados(){
                this.seleccionados = "";
                for (var opt of this.opcionesSeleccionadas){
                    this.seleccionados += opt + ", ";
                }
            }
        }
    }
</script>