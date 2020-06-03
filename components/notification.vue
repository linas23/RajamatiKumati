<template>
  <div>
    <notifications group="notification" v-if="Ntext" />
    <!-- {{Ntext}} -->
    <!-- <v-btn @click="changeNotification">click me</v-btn> -->
  </div>
</template>

<script>
export default {
  computed: {
    Ntext() {
      return this.$store.getters.notification;
    }
  },
  watch: {
    Ntext: function(newValue) {
      this.$notify({
        duration: 4000,
        group: "notification",
        text: this.Ntext.msg,
        type: this.Ntext.type
      });
    }
  },
  methods: {
    changeNotification() {
      this.$store.commit("changeNotification", {
        msg: "hello new",
        type: Math.floor(Math.random() * 10) % 2 === 0 ? "success" : "error",
        num: Math.random()
      });
    }
  }
};
</script>

<style lang="sass">
.vue-notification
  padding: 10px
  margin: 0 5px 5px
  font-size: 12px
  position: absolute
  z-index: 100
  right: 50px
  top: 100px
  color: #ffffff
  background: #44A4FC
  border-left: 5px solid #187FE7

  &.warn
    background: #ffb648
    border-left-color: #f48a06

    &.error
      background: #E54D42
      border-left-color: #B82E24

    &.success
      background: #68CD86
      border-left-color: #42A85F
</style>