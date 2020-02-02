<template>
    <v-parallax src="https://cdn.discordapp.com/attachments/670957373489414154/673562819974660126/DVJ1VGU.png">
        <v-container v-for="category in categories" :key="category">
            <v-btn class="blue" block :href="'/commands/' + category">
                {{category}}
            </v-btn>
        </v-container>
    </v-parallax>
</template>
<script>
    export default {
        name: "Commands",
        data: () => ({
            categories: ["none"]
        }),
        created() {
            this.fetchData();
        },
        watch: {
            "$route": "fetchData"
        },
        methods: {
            fetchData() {
                fetch("http://bobby.flexie.xyz/api/data")
                    .then(res => res.json())
                    .then((data) => this.categories = data.commands.reduce((acc, val) =>
                        acc.includes(val.category) ? acc : [...acc, val.category], []))
                    .catch(() => null)
            }
        }
    }
</script>