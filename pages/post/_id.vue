<template>
  <div>
    <v-card tile height="100vh" data-aos="zoom-in">
      <v-img
        height="100%"
        cover
        position="center center"
        class="align-center text-center"
        src="https://images.unsplash.com/photo-1586100345684-a135906ef03c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      >
        <v-card-text class="display-1 white--text">{{post.title}}</v-card-text>
        <v-card-subtitle class="white--text">{{post.coverTitle}}</v-card-subtitle>
      </v-img>
    </v-card>
    <!-- detail -->
    <v-img src="/texture_paper.svg">
      <v-container data-aos="slide-up">
        <v-row align="center">
          <v-col cols="1" class="text-center">
            <!-- speed dial links -->
            <speedDial id="share"></speedDial>
          </v-col>
          <v-col cols="11">
            <v-row>
              <v-col cols="6">
                <v-avatar class="profile" color="grey" size="70">
                  <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>

                <span class="title">Marcus Obrien</span>
              </v-col>
            </v-row>
            <div>{{post.date | momentDate}}</div>
            <div class="description subtitle-1 mt-4" v-html="post.description"></div>
            <div>
              <div class="mt-5">
                <div class="subtitle-2">Similar events</div>
                <div class="d-flex">
                  <v-btn class="mr-2 warning" v-for="(tag,index ) in post.tags" :key="index">{{tag}}</v-btn>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <!-- scroll to top -->
    <compScroll></compScroll>
  </div>
</template>

<script>
import speedDial from "~/components/speedDial";
import compScroll from "~/components/scrollTop";
import postCard from "~/components/postCard";
import moment from "moment";
import AOS from "aos";
export default {
  components: {
    speedDial,
    compScroll,
    postCard
  },
  mounted() {
    AOS.init();
  },
  data() {
    return {
      recommends: [
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
  async asyncData(ctx) {
    let { post } = await ctx.store.dispatch("post/getPost", ctx.params.id);
    console.log(post);
    return { post };
  },
  filters: {
    momentDate(value) {
      return moment(value).format("LL");
    }
  }
};
</script>

<style>
.description img {
  width: 100%;
}
#share {
  position: sticky;
}
</style>