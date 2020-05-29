<template>
  <compForm :task="task"></compForm>
</template>

<script>
import compForm from "~/components/form";
export default {
  layout: "nolayout",
  components: {
    compForm
  },
  data() {
    return {
      task: {
        title: "Sign up",
        isLogin: false
      }
    };
  }
};
</script>

<style>
</style>