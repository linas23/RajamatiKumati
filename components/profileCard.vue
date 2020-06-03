<template>
  <div>
    <v-card>
      <v-card-title v-if="isEdit">Edit profile</v-card-title>
      <v-card-title v-else>Create profile</v-card-title>
      <form enctype="multipart/form-data">
        <v-card-text>
          <v-text-field label="Name" v-model="newProfile.username"></v-text-field>
          <v-text-field label="Email" v-model="newProfile.email"></v-text-field>
          <v-text-field label="Address" v-model="newProfile.address"></v-text-field>
          <v-textarea
            label="Bio"
            controlType="textarea"
            auto-grow
            counter="111"
            v-model="newProfile.bio"
          ></v-textarea>
          <v-text-field label="website" v-model="newProfile.website"></v-text-field>
          <!-- <v-text-field label="Profile Image" v-model="newProfile.image" v-if="newProfile.image"></v-text-field>
          <v-file-input v-else>{{newProfile.image}}</v-file-input>-->
          <!-- <input type="file" ref="avatar" @change="selectFile" /> -->
        </v-card-text>
        <v-card-actions>
          <v-btn @click="handleProfile">
            <v-icon left>mdi-content-save-edit</v-icon>
            <span v-if="isEdit">Update</span>
            <span v-else>Create</span>
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  props: {
    profile: {
      type: Object,
      required: false
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      newProfile: this.profile
        ? { ...this.profile }
        : {
            username: "",
            email: "",
            address: "",
            bio: "",
            website: "",
            avatar: null,
            userid: ""
          }
    };
  },
  computed: {
    ...mapGetters({ userid: "auth/userid" })
  },
  methods: {
    ...mapActions({
      create: "profile/createProfile",
      edit: "profile/editProfile"
    }),
    ...mapMutations({
      setProfile: "profile/SET_PROFILE"
    }),
    handleProfile() {
      if (this.isEdit) {
        //edit the profile
        this.setProfile(this.newProfile);
        this.edit(this.newProfile).then(() => {
          this.$router.push("/me");
        });
      } else {
        // create the profile
        this.newProfile.userid = this.userid;
        console.log(this.newProfile);
        this.create(this.newProfile).then(() => {
          this.$router.push("/me");
        });
      }
    },
    selectFile() {
      this.newProfile.avatar = this.$refs.avatar.files[0];
    }
  }
};
</script>

<style>
</style>