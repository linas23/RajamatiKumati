<template>
  <v-btn
    v-scroll="onScroll"
    v-show="scroll"
    fab
    dark
    fixed
    bottom
    right
    color="primary"
    @click="toTop"
  >
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      scroll: false
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.scroll = top > 33;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style>
</style>