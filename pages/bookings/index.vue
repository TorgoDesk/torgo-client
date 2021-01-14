/*
  * This a basic component
  * Use page data object to add title, table title

*/


<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- Content Row -->
    <div class="row">
      <!-- Card - Table Component -->
      <div class="col-xl-12">
        <table-card
          :card-title="tableCardInfo.tableTitle"
          :form-name="'lead-form'"
        >
          <template v-slot:card-body>
            <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
            <!-- Table  -->
            <table class="table table-sm table-hover">
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
                    <nuxt-link
                      v-if="item.lead"
                      :to="'/' + 'leads' + '/' + item.lead.id"
                      >{{ item.lead.first_name }}
                      {{ item.lead.last_name }}</nuxt-link
                    >
                  </td>

                  <td>
                    {{ item.pax_count }}
                  </td>
                  <td>
                    <div class="mt-1">
                      <b-progress
                        :value="
                          generateProgressBarData(
                            Math.floor(Math.random() * 100 + 1)
                          ).value
                        "
                        :max="100"
                        :variant="
                          generateProgressBarData(
                            Math.floor(Math.random() * 100 + 1)
                          ).variant
                        "
                        animated
                      ></b-progress>
                    </div>
                  </td>
                  <td>
                    {{ item.from_date }}
                  </td>
                  <td>
                    {{ item.to_date }}
                  </td>
                  <td>
                    <div v-if="item.owner" class="dropdown-list-image">
                      <img
                        class="rounded-circle"
                        style="height: 2rem; width: 2rem"
                        :src="item.owner.profile.profile_pic_url"
                        alt=""
                      />
                      <span class="ml-1">{{ item.owner.name }}</span>
                    </div>
                    <div v-else class="dropdown-list-image mr-3">
                      <img
                        class="rounded-circle"
                        style="height: 2rem; width: 2rem"
                        src="https://ui-avatars.com/api/?name=No Owner&background=e74a3b&color=ffffff"
                        alt=""
                      />
                      <span class="ml-1 text-danger">No Owner</span>
                    </div>
                  </td>
                  <td>
                    <nuxt-link
                      :to="'/' + pageInfo.slug + '/' + item.id"
                      class="btn btn-primary btn-xs"
                      ><i class="fas fa-eye fa-sm fa-fw"></i> Show</nuxt-link
                    >
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
                        <div class="dropdown-header">Speacial Actions</div>
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
                        <a
                          class="dropdown-item"
                          href="#"
                          @click="deleteItem(item.id)"
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
            <lead-form @submited="fetchItems"></lead-form>
          </template>
        </table-card>
      </div>
      <!-- Card - Table Component End-->
    </div>
  </div>
</template>

<script>
import LeadForm from "~/components/forms/LeadForm";
import TableCard from "~/components/ui/TableCard";
import StarsRating from "~/components/ui/StarsRating";
export default {
  middleware: "auth",
  components: {
    LeadForm,
    TableCard,
  },
  data() {
    return {
      pageInfo: {
        slug: "bookings",
      },
      tableCardInfo: {
        tableTitle: "Booking List",
      },
      searchCardInfo: {
        searchTitle: "Search Booking",
      },
      headers: [
        "Lead",
        "Pax Count",
        "Progress",
        "From",
        "To",
        "Owner",
        "Booking",
      ],
      items: null,
      show: true,
      currentPage: 1,
      perPage: 0,
      totalItems: 0,
      error: null,
      tableCardLoading: true,
      editSearchQuery: {
        name: "",
      },
      defaultSearchQuery: {
        name: "",
      },
    };
  },

  methods: {
    generateProgressBarData(value) {
      return {
        value: value,
        variant: value < 50 ? "primary" : "success",
      };
    },
    async deleteItem(deleteId) {
      try {
        const deletedItem = await this.$axios.$delete(
          "/" + this.pageInfo.slug + "/" + deleteId
        );
        this.fetchItems();
      } catch (error) {
        console.log(error);
      }
    },
    async fetchItems() {
      try {
        this.tableCardLoading = true;
        const items = await this.$axios.$get(
          "/" +
            this.pageInfo.slug +
            "?page=" +
            this.currentPage +
            "&name=" +
            this.editSearchQuery.name
        );
        console.log(items);
        this.tableCardLoading = false;
        this.items = items;
        this.perPage = items.perPage;
        this.totalItems = items.total;
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