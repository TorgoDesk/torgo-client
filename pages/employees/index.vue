<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">User Management</h1>
      <a
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        ><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a
      >
    </div>

    <!-- Content Row -->
    <div class="row">
      <!-- Users Total Count -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >
                  Total Users
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  <!-- {{ users.length }} -->
                  {{ userMetrics.total }}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-users fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Number of admin user accounts -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-danger shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-danger text-uppercase mb-1"
                >
                  Admin users
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{ userMetrics.admin }}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-user-shield fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Users who have confirmed their account -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-success text-uppercase mb-1"
                >
                  Confirmed Users
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{ userMetrics.confirmed }}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-check-circle fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Users limit for the organization tier limit -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >
                  Tier limit 
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{ userMetrics.limit }}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-users-cog fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Row -->

    <div class="row">
      <div class="col-xl-12">
        <table-card
          :card-title="tableCardInfo.tableTitle"
          :form-name="'employee-form'"
        >
          <template v-slot:card-body>
            <!-- Error Alert -->
            <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
            <!-- Error Alert End -->
            <!-- Table  -->
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
                <tr v-for="user in users" :key="user.userName">
                  <td>
                    <nuxt-link :to="'/' + pageInfo.slug + '/' + user.userName">{{
                      user.email
                    }}</nuxt-link>
                  </td>
                  <td>
                    {{ user.name }}
                  </td>
                  <td>
                    <i v-if="user.enabled" class="fas fa-toggle-on fa-2x"></i>
                    <i v-if="!user.enabled" class="fas fa-toggle-off fa-2x"></i>
                  </td>
                  <td>
                    {{ user.confirmedStatus }}
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
                        <div class="dropdown-header">Special Actions</div>
                        <a v-if="user.enabled" class="dropdown-item" 
                          href="#"
                          @click="updateUserEnabled(user.userName, false)"
                          ><i
                            class="fas fa-user-slash fa-sm fa-fw mr-2 text-gray-400"
                          ></i>
                          Disable User</a
                        >
                        <a v-if="!user.enabled" class="dropdown-item" 
                          href="#"
                          @click="updateUserEnabled(user.userName, true)"
                          ><i
                            class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"
                          ></i>
                          Enable User</a
                        >
                        <a v-if="user.enabled && (user.confirmedStatus === 'CONFIRMED' || user.confirmedStatus === 'RESET_REQUIRED')" class="dropdown-item" 
                          href="#"
                          @click="resetUserPassword(user.userName)"
                          ><i
                            class="fas fa-key fa-sm fa-fw mr-2 text-gray-400"
                          ></i>
                          Reset Password</a
                        >
                        <a
                          class="dropdown-item"
                          href="#"
                          @click="deleteUser(user.userName)"
                          ><i
                            class="fas fa-trash fa-sm fa-fw mr-2 text-gray-400"
                          ></i>
                          Delete User</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Table End -->
            <!-- Pagination -->
            <div class="overflow-auto">
              <b-pagination
                size="md"
                :total-rows="totalItems"
                v-model="currentPage"
                :per-page="perPage"
              ></b-pagination>
            </div>
            <!-- Pagination End -->
            <employee-form @submited="fetchItems"></employee-form>
          </template>
        </table-card>
      </div>
      <!-- Card - Table Component End-->
    </div>
  </div>
  <!-- /.container-fluid -->
</template>

<script>
import SideBarPartial from "~/components/partials/SideBarPartial";
import NavBarPartial from "~/components/partials/NavBarPartial";
import EmployeeForm from "~/components/forms/EmployeeForm";
import TableCard from "~/components/ui/TableCard";

export default {
  middleware: "auth",
  components: {
    SideBarPartial,
    NavBarPartial,
    EmployeeForm,
    TableCard
  },
  data() {
    return {
      tableCardInfo: {
        tableTitle: "Users List",
      },
      headers: ["Email", "Name", "Enabled", "Status"],
      users: null,
      show: true,
      currentPage: 1,
      perPage: 0,
      totalItems: 0,
      tableCardLoading: true,
      searchCardInfo: {
        searchTitle: "Search Cities",
      },
      editSearchQuery: {
        name: "",
      },
      defaultSearchQuery: {
        name: "",
      },
      pageInfo: {
        slug: "users",
      },
      error: null,
      userMetrics: {
        total: 0,
        admin: 0,
        confirmed: 0,
        limit: 20,
      },
    };
  },
  methods: {
    async deleteUser(userName) {
      try {
        const deletedItem = await this.$axios.$delete(
          "/" + this.pageInfo.slug + "/" + userName
        );
        this.fetchItems();
      } catch (error) {
        console.log(error);
      }
    },
    async updateUserEnabled(userName, enabled) {
      try {
        var userInfo = {
          enabled
        }
        const updatedItem = await this.$axios.$patch(
          "/" + this.pageInfo.slug + "/" + userName,
          userInfo
        );
        this.fetchItems();
      } catch (error) {
        console.log(error);
      }
    },
    async resetUserPassword(userName) {
      try {
        var userInfo = {
          resetPassword: true
        }
        const updatedItem = await this.$axios.$patch(
          "/" + this.pageInfo.slug + "/" + userName,
          userInfo
        );
        this.fetchItems();
      } catch (error) {
        console.log(error);
      }
    },
    async fetchItems() {
      try {
        this.tableCardLoading = true;
        const users = await this.$axios.$get(
          "/" +
            this.pageInfo.slug +
            "?page=" +
            this.currentPage +
            "&name=" +
            this.editSearchQuery.name
        );
        this.tableCardLoading = false;
        this.users = users;
        this.userMetrics.total = users.length 
        this.userMetrics.admin = 1 
        this.userMetrics.confirmed = users.filter(user  => user.confirmedStatus === 'CONFIRMED').length
        this.perPage = users.perPage;
        this.totalItems = users.total;
      } catch (error) {
        this.tableCardLoading = false;
        this.error = error;
      }
    },
    async resetQuery() {
      this.editSearchQuery = Object.assign({}, this.defaultSearchQuery);
      this.fetchItems();
    },
  },
  watch: {
    currentPage: {
      handler: function () {
        this.fetchItems();
      },
    },
  },
  mounted() {
    this.fetchItems();
  },
};
</script>

<style>
</style>
