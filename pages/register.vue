<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign Up</h5>
            <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
            <form class="form-signin" method="post" @submit.prevent="register">
              <div class="form-label-group mb-2">
                <label for="inputEmail">User Name</label>
                <input
                  type="text"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Username"
                  v-model="username"
                  required
                  autofocus
                />
              </div>

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

              <div class="form-label-group mb-3">
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
              <button
                class="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
              >
                Sign up
              </button>
              <div>
                Already a member?
                <nuxt-link to="/login">Log in</nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await this.$axios.post("register", {
          username: this.username,
          email: this.email,
          password: this.password,
        });

        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });

        this.$router.push("/countries");
      } catch (e) {
        this.error = e.response.data.error.message;
      }
    },
  },
};
</script>

<style>
</style>