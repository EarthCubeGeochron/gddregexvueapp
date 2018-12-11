import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      name: 'root'
    },
    {
      path: "/:dsid/",
      component: App,
      props: true
    }
  ]
})

new Vue({
  render: h => h(App),
}).$mount('#app')
