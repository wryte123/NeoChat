import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(Antd).use(router).component("MdPreview", MdPreview).mount("#app");
