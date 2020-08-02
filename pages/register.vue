<template>
  <div class="container">
    <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
    <form method="post" @submit.prevent="register">
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-horizontal"
      >
        <b-form-input id="input-horizontal" v-model="username"></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        description="Let us know your email."
        label="Enter your email"
        label-for="input-horizontal"
      >
        <b-form-input id="input-horizontal" v-model="email"></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        description="Enter a password."
        label="Enter your password"
        label-for="input-horizontal"
      >
        <b-form-input id="input-horizontal" v-model="password"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="outline-primary">Create User</b-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await this.$axios.post("register", {
          username: this.username,
          email: this.email,
          password: this.password
        });

        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        });

        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.error.message;
      }
    }
  }
};
</script>

<style>
</style>