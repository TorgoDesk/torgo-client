<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Countries</h1>
    <!-- Content Row -->

    <div class="row">
      <!-- Area Chart -->
      <div class="col-xl-12">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 class="m-0 font-weight-bold text-primary">
              Countries List
            </h6>
            <b-button variant="success" size="sm" v-b-modal.modal-center
              ><i class="fas fa-sm fa-fw fa-plus"></i>Add New</b-button
            >
            <b-modal
              id="modal-center"
              centered
              no-fade
              size="xl"
              title="Create New"
            >
              <template v-slot:default>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-2"
                    label="Your Name:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.name"
                      required
                      placeholder="Enter name"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-3"
                    label="Food:"
                    label-for="input-3"
                  >
                    <b-form-select
                      id="input-3"
                      v-model="form.food"
                      :options="foods"
                      required
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group id="input-group-4">
                    <b-form-checkbox-group
                      v-model="form.checked"
                      id="checkboxes-4"
                    >
                      <b-form-checkbox value="me">Check me out</b-form-checkbox>
                      <b-form-checkbox value="that"
                        >Check that out</b-form-checkbox
                      >
                    </b-form-checkbox-group>
                  </b-form-group>
                </b-form>
              </template>
              <template v-slot:modal-footer="{ ok, cancel }">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" variant="success" @click="ok()">
                  Save
                </b-button>
                <b-button size="sm" variant="danger" @click="cancel()">
                  Cancel
                </b-button>
              </template>
            </b-modal>
          </div>
          <!-- Card Body -->
          <div class="card-body">
            <table class="table table-sm">
              <thead>
                <tr class="bg-primary text-light">
                  <th v-for="(value, key) in headers" :key="key" scope="col">
                    {{ value }}
                  </th>
                  <th scope="col" style="width: 3%"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <td>
                    {{ item.name }}
                  </td>
                  <td>
                    <div class="dropdown no-arrow">
                      <a
                        class="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i
                          class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"
                        ></i>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <div class="dropdown-header">
                          Speacial Actions
                        </div>
                        <a class="dropdown-item" href="#"
                          ><i
                            class="fas fa-plus fa-sm fa-fw mr-2 text-gray-400"
                          ></i>
                          Add City</a
                        >
                        <a class="dropdown-item" href="#"
                          ><i
                            class="fas fa-plus fa-sm fa-fw mr-2 text-gray-400"
                          ></i>
                          Add Hotel</a
                        >
                        <a class="dropdown-item" href="#"
                          ><i
                            class="fas fa-users fa-sm fa-fw mr-2 text-gray-400"
                          ></i>
                          Change Owner</a
                        >
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#"
                          ><i
                            class="fas fa-trash fa-sm fa-fw mr-2 text-gray-400"
                          ></i>
                          Delete</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarPartial from "~/components/partials/SideBarPartial";
import NavBarPartial from "~/components/partials/NavBarPartial";
export default {
  middleware: "auth",
  components: {
    SideBarPartial,
    NavBarPartial
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      headers: ["Country"],
      items: null,
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    async fetchCountries() {
      const countries = await this.$axios.$get("/countries");
      this.items = countries;
    }
  },
  mounted() {
    this.fetchCountries();
  }
};
</script>

<style>
</style>