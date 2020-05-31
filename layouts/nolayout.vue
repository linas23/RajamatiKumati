<template>
  <v-app>
    <v-content>
      <compNotification></compNotification>

      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import compNotification from "~/components/notification";

export default {
  components: {
    compNotification
  }
};
</script>

<style>
</style>