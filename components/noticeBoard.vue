<template>
  <div>
    <v-card class="text-center" tile elevation="11">
      <v-row>
        <v-col v-for="n in 3" :key="n">
          <div class="title">Notice!!</div>
        </v-col>
      </v-row>

      <div class="headline">{{notice.title}}</div>
      <v-container>
        <v-card-text>{{notice.description}}</v-card-text>
        <v-card-subtitle>{{notice.date}}</v-card-subtitle>
        <v-card-text>{{notice.author}}</v-card-text>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    notice: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>