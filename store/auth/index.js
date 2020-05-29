
export const state = () => ({
    profile: {
        name: "linas",
        email: "desemaru77@gmail.com",
        location: "bhaktapur",
        bio: "loremipsudjfskloremipsudjfskloremipsudjfskloremipsudjfsk",
        website: "https://portfolio.com",
        image: "https://cdn.vuetifyjs.com/images/john.jpg"
    }
})
export const mutations = {
    SET_PROFILE: (state, profile) => {
        console.log({ ...profile })
        state.profile = profile
    }
}
export const actions = {
    async signup(context, { email, password, confirmPassword }) {
        try {
            let user = await this.$axios.$post('/user/signup', {
                email, password, confirmPassword
            })
            console.log(user)
            return user;
        } catch (e) {
            console.log(e)
            throw e
        }
    },
    async login(context, { email, password }) {
        console.log(email)
        try {
            let user = await this.$axios.$post('/user/login', {
                email, password
            })
            console.log(user)
        } catch (e) {
            throw e
        }
    }
}