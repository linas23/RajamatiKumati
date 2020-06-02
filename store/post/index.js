
export const state = () => {
    post: 'hello'
}
export const getters = {

}
export const mutations = {

}
export const actions = {
    async createPost({ commit }, post) {
        try {
            let data = await this.$axios.$post('/post/createnewpost', {
                post,
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
    }
}