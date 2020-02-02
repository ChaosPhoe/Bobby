<template>
    <v-content>
        <section>
            <v-parallax
                    tag="img"
                    src="https://cdn.discordapp.com/attachments/670957373489414154/673562819974660126/DVJ1VGU.png"
                    strength="20"
                    type="depth"
                    height="600"
            >
                <v-layout column align-center justify-center class="white--text">
                    <h1 class="white--text mb-2 display-1 text-xs-center"
                        style="font-weight: 900; text-shadow: 3px 2px #000000">Bobby the Multipurpose bot for Flexie's
                        Community</h1>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout
                    column
                    wrap
                    class="my-5"
                    align-center
            >
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">Mainly created to bring more Fun to the Community!
                        </h2>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">developer_mode</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Developer</div>
                                    </v-card-title>
                                    <v-card-text>
                                        The Frontend and Backend just as the Bot itself were created by
                                        Chaos_Phoe(Chaos_Phoe#0001)
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Speed</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Our bot is hosted on a fast dedicated server so you don't waste time waiting for
                                        responses!
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">settings</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Settings</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Features such as Logs or Tags are easy to configure
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section>
            <v-parallax
                    src="https://cdn.discordapp.com/attachments/520380091444887562/673377178658013195/FB_IMG_1580328079712.jpg"
                    height="380">
                <v-layout column align-center justify-center>
                    <h1>I just wanted to add this part because I am amazing</h1>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout
                    column
                    wrap
                    class="my-5"
                    align-center
            >
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">Information
                        </h2>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4>
                                <v-card>
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text">contacts</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Users</div>
                                    </v-card-title>
                                    <v-card-text>
                                        <h1>{{data.users}} Total Users</h1>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card>
                                    <v-card-text>
                                        <v-icon x-large class="blue--text">flash_on</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Commands</div>
                                    </v-card-title>
                                    <v-card-text>
                                        <h1>{{data.commandCount}} Total Commands</h1>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card>
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text">settings</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Uptime</div>
                                    </v-card-title>
                                    <v-card-text>
                                        <h1>{{data.uptime}} Total Uptime</h1>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>
    </v-content>
</template>
<script>

    export default {
        name: "Main",
        data: () => ({
            data: false
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
                    .then((data) => this.data = data)
            }
        }
    }
</script>