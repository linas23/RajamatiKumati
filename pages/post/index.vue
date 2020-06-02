<template>
  <v-container>
    <div class="headline">welcome to rajamatikumati</div>
    <div v-for="(post,index) in posts" :key="index">
      <detailCard :post="post"></detailCard>
    </div>
  </v-container>
</template>

<script>
import detailCard from "~/components/detailCard";
export default {
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