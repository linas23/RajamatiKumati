
export const state = () => ({
    user: null
})
export const getters = {
    userid(state) {
        return state.user.user.id;
    }
}
export const mutations = {

    SET_USER(state, user) {
        console.log('i am here')
        console.log(user)
        state.user = { ...user }
        console.log(state.user)
    },
    REMOVE_USER(state) {
        state.user = null
    }
}
export const actions = {
    async signup({ commit, dispatch }, { email, password, confirmPassword }) {
        try {
            let user = await this.$axios.$post('/user/signup', {
                email, password, confirmPassword
            })
            commit('SET_USER', user);
            localStorage.setItem('rk_user_id', user.user.id)
            let notice = {
                msg: 'you are signed up and logged in successfully.',
                type: 'success'
            }
            dispatch('notification', notice)

            return user;
        } catch (e) {
            console.log('error occured 👀👀👀')
            let notice = {
                msg: 'something went wrong.  Cannot sign in at the moment',
                type: 'error'
            }
            dispatch('notification', notice)
            throw e
        }
    },
    async login({ commit, dispatch }, { email, password }) {
        try {
            let user = await this.$axios.$post('/user/login', {
                email, password
            })
            commit('SET_USER', user);

            localStorage.setItem('rk_user_id', user.user.id)

            let notice = {
                msg: 'you are logged in successfully.',
                type: 'success'
            }
            dispatch('notification', notice)


        } catch (e) {
            let notice = {
                msg: 'something went wrong. Cannot log in at the moment',
                type: 'error'
            }
            dispatch('notification', notice)
            throw e
        }
    },
    logout({ commit }) {
        commit('REMOVE_USER')
        localStorage.setItem('rk_user_id', '')
    },
    notification({ commit }, notice) {
        commit('changeNotification', notice, { root: true })
    }
}