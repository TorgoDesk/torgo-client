<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
            <form class="form-signin" method="post" @submit.prevent="loginWithCredentials">
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
                />
              </div>

              <div class="form-label-group mb-2">
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
                <nuxt-link to="/register">Sign up</nuxt-link>
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
import SocialLogin from '@/components/SocialLogin'
export default {
  layout: "auth",
  middleware: "guest",
  components: {
    SocialLogin
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async loginWithCredentials() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.$router.push("/countries");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>

<style>
</style>