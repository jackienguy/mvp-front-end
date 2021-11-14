<template>
     <v-navigation-drawer
        v-model="drawer"
        width="30vw"
        app
        color="teal lighten-3"
    >
        <v-parallax src="https://images.unsplash.com/photo-1616041452602-fc964851c753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></v-parallax>
        <h1 id="logo">OPP</h1>
        <p id="slogan">Discover new opportunities for you</p>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data() {
            return {
                drawer: null,
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    #logo {
        color: yellow;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 5em;
        text-align: center;
    }
    #slogan {
        color: yellow;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 1.5em;
        text-align: center;
    }
</style>