import 'babel-polyfill'
import qs from 'qs'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import hzqTool from 'hzq-tool'
import hzqAxios from 'hzq-axios'
import ElementUI from 'element-ui'
import MetaInfo from 'vue-meta-info'
import echarts from 'echarts'
import './components/global'
import Clipboard from 'clipboard'

Vue.use(hzqTool, 'bjz_')
Vue.use(MetaInfo)
Vue.use(ElementUI)
Vue.use(echarts)

Vue.prototype.Clipboard = Clipboard
Vue.prototype.$echarts = echarts
Vue.prototype.$alonePageArr = store.state.alonePageArr

// 页面后退
Vue.prototype.$go = () => router.go(-1)
// 页面跳转
Vue.prototype.$to = (path, query = {}) => router.push({ path, query })

// Element 消息提示方法
Vue.prototype.$msg = (message, success = false) => {
    if (success) {
        Vue.prototype.$message({ message, type: 'success' })
    } else Vue.prototype.$message.error(message)
}
// Element 删除弹窗提示方法
Vue.prototype.$del = (params = {}) => {
    params = Object.assign(
        {
            title: '提示',
            text: '是否确认删除？',
            no() {},
            ok() {}
        },
        params
    )
    Vue.prototype
        .$confirm(params.text, params.title, {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        })
        .then(() => params.ok())
        .catch(() => params.no())
}

// 响应成功，消息处理提示
Vue.prototype.$resmsg = (res, ok, no) => {
    if (res.code === 1) {
        Vue.prototype.$msg('保存成功', 's')
        if (typeof ok === 'function') ok()
    } else {
        Vue.prototype.$msg('保存失败，请重新操作')
        if (typeof no === 'function') no()
    }
}

// 重置对象为空
Vue.prototype.$reset = (data, type = 'obj') => {
    data = Vue.prototype.$copy(data)
    if (type === 'obj') {
        for (const k in data) {
            if (typeof data[k] === 'object') {
                if (Array.isArray(data[k])) {
                    console.log(data[k])
                } else data[k] = Vue.prototype.$reset(data[k])
            } else data[k] = ''
        }
    } else if (type === 'json') {
        data = data.map(d => Vue.prototype.$reset(d))
    }
    return data
}

// 金额格式化：加 ￥ 和2位小数点
Vue.prototype.$formatPrice = val => {
    val = Number(val)
    if (isNaN(val)) val = 0
    return '￥' + val.toFixed(2)
}

Vue.use(hzqAxios, require.context('@/api-url', true, /\.js$/), {
    baseURL: 'htt',
    beforeRequest(config) {
        //     if (config.method != 'get') {
        //         config.data = qs.stringify(config.data)
        //     }
        //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        return config
    },
    respSuccess(resp) {
        // if (resp.data.code !== '0') {
        //     Vue.prototype.$msg(resp.data.msg)
        // }
    }
})

// 侧导航相关操作 start
store.state.currSideNav = Vue.prototype.$getItem('side-nav') || ''
Vue.prototype.$getNav = () => store.state.currSideNav
Vue.prototype.$setNav = nav => {
    store.commit('CHANGESIDENAV', nav)
    Vue.prototype.$setItem('side-nav', nav)
}
// 侧导航相关操作 end

// 路由tab操作 start
store.state.routerTabArr = Vue.prototype.$getItem('router-tab') || [
    {
        name: '用户中心',
        route: '/user'
    }
]
store.state.currTabIndex = Vue.prototype.$getItem('curr-tab') || 0

Vue.prototype.$setCurrTabIndex = currTabIndex => {
    store.commit('CHANGECURRTAB', currTabIndex)
    Vue.prototype.$setItem('curr-tab', currTabIndex)
}
// 路由tab操作 end

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App },
    /* 这句非常重要，否则预渲染将不会启动 */
    mounted() {
        document.dispatchEvent(new Event('render-event'))
    }
})

let routerZhName = {}
const RC = require.context('@/views', true, /\.vue$/)
RC.keys().map(fileName => {
    let r = RC(fileName).default
    routerZhName[r.name] = r.zhName || '暂无'
})
router.beforeEach((to, from, next) => {
    if (!Vue.prototype.$alonePageArr.includes(to.name)) {
        let name = to.name
        let isExist = store.state.routerTabArr.findIndex(val => {
            return val.route === to.path
        })
        if (isExist === -1) {
            store.commit('ROUTERTABPUSH', {
                name: routerZhName[name],
                route: to.path
            })
            isExist = store.state.routerTabArr.length - 1
        }
        Vue.prototype.$setCurrTabIndex(isExist)
        Vue.prototype.$setNav(name)
    }
    next()
})
