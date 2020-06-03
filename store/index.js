export const state = () => ({
    notificationconfig: {}
})
export const getters = {
    notification(state) {
        return state.notificationconfig
    }
}
export const mutations = {
    changeNotification(state, { msg, type }) {
        state.notificationconfig = {
            msg, type
        }
    },

}
export const actions = {
    /* async nuxtServerInit({ dispatch }, ctx) {
        console.log(ctx.cookie)
        await dispatch('getUserInitially')
    },
    getUserInitially({ commit }) {
        let user = localStorage.getItem('rk_user_id')
        console.log(user)

    } */
}