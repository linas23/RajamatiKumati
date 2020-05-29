<template>
  <v-card height="100vh" tile class="primary d-flex justify-center align-center">
    <v-card width="400" class="mx-auto">
      <v-card-title>Welcome {{task.isLogin ? 'back' : ''}} to Rajamati kumati</v-card-title>
      <v-card-text>
        <v-form ref="myForm" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email Address"
            counter="32"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="password"
            counter="32"
            required
          ></v-text-field>
          <div class="text-center">
            <v-btn v-if="!submitting" @click="submit" class="error darken-3">{{task.title}}</v-btn>
            <v-btn v-else class="error darken-3">
              <v-progress-circular indeterminate size="23" width="2" color="white"></v-progress-circular>
            </v-btn>
            <v-card-text v-if="task.isLogin">
              Don't have an account ?
              <n-link to="/auth/signup">sign up</n-link>
            </v-card-text>
            <v-card-text v-else>
              Already have an account ?
              <n-link to="/auth/login">Login</n-link>
            </v-card-text>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      submitting: false,
      email: "linas@gmail.com",
      password: "secret",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "Email must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length > 6) || "Password must be greater than 6 characters"
      ]
    };
  },

  methods: {
    submit() {
      if (this.$refs.myForm.validate()) {
        console.log(true);
        this.submitting = true;
        //reset form if signed in succesfully
        this.$refs.myForm.reset();
      } else {
        return false;
        console.log(false);
      }
    }
  }
};
</script>

<style>
</style>