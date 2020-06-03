<template>
  <v-container>
    <div class="headline">welcome to rajamatikumati</div>
    <div v-for="(post,index) in posts" :key="index">
      <detailCard :post="post" data-aos="slide-up"></detailCard>
    </div>
  </v-container>
</template>

<script>
import AOS from "aos";
import detailCard from "~/components/detailCard";
export default {
  mounted() {
    AOS.init();
  },
  components: {
    detailCard
  },
  async asyncData({ store }) {
    let { posts } = await store.dispatch("post/getPosts");
    console.log(posts);
    return { posts };
  }
};
</script>

<style>
</style>