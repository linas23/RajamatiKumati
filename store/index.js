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
    removeNotification(state) {
        state.notificationconfig = {}
    }
}