<template>
  <v-speed-dial v-model="fab" absolute top right :transition="scale" direction="left" class="my-5">
    <template v-slot:activator>
      <v-btn v-model="fab" color="error darken-2" dark fab>
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-icon v-else>mdi-share</v-icon>
      </v-btn>
    </template>
    <v-btn fab dark small color="blue darken-3">
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn fab dark small color="blue lighten-1">
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn fab dark small color="red lighten-1">
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  data() {
    return {
      fab: false
    };
  }
};
</script>

<style>
</style>