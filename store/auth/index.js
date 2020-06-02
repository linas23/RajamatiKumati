
export const state = () => ({
    profile: {},
    user: {}
})
export const mutations = {
    SET_PROFILE: (state, profile) => {
        console.log({ ...profile })
        state.profile = profile
    },
    SET_USER(state, user) {
        console.log('i am here')
        console.log(user)
        state.user = user
    },
    REMOVE_USER(state) {
        state.user = null
    }
}
export const actions = {
    async signup({ commit }, { email, password, confirmPassword }) {
        try {
            let user = await this.$axios.$post('/user/signup', {
                email, password, confirmPassword
            })
            console.log(user)
            let notice = {
                msg: 'you are signed up successfully.',
                type: 'success'
            }
            commit('changeNotification', notice, { root: true })
            return user;
        } catch (e) {
            console.log('error occured 👀👀👀')
            let notice = {
                msg: 'something went wrong.  Cannot sign in at the moment',
                type: 'error'
            }
            commit('changeNotification', notice, { root: true })
            throw e
        }
    },
    async login({ commit }, { email, password }) {
        try {
            let user = await this.$axios.$post('/user/login', {
                email, password
            })
            console.log(user)
            commit('SET_USER', user);
            console.log(user)

            localStorage.setItem('rk_user_id', user.user.id)

            let notice = {
                msg: 'you are logged in successfully.',
                type: 'success'
            }
            commit('changeNotification', notice, { root: true })
        } catch (e) {
            let notice = {
                msg: 'something went wrong. Cannot log in at the moment',
                type: 'error'
            }
            commit('changeNotification', notice, { root: true })
            throw e
        }
    },
    logout({ commit }) {
        commit('REMOVE_USER')
        localStorage.setItem('rk_user_id', '')
    }
}