<template>
  <v-app>
    <v-app-bar fixed app>
      <img src="/Animated-Flag-Nepal.gif" style="height:66%" alt />
      <v-toolbar-title v-text="title" class="error--text header" />
      <v-spacer />

      <v-btn class="mx-2 success" router exact to="/post">Posts</v-btn>
      <v-btn class="mx-2" to="/auth/login">login</v-btn>
      <v-btn class="mx-2" to="/auth/signup">sign up</v-btn>
    </v-app-bar>
    <v-content class="blue-grey lighten-5">
      <nuxt />
    </v-content>

    <v-footer class="footer primary" absolute app>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" text class="my-2 white--text">{{ link }}</v-btn>
        <v-col class="py-4 text-center white--text" cols="12">
          <span class>Rajamati Kumati&copy; {{new Date().getFullYear()}}</span>
        </v-col>
      </v-row>
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
      title: "Rajamati Kumati",
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
    };
  }
};
</script>
<style lang="sass">
.footer,.header
  font-family: 'Mountains of Christmas', cursive
  font-size: 2rem
</style>
