<template>
  <v-card height="100vh" tile class="primary d-flex justify-center align-center">
    <v-card
      width="400"
      class="mx-auto"
      data-aos="slide-up"
      data-aos-duration="777"
      data-aos-offset="111"
    >
      <v-card-text
        class="py-10 text-center headline grey lighten-2"
      >Welcome {{task.isLogin ? 'back' : ''}} to Rajamati kumati</v-card-text>
      <v-card-text>
        <v-form ref="myForm" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            hint="Email Address"
            label="Email Address"
            counter="32"
            required
            solo
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            hint="Password"
            counter="32"
            required
            label="Password"
            type="password"
            solo
          ></v-text-field>
          <v-text-field
            type="password"
            v-if="!task.isLogin"
            v-model="confirmPassword"
            :rules="confirmPasswordRules"
            label="Confirm Password"
            hint="confirm password"
            counter="32"
            solo
            required
          ></v-text-field>
          <div :class="[classObject,'d-flex text-center py-5 flex-column align-center']">
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
import AOS from "aos";
export default {
  mounted() {
    AOS.init();
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      submitting: false,
      email: "",
      password: "",
      confirmPassword: "",
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
      ],
      classObject: {
        green: this.task.isLogin,
        orange: !this.task.isLogin
      }
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
      try {
        await this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password
        });
        this.$router.push("/post");
      } catch (e) {
        this.$refs.myForm.reset();
      }
    },
    async signup() {
      try {
        await this.$store.dispatch("auth/signup", {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
        this.$router.push("/me/create");
      } catch (e) {
        this.$refs.myForm.reset();
      }
    }
  }
};
</script>

<style>
</style>