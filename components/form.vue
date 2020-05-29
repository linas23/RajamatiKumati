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
          <v-text-field
            v-if="!task.isLogin"
            v-model="confirmPassword"
            :rules="confirmPasswordRules"
            label="confirm password"
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
      password: "secret1",
      confirmPassword: "secret1",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "Email must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length > 6) || "Password must be greater than 6 characters"
      ],
      confirmPasswordRules: [
        v => v === this.password || "Password do not match"
      ]
    };
  },

  methods: {
    submit() {
      if (this.$refs.myForm.validate()) {
        this.submitting = true;
        this.task.isLogin ? this.login() : this.signup();
      } else {
        return false;
      }
    },
    async login() {
      await this.$store.dispatch("auth/login", {
        email: this.email,
        password: this.password
      });
      console.log("logged in");
    },
    async signup() {
      let user = await this.$store.dispatch("auth/signup", {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      });
      if (user) {
        this.submitting = false;
        setTimeout(() => {
          this.$router.push("/auth/login");
        }, 100);
      } else {
        this.$refs.myForm.reset();
      }
    }
  }
};
</script>

<style>
</style>