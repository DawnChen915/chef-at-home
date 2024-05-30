
import api from './api'
import util from './common/util'
import store from './store'
import {
	createSSRApp
} from "vue";
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	app.use(store)
	return {
		app,
	};
}
