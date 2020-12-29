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
                {{ submitBtnText }}
              </button>
            </form> 
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
    
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
    submitBtnText() {
      if (this.confirmMode) {
        return 'Reset Password'
      } else {
        return 'Sign in'
      }
    }
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
  mounted() {
    confirmMode: false
  },
  methods: {
    async loginWithCredentials() {
      try {
        this.error = null
        const resp = await this.$auth.loginWith("cognito", {
          data: {
            username: this.email,
            password: this.password,
            newPassword: this.newPassword
          },
        });
        if (resp.newPasswordRequired) {
          // if this is the first time login, need to confirm with a new password
          this.confirmMode = true

        } else {
          this.confirmMode = false
          
          if (this.loggedInUser) {
            // This call will create a profile if it is a first time login
            const response = await this.$axios.$post("/profiles",
              {
                username: this.loggedInUser.sub,
                name: this.loggedInUser.name
              }
            )
            this.$router.push("/");
          } else {
            this.error = resp.message
          }
        }
        
      } catch (e) {
        this.error = e.message;
      }
    },
  },
};
</script>

<style>
</style>