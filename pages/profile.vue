<template>
  <div class="container-fluid">
    <h1 class="h3 mb-4 text-gray-800">{{ page.title }}</h1>
    <div class="row">
      <div class="col-xl-12">
        <div class="card shadow mb-4">
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 class="m-0 font-weight-bold text-primary">
              {{ page.sectionTitle }}
            </h6>
          </div>
          <div class="card-body">
            <h6 class="m-0 font-weight-bold">Basic Information</h6>
            <div class="row">
              <div class="col-xl-3">
                <p class="font-weight-bold">Username :</p>
              </div>
              <div class="col-xl-3">
                <p>{{ loggedInUser.username }}</p>
              </div>
              <div class="col-xl-3">
                <p class="font-weight-bold">Email Address :</p>
              </div>
              <div class="col-xl-3">
                <p>{{ loggedInUser.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "auth",
  data() {
    return {
      page: {
        title: "Profile",
        sectionTitle: "Profile Information"
      }
    };
  },
  computed: {
    ...mapGetters(["loggedInUser"])
  }
};
</script>

<style>
</style>