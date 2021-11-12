import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.config.productionTip = false

const token = localStorage.getItem('token')
require('dotenv').config()
if (token) Axios.defaults.headers['authorization'] = 'Bearer ' + token

Vue.use(Vuex)

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')
