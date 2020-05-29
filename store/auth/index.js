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