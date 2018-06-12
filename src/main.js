// Importanje vse potrebnih datotek
import Vue from 'vue'
// Main vue file
import App from './App.vue'
// Router za linke/route
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
});

// Inicializacija vue aplikacije
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})