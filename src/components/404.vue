<template>
    <v-container
            class="text-center"
            fill-height
            style="height: calc(100vh - 58px);"
    >
        <v-row align="center">
            <v-col>
                <h1 class="display-2 primary--text">Whoops, 404</h1>
                <h2 class="display-2 error--text">How did you even get here?!</h2>
                <p>The page you were looking for does not exist</p>

                <v-btn
                        color="primary"
                        outlined
                >
                    <a href="/">Get me out of here!</a>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name: "NotFound"
    }
</script>