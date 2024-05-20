import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

const app = createApp(App);
app.use(router).component("MdPreview", MdPreview);
