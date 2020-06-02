
export const state = () => {
}
export const getters = {

}
export const mutations = {

}
export const actions = {
    async createPost({ commit, rootState }, post) {
        try {
            // let { user } = rootState.auth; user.user._id
            const userId = localStorage.getItem('rk_user_id')
            console.log('user', userId)
            let data = await this.$axios.$post('/post/createnewpost', {
                post,
                author: userId
            }
            );
            commit('changeNotification', {
                msg: 'New post created',
                type: 'success'
            }, { root: true })
            console.log(data)
        } catch (e) {
            console.log('error ', e)
            commit('changeNotification', {
                msg: 'Something\'s wrong. cannot create the post at the moment ',
                type: 'error'
            }, { root: true })
        }

    },
    async editPost() {
        console.log('edit post')
    },
    async getPost(context, id) {
        // get particular
        return await this.$axios.$get(`/post/${id}`)
    },
    async getPosts() {
        // get all posts
        return await this.$axios.$get('/post')
    },
    getMyPosts({ commit, rootState }) {

        let user = rootState.auth;
        console.log(user)

        /* let myPosts = this.$axios.$get('/post/getMyPosts', { id: user.user.id });
        console.log(myPosts) */
    }
}