<template>
    <v-app>
        <NavBar/>
            <router-view/>
    </v-app>
</template>

<script>
    import NavBar from "./components/nav/NavBar";

    export default {
        name: 'App',

        components: {
            NavBar,
        },
        created() {
            document.title = "Bobby - " + window.location.pathname.split("/")[1];
        }
    };
</script>
