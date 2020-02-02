<template>
    <div>
        <v-btn outlined color="deep-purple">
            <a href="/">Home</a>
        </v-btn>
        <v-btn tile outlined color="deep-purple accent-4">
            <a href="/commands">Commands</a>
        </v-btn>
        <v-btn tile outlined color="deep-purple accent-4">
            <a href="/leaderboard">Leaderboard</a>
        </v-btn>
        <v-btn tile outlined color="deep-purple accent-4">
            <a href="https://discord.gg/d7Mqfsr">Server</a>
        </v-btn>
    </div>
</template>
<script>
    export default {
        name: "NavButtons",
        data: () => ({
            buttonHref: "/api/login",
            buttonText: "Login"
        }),
        mounted() {

        }
    }
</script>
<style>
    a {
        text-decoration: none;
    }

    button {
        margin: 5px;
    }
</style>