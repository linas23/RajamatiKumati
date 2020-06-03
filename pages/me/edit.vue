<template>
  <v-container>
    <profileCard :isEdit="true" :profile="profile"></profileCard>
  </v-container>
</template>

<script>
import profileCard from "~/components/profileCard";
export default {
  components: {
    profileCard
  },
  asyncData({ store }) {
    const profile = store.state.profile.profile;
    console.log("profile to edit", profile);
    return { profile };
  }
};
</script>

<style>
</style>