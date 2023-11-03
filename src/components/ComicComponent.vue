<template>
    <div>
        <h3 style="color:red">{{comic.titulo}}</h3>
        <img :src="comic.imagen" />
        <p>{{comic.descripcion}}</p>

        <h3 :class="{
            rojo: comic.year <= 2000,
            verde: comic.year > 2000
        }">
            Año: {{comic.year}}
        </h3>

        <button @click="seleccionarFavorito()">Favorito</button>
        <button @click="eliminarComic()">Eliminar</button>
    </div>
</template>

<script>
    export default {
        name: "ComicComponent",
        props:["comic", "index"],
        methods: {
            seleccionarFavorito(){
                this.$emit("seleccionarFavorito", this.comic);
            },
            eliminarComic(){
                this.$emit("eliminarComic", this.index)
            }
        }
    }
</script>

<style>
    @import "./../assets/css/estiloComics.css";
</style>