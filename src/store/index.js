import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        loading: false,
        routerTabArr: [
            {
                name: '用户中心',
                route: '/user'
            }
        ],
        // routerTab的下标
        currTabIndex: 0,
        currSideNav: '',
        alonePageArr: ['login', 'page-error', 'not-find']
    },
    mutations
})
