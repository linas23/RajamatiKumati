
export const state = () => {
    post: 'hello'
}
export const getters = {

}
export const mutations = {

}
export const actions = {
    async createPost(context, data) {

        try {
            console.log(data)
            /* let data = await this.$axios.$post('/post/createnewpost', {
                post,
                coverImage
            }
            ); */
            // console.log(data)
        } catch (e) {
            console.log('error ', e)
        }

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