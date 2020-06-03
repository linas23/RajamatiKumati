<template>
  <v-container>
    <v-card>
      <v-row align="center">
        <v-col cols="12" md="2">
          <v-avatar size="111" class="ml-10">
            <img class="avatar" :src="profile.avatar" />
          </v-avatar>
        </v-col>
        <v-col cols="12" md="8" class="py-0">
          <v-card-text class="headline pt-4">{{profile.username}}</v-card-text>
          <div class="d-flex flex-sm-row justify-space-between flex-column">
            <v-card-text>Email : {{profile.email}}</v-card-text>
            <v-card-text>
              <v-icon>mdi-map-marker</v-icon>
              {{profile.address}}
            </v-card-text>
          </div>
          <v-card-text>website :{{profile.website}}</v-card-text>
          <v-card-text>Bio :{{profile.bio}}</v-card-text>
        </v-col>
        <v-col cols="12" md="2" class="pa-0" align-self="center">
          <v-card-text>
            <v-btn text @click="editMe">
              <v-icon x-large>mdi-account-edit</v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5" tile>
      <v-card-title>Your posts</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="(post,index) in yourPosts" :key="index">
            <postCard :post="post"></postCard>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import postCard from "~/components/postCard";
import { mapMutations } from "vuex";
export default {
  components: {
    postCard
  },
  data() {
    return {
      yourPosts: [
        {
          id: 1,
          img:
            "https://thehimalayantimes.com/wp-content/uploads/2017/04/Sindoor-Jatra-450x320.jpg",
          text: "lorem ipsum"
        },
        {
          id: 2,
          img:
            "https://thehimalayantimes.com/wp-content/uploads/2017/04/Sindoor-Jatra-450x320.jpg",
          text: "lorem ipsum"
        },
        {
          id: 3,
          img:
            "https://thehimalayantimes.com/wp-content/uploads/2017/04/Sindoor-Jatra-450x320.jpg",
          text: "lorem ipsum"
        },
        {
          id: 3,
          img:
            "https://thehimalayantimes.com/wp-content/uploads/2017/04/Sindoor-Jatra-450x320.jpg",
          text: "lorem ipsum"
        }
      ]
    };
  },
  methods: {
    ...mapMutations({ setProfile: "profile/SET_PROFILE" }),
    editMe() {
      this.setProfile(this.profile);
      this.$router.push({
        path: "/me/edit"
      });
    }
  },
  async asyncData({ store }) {
    let { data: profile } = await store.dispatch("profile/getProfile");
    // await store.dispatch("post/getMyPosts");
    console.log(profile);
    return { profile };
  }
};
</script>

<style lang="scss">
.avatar {
  padding: 5px;
  background-image: linear-gradient(to bottom, #13b6df 0%, #4bcd7d 100%);
}
</style>