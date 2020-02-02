import Vue from "vue";
import Router from "vue-router";
import Main from "../components/Main";
import Leaderboard from "../components/Leaderboard";
import Commands from "../components/Commands";
import CommandCategory from "../components/CommandCategory";
import NotFound from "../components/404";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/leaderboard",
            component: Leaderboard
        },
        {
            path: "/commands",
            component: Commands
        },
        {
            path: "/commands/:category",
            component: CommandCategory
        },
        {
            path: "/",
            component: Main
        },
        {
            path: "*",
            component: NotFound
        }
    ]
})