
export const state = () => ({
    profile: {

    },
})

export const mutations = {
    SET_PROFILE: (state, profile) => {
        console.log({ ...profile })
        state.profile = profile
    },
}
export const actions = {
    async createProfile({ commit }, profile) {
        await this.$axios.post('/profile/create', profile)
        let notice = {
            msg: 'Your profile have been created successfully.',
            type: 'success'
        }
        commit('changeNotification', notice, { root: true })

    },
    async editProfile({ commit }, profile) {
        await this.$axios.patch('/profile/update', { ...profile })
        let notice = {
            msg: 'Your profile have been edited successfully.',
            type: 'success'
        }
        commit('changeNotification', notice, { root: true })
    },
    async getProfile({ rootState }) {
        let { user: { user } } = rootState.auth
        const userid = user.id
        console.log(userid)
        return await this.$axios.$get(`/profile/${userId}`)
    }

}