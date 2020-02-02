<template>
    <v-simple-table fixed-header dark>
        <thead>
        <tr>
            <th class="text-left">
                Place
            </th>
            <th class="text-left">
                Name
            </th>
            <th class="text-left">
                XP
            </th>
            <th class="text-left">
                Level
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="member in members" :key="member.name">
            <td>
                {{member.rank}}
            </td>
            <td>
                {{member.name}}
            </td>
            <td>
                {{member.xp}}
            </td>
            <td>
                {{member.level}}
            </td>
        </tr>
        </tbody>
    </v-simple-table>
</template>
<script>
    export default {
        name: "Leaderboard",
        data: () => ({
            members: "None"
        }),
        created() {
            this.fetchData();
        },
        watch: {
            "$route": "fetchData"
        },
        methods: {
            fetchData() {
                fetch("http://bobby.flexie.xyz/api/leaderboard")
                    .then(res => res.json())
                    .then((data) => this.members = data)
                    .catch((err) => this.members = err);
            }
        }
    }
</script>