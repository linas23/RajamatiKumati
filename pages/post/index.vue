<template>
  <v-container>
    <div class="headline">welcome to rajamatikumati</div>
    <div v-for="n in 11" :key="n">
      <detailCard></detailCard>
    </div>
  </v-container>
</template>

<script>
import detailCard from "~/components/detailCard";
export default {
  components: {
    detailCard
  }
};
</script>

<style>
</style>