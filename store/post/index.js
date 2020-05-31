
export const state = () => {
    post: 'hello'
}
export const getters = {

}
export const mutations = {

}
export const actions = {
    async createPost(context, { post, }) {
        console.log('create post', post)
        let data = await this.$axios.$post('/post/createnewpost', {
            post,
        });
        console.log(data)
    },
    async editPost() {
        console.log('edit post')
    },
    async getPost() {
        // get particular
    },
    async getPosts() {
        // get all posts
    }
}