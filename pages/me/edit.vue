<template>
  <v-container>
    <v-card>
      <v-card-title>Edit profile</v-card-title>
      <v-form ref="updateBio">
        <v-card-text>
          <v-text-field label="Name" v-model="profile.name" :value="profile.value"></v-text-field>
          <v-text-field label="Email" v-model="profile.email"></v-text-field>
          <v-text-field label="Location" v-model="profile.location"></v-text-field>
          <v-textarea
            label="Bio"
            controlType="textarea"
            auto-grow
            counter="111"
            v-model="profile.bio"
          ></v-textarea>
          <v-text-field label="website" v-model="profile.website"></v-text-field>
          <v-text-field label="Profile Image" v-model="profile.image"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="updateMe">
            <v-icon left>mdi-content-save-edit</v-icon>Update
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import baseInput from "~/components/baseInput";
export default {
  components: {
    baseInput
  },
  data() {
    return {
      /* profile: {},
      newProfile: this.profile
        ? { ...this.profile }
        : {
            name: "",
            email: "",
            location: "",
            bio: "",
            website: "",
            image: ""
          } */
      profile: {
        name: "linas",
        email: "desemaru77@gmail.com",
        location: "bhaktapur",
        bio: "loremipsudjfskloremipsudjfskloremipsudjfskloremipsudjfsk",
        website: "https://portfolio.com",
        image: "https://cdn.vuetifyjs.com/images/john.jpg"
      }
    };
  },
  methods: {
    updateMe() {
      console.log(this.profile);
    }
  },
  // computed: {
  /* profile() {
      return this.$store.state.auth.profile;
    } */
  // },
  created() {
    // this.profile = this.$store.state.auth.profile;
  }
  // asyncData({ store }) {
  //   // store the available profile data in the store
  //   // return { profile: store.state.auth.profile };
  // }
};
</script>

<style>
</style>