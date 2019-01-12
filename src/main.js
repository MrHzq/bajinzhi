import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import hzqTool from 'hzq-tool'
import hzqAxios from 'hzq-axios'
import MetaInfo from 'vue-meta-info'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './components/global'

Vue.use(hzqTool)
Vue.use(MetaInfo)
Vue.use(ElementUI)

Vue.use(hzqAxios, require.context('@/apiUrl', true, /\.js$/), {
    baseURL: 'https://open-api.beone.app'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>',
    /* 这句非常重要，否则预渲染将不会启动 */
    mounted() {
        document.dispatchEvent(new Event('render-event'))
    }
})
