import {createApp} from 'vue';
import './style.scss';
import App from './App.vue';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import Home from "./pages/Home.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import {createPinia} from "pinia";
import Extensions from "./pages/Extensions.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
// @ts-ignore
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css'
import Vips from "./pages/Vips.vue";

library.add(fas, fab);

const routes = [
    {path: '/', component: Home},
    {path: '/exts', component: Extensions},
    {path: '/vips', component: Vips},
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

const pinia = createPinia();

createApp(App)
    .use(VueTippy)
    .use(Toast)
    .use(pinia)
    .use(router)
    .mount('#app');
