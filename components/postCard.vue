<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card :to="'/post/' + post.id" :elevation="hover ? 16:8">
        <v-img
          class="align-end white--text"
          src="https://thehimalayantimes.com/wp-content/uploads/2017/04/Sindoor-Jatra-450x320.jpg"
        >
          <v-card-title>{{post.text}}</v-card-title>
        </v-img>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>