<template>
  <div>
    <!-- intro -->
    <v-card height="100vh" tile class="d-flex flex-column align-center justify-center main">
      <v-card-title class="display-3" data-aos="fade-up">Welcome to Rajamati Kumati</v-card-title>
      <v-container>
        <p class="display-1 text-center" data-aos="fade-up" data-aos-delay="111">
          Rajamati Kumati is the platform we intend to provide for sharing
          photos within the community to help promoting the cultures, jatras,
          anything worth saving for future generations. Here, you can share
          information, any content related for providing the viewers the detailed
          knowledge of the practices in our community.
        </p>
      </v-container>
    </v-card>

    <!-- featured posts -->
    <v-container>
      <div class="display-1">Featured posts</div>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" v-for="(post,index) in featured" :key="index">
          <postCard :post="post" data-aos="fade-up"></postCard>
        </v-col>
      </v-row>
    </v-container>
    <!-- any notice  -->
    <div v-if="notice">
      <noticeBoard :notice="notice" data-aos="zoom-in-up"></noticeBoard>
    </div>
    <!-- youtube videos -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" v-for="(src,index) in ytSource" :key="index">
          <ytVideos :source="src" data-aos="slide-right"></ytVideos>
        </v-col>
      </v-row>
    </v-container>
    <v-card height="222" tile class="warning d-flex justify-space-around align-center flex-column">
      <v-card-title>Join the community</v-card-title>
      <v-card-subtitle
        class="text-center"
      >Contribute to insure that the future generation is aware about the practices of our society.</v-card-subtitle>
      <v-card-actions>
        <v-btn to="/auth/signup" class="error darken-4">Join today</v-btn>
      </v-card-actions>
    </v-card>
    <scrollTop></scrollTop>
  </div>
</template>

<script>
import AOS from "aos";
import scrollTop from "~/components/scrollTop";
import ytVideos from "~/components/iframe.vue";
import postCard from "~/components/postCard.vue";
import noticeBoard from "~/components/noticeBoard";
export default {
  mounted() {
    AOS.init({ delay: 1111, mirror: true });
  },
  components: {
    ytVideos,
    postCard,
    noticeBoard,
    scrollTop
  },
  data() {
    return {
      ytSource: [
        "https://www.youtube.com/embed/EkD7tkTiacQ",
        "https://www.youtube.com/embed/9GakoPmWIik",
        "https://www.youtube.com/embed/Lj8YtvG3m8I",
        "https://www.youtube.com/embed/5HpPviRXayo"
      ],
      featured: [
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
        }
      ],
      notice: {
        title: "lorem impsum",
        description:
          "slkdfjasdkfhdkjsghfkdjghjkdsfhkdsjlgfhfdkjghjdkfgslkdfjasdkfhdkjsghfkdjghjkdsfhkdsjlgfhfdkjghjdkfgslkdfjasdkfhdkjsghfkdjghjkdsfhkdsjlgfhfdkjghjdkfgslkdfjasdkfhdkjsghfkdjghjkdsfhkdsjlgfhfdkjghjdkfgslkdfjasdkfhdkjsghfkdjghjkdsfhkdsjlgfhfdkjghjdkfgslkdfjasdkfhdkjsghfkdjghjkdsfhkdsjlgfhfdkjghjdkfgslkdfjasdkfhdkjsghfkdjghjkdsfhkdsjlgfhfdkjghjdkfg",
        date: "2076/02/16",
        author: "jay nepal"
      }
    };
  }
};
</script>

<style>
.main {
  background-image: url("https://live.staticflickr.com/1859/30244419878_4291c7b364_b.jpg");
  background-position: center;
  background-size: cover;
  color: white !important;
  /* filter: brightness(88%); */
  text-shadow: 2px 2px rgb(37, 37, 37);
}
</style>