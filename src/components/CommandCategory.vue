<template>
    <v-data-table
            :headers="headers"
            :items="commands"
            single-expand
            :expanded.sync="expanded"
            item-key="name"
            show-expand
            class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Commands [{{$route.params.category[0].toUpperCase() +
                    $route.params.category.slice(1)}}]
                </v-toolbar-title>
            </v-toolbar>
        </template>
        <template v-slot:expanded-item="{ headers }">
            <td :colspan="headers.length">There's nothing here bruh</td>
        </template>
    </v-data-table>
</template>
<script>
    export default {
        name: "Commands",
        data: () => ({
            commands: ["none"],
            headers: [
                {
                    text: "Name",
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                {text: 'Usage', value: 'options.usage'},
                {text: 'Example', value: 'options.example'},
                {text: 'Description', value: 'options.description'},
                {text: 'Aliases', value: 'options.aliases'},
                {text: 'Cooldown (ms)', value: 'options.cooldown'},
                {text: '', value: 'data-table-expand'},
            ]
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
                    .then((data) => this.commands = data.commands.filter((cmd) =>
                        cmd.category === this.$route.params.category))
                    .catch(() => null)
            }
        }
    }
</script>