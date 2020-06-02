<template>
  <div>
    <v-card :style="[gradient,color]" tile class="mb-4">
      <v-card-text>
        <v-row justify="start" align="center">
          <v-col cols="1">
            <v-avatar tile>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-col>
          <v-col class="white--text">
            <div class="title">linas</div>
            <!-- <div>{{post.date.toDateString()}}</div> -->
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-subtitle class="my-0 pt-0">
        <v-row class="pa-0 ma-0" justify="start">
          <v-col cols="1" class="pa-0 ma-0" v-for="tag in post.tags" :key="tag">
            <v-btn class="white--text" text>{{tag}}</v-btn>
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-img
        height="333"
        contain
        src="https://images.unsplash.com/photo-1516946234661-51230cd6176a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      ></v-img>
      <v-card-title>{{post.title}}</v-card-title>
      <v-card-text class="white--text" v-html="this.$options.filters.shortenIt(post.description)"></v-card-text>
      <v-card-actions class="text-center">
        <v-btn :to="'post/'+post._id">continue reading</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      gradients: [
        "linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))",
        "linear-gradient(to right, rgb(101, 153, 153), rgb(244, 121, 31))",
        "linear-gradient(to right, rgb(32, 0, 44), rgb(203, 180, 212))",
        "linear-gradient(to right, rgb(51, 51, 51), rgb(221, 24, 24))",
        "linear-gradient(to left, rgb(189, 195, 199), rgb(44, 62, 80))"
      ],
      color: {
        color: "white "
      }
    };
  },
  computed: {
    gradient() {
      return {
        backgroundImage: this.gradients[
          Math.floor(Math.random() * this.gradients.length)
        ]
      };
    }
  },
  filters: {
    shortenIt(str) {
      return str.slice(0, 333) + "...";
    }
  }
};
</script>

<style>
</style>