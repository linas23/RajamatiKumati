<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card min-height="333" class="image" :to="'/post/' + post.id" :elevation="hover ? 16:4">
        <v-img
          class="align-end white--text"
          src="https://thehimalayantimes.com/wp-content/uploads/2017/04/Sindoor-Jatra-450x320.jpg"
        ></v-img>
        <v-card-title>{{post.text}}</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptate laborum dolore quam ex cum suscipit nobis, ipsum sit nihil, saepe iure. Quo?</v-card-text>
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

<style lang="scss">
.image {
  background: black;
  background-image: url("/texture_paper.svg");
  filter: brightness(88%);
  transition: all 0.5s ease;
}
.image:hover {
  filter: brightness(100%);
}
</style>