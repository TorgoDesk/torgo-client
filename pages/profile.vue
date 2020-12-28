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
            <div>
              <b-button variant="success" size="sm" v-b-modal.profile-form
                ><i class="fas fa-sm fa-fw fa-edit"></i> Update</b-button
              >
              <profile-form
                :isEdit="true"
                :item="userProfile"
                @submited="fetchUserProfile"
              ></profile-form>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-xl-3">
                <p class="font-weight-bold">User Name :</p>
              </div>
              <div class="col-xl-3">
                <p>
                  {{ loggedInUser.name }}
                  <i class="fas fa-sm fa-fw fa-lock text-danger"></i>
                </p>
              </div>
              <div class="col-xl-3">
                <p class="font-weight-bold">Email Address :</p>
              </div>
              <div class="col-xl-3">
                <p>
                  {{ loggedInUser.email }}
                  <i class="fas fa-sm fa-fw fa-lock text-danger"></i>
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-3">
                <p class="font-weight-bold">First Name :</p>
              </div>
              <div class="col-xl-3">
                <p>{{ userProfile.first_name }}</p>
              </div>
              <div class="col-xl-3">
                <p class="font-weight-bold">Last Name :</p>
              </div>
              <div class="col-xl-3">
                <p>{{ userProfile.last_name }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-3">
                <p class="font-weight-bold">Middle Name :</p>
              </div>
              <div class="col-xl-3">
                <p>{{ userProfile.middle_name }}</p>
              </div>
              <div class="col-xl-3">
                <p class="font-weight-bold">Suffix:</p>
              </div>
              <div class="col-xl-3">
                <p>{{ userProfile.suffix }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-3">
                <p class="font-weight-bold">Alias :</p>
              </div>
              <div class="col-xl-3">
                <p>{{ userProfile.alias }}</p>
              </div>
              <div class="col-xl-3">
                <p class="font-weight-bold">Phone:</p>
              </div>
              <div class="col-xl-3">
                <p>{{ userProfile.phone }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-3">
                <p class="font-weight-bold">Address :</p>
              </div>
              <div class="col-xl-3">
                <p>{{ userProfile.address }}</p>
              </div>
              <div class="col-xl-3">
                <p class="font-weight-bold">Company Name:</p>
              </div>
              <div class="col-xl-3">
                <p>{{ userProfile.company_name }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-3">
                <p class="font-weight-bold">Title :</p>
              </div>
              <div class="col-xl-3">
                <p>{{ userProfile.title }}</p>
              </div>
              <div class="col-xl-3">
                <p class="font-weight-bold">Department:</p>
              </div>
              <div class="col-xl-3">
                <p>{{ userProfile.department }}</p>
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
import ProfileForm from "~/components/forms/ProfileForm";

export default {
  middleware: "auth",
  data() {
    return {
      page: {
        title: "Profile",
        sectionTitle: "Basic Information",
      },
    };
  },
  computed: {
    ...mapGetters(["loggedInUser", "userProfile"]),
  },
  methods: {
    async fetchUserProfile() {
      var vm = this;
      try {
        vm.$store.dispatch("fetchUserProfile", this.loggedInUser.sub);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>