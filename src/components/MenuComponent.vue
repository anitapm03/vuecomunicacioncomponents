<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home | </router-link>
            </li>
            <li>
                <router-link to="/deportes">Deportes | </router-link>
            </li>
            <li>
                <router-link to="/sumas">Sumas | </router-link>
            </li>
            <li>
                <router-link to="/comics">Comics | </router-link>
            </li>
        </ul>
        
    </div>
</template>

<script>
    export default {
        name: "MenuComponent",
        data() {
            return {

            }
        }
    }
</script>

<style>
    ul#menu li {
        display: inline;
    }
</style>