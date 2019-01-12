import Vue from 'vue'
import Router from 'vue-router'
import hzqRouter from 'hzq-router'
Vue.use(Router)

let routes = hzqRouter({
    rc: require.context('@/views', true, /\.vue$/),
    redirect: '/login'
})
export default new Router({ mode: 'history', routes })
