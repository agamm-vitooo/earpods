import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App)

AOS.init({
    once: true,
});
createApp(App).mount("#app");