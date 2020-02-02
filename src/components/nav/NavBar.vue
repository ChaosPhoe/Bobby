<template>
    <v-card>
        <v-toolbar
                tile
        >
            <v-app-bar-nav-icon>
                <img class="rounded"
                     src="https://cdn.discordapp.com/avatars/665956547020587010/82992e1662c078ff29dc29625619e84b.png"
                     height="40"
                     alt/>
            </v-app-bar-nav-icon>
            <v-toolbar-title><a href="/">Bobby</a></v-toolbar-title>
            <v-spacer></v-spacer>
            <NavButtons/>
        </v-toolbar>
    </v-card>
</template>

<script>
    import NavButtons from "./NavButtons";

    export default {
        name: "NavBar",
        components: {
            NavButtons
        }
    }
</script>
<style scoped>
    .rounded {
        border-radius: 50%;
    }
</style>