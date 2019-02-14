export default {
    LOADING(state, loading) {
        state.loading = loading
    },
    CHANGESIDENAV(state, currSideNav) {
        state.currSideNav = currSideNav
    },
    ROUTERTABPUSH(state, tab) {
        state.routerTabArr.push(tab)
        window.sessionStorage.setItem(
            'bjz_router-tab',
            JSON.stringify(state.routerTabArr)
        )
    },
    ROUTERTABDEL(state, index) {
        state.routerTabArr.splice(index, 1)
        window.sessionStorage.setItem(
            'bjz_router-tab',
            JSON.stringify(state.routerTabArr)
        )
    },
    CHANGECURRTAB(state, currTabIndex) {
        state.currTabIndex = currTabIndex
    }
}
