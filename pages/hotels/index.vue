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
          :form-name="'hotel-form'"
        >
          <template v-slot:card-body>
            <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
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
                <tr v-for="item in items" :key="item.id">
                  <td>
                    <nuxt-link :to="'/' + pageInfo.slug + '/' + item.id">{{
                      item.name
                    }}</nuxt-link>
                  </td>
                  <td>
                    <stars-rating :stars="item.stars_rating"></stars-rating>
                  </td>
                  <td>
                    <nuxt-link
                      v-if="item.country"
                      :to="'/' + 'countries' + '/' + item.country.id"
                      >{{ item.country.name }}</nuxt-link
                    >
                  </td>
                  <td>
                    <nuxt-link
                      v-if="item.city"
                      :to="'/' + 'cities' + '/' + item.city.id"
                      >{{ item.city.name }}</nuxt-link
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
            <hotel-form @submited="fetchItems"></hotel-form>
          </template>
        </table-card>
      </div>
      <!-- Card - Table Component End-->
    </div>
  </div>
</template>

<script>
import HotelForm from "~/components/forms/HotelForm";
import TableCard from "~/components/ui/TableCard";
import StarsRating from "~/components/ui/StarsRating";
export default {
  middleware: "auth",
  components: {
    HotelForm,
    TableCard,
    StarsRating,
  },
  data() {
    return {
      pageInfo: {
        slug: "hotels",
      },
      tableCardInfo: {
        tableTitle: "Hotels List",
      },
      searchCardInfo: {
        searchTitle: "Search Hotels",
      },
      headers: ["Hotel", "Stars", "Country", "City"],
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
        this.tableCardLoading = false;
        this.items = items.data;
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