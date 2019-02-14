import Vue from 'vue'
import Router from 'vue-router'
import hzqRouter from 'hzq-router'
Vue.use(Router)

let routes = hzqRouter({
    redirect: '/login',
    rc: require.context('@/views', true, /\.vue$/)
})
export default new Router({ mode: 'history', routes })
