import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Forgot from "./components/Forgot"
Vue.use(Router)

  const routes = [
  {
    path: '/',
    component: Home 
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },

  {
    path: '/forgot',
    component: Forgot
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default(router)