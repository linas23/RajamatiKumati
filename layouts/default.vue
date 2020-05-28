<template>
  <v-app>
    <v-app-bar fixed app>
      <img src="/Animated-Flag-Nepal.gif" style="height:66%" alt />
      <v-toolbar-title v-text="title" class="error--text header" />
      <v-spacer />

      <v-btn class="mx-2 success" router exact to="/post">Posts</v-btn>
      <v-btn class="mx-2">login</v-btn>
      <v-btn class="mx-2">sign up</v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>

    <v-footer class="footer" absolute app>
      <span class>Rajamati Kumati&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Posts",
          to: "/posts"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      title: "Rajamati Kumati"
    };
  }
};
</script>
<style lang="sass">
.footer,.header
  font-family: 'Mountains of Christmas', cursive
  font-size: 2rem
</style>
