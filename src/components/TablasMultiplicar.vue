<template>
    <div>
        <h1>Tabla Multiplicar</h1>

        <table border>
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="html">      
            </tbody>
        </table>

        <button @click="redirectMenu()">Volver al menú</button>
    </div>
</template>

<script>
    export default{
        name: "TablasMultiplicar",
        watch: {
            '$route.params.numero'(nextVal, oldVal){
                //solo hacemos las acciones cuando nuestro parámetro cambie
                if (nextVal != oldVal){
                    this.crearTabla(nextVal);
                }
            }
        },
        methods: {
            crearTabla(num){
                this.html = "";

                for (var i = 0; i < 10; i++){

                    var op = num + " * " + i;
                    var res = num * i;

                    this.html += "<tr>";
                    this.html += "<td>"+op+"</td>";
                    this.html += "<td>"+res+"</td>";
                    this.html += "</tr>";
                }
            },
            redirectMenu(){
                this.$router.push("/tablas");
            }
        },
        mounted(){
            var num = this.$route.params.numero;
            this.crearTabla(num);
        },
        data(){
            return{
                html: ""
            }
        }
    }
</script>