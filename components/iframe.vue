<template>
  <iframe
    width="100%"
    height="315"
    :src="source"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>