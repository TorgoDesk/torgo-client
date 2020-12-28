<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
            <b-alert show variant="warning" v-if="confirmMode">Please reset the password.</b-alert>
            <form
              class="form-signin"
              method="post"
              @submit.prevent="loginWithCredentials"
            >
              <div class="form-label-group mb-2">
                <label for="inputEmail">Email address</label>
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  v-model="email"
                  required
                  autofocus
                  :disabled="confirmMode"
                />
              </div>

              <div class="form-label-group mb-2" v-if="!confirmMode">
                <label for="inputPassword">Password</label>
                <input
                  type="password"
                  v-model="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                />
              </div>

              <div class="form-label-group mb-2" v-if="confirmMode">
                <label for="inputNewPassword">New Password</label>
                <input
                  type="password"
                  v-model="newPassword"
                  id="inputNewtPassword"
                  class="form-control"
                  placeholder="New Password"
                  required
                />
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1"
                  >Remember password</label
                >
              </div>
              <button
                class="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
              >
                Sign in
              </button>
              <div>
                Click here to
                <a href="https://torgoclientd48b6f44-d48b6f44-dev.auth.us-east-1.amazoncognito.com/signup?response_type=token&client_id=1ifgbgnfmegvvfd96s1q394s2g&redirect_uri=http://localhost:3000/login">Sign up</a>
              </div>
            </form>
            <div class="login-choice"><span>or Sign In with</span></div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialLogin from "@/components/SocialLogin";
import { mapGetters } from "vuex";
export default {
  layout: "auth",
  middleware: "guest",
  components: {
    SocialLogin,
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  data() {
    return {
      email: "",
      password: "",
      newPassword: "",
      error: null,
      confirmMode: false
    };
  },
  methods: {
    async loginWithCredentials() {
      try {
        const resp = await this.$auth.loginWith("cognito", {
          data: {
            username: this.email,
            password: this.password,
            newPassword: this.newPassword
          },
        });
        if (resp.newPasswordRequired) {
          this.confirmMode = true

        } else {
          this.confirmMode = false
          if (this.loggedInUser != null) {
            const response = await this.$axios.$post("/profiles",
              {
                username: this.loggedInUser.sub,
                name: this.loggedInUser.name
              }
            )
          }
          this.$router.push("/");
        }
        
      } catch (e) {
        console.log(e)
        this.error = e.response.data.message;
      }
    },
  },
};
</script>

<style>
</style>