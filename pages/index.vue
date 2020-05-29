<template>
  <div>
    <!-- intro -->
    <v-card height="100vh" tile flat class="text-center">
      <v-card-title class="headline">Welcome to Rajamati Kumati</v-card-title>
      <v-card-text>
        Rajamati Kumati is the platform we intend to provide for sharing
        photos within the community to help promoting the cultures, jatras,
        anything worth saving for future generations. Here, you can share
        information, any content related for providing the viewers the detailed
        knowledge of the practices in our community.
      </v-card-text>
    </v-card>

    <!-- featured posts -->
    <v-container>
      <div class="display-1">Featured posts</div>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" v-for="(post,index) in featured" :key="index">
          <postCard :post="post"></postCard>
        </v-col>
      </v-row>
    </v-container>
    <!-- any notice  -->
    <div v-if="notice">
      <noticeBoard :notice="notice"></noticeBoard>
    </div>
    <!-- youtube videos -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" v-for="(src,index) in ytSource" :key="index">
          <ytVideos :source="src"></ytVideos>
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
  </div>
</template>

<script>
import ytVideos from "~/components/iframe.vue";
import postCard from "~/components/postCard.vue";
import noticeBoard from "~/components/noticeBoard";
export default {
  components: {
    ytVideos,
    postCard,
    noticeBoard
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
</style>