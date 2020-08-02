<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <div class="mb-4">
          <b-button pill variant="primary" size="sm" @click="$router.back()"
            ><i class="fas fa-sm fa-fw fa-arrow-left"></i>Back</b-button
          >
        </div>
      </div>
    </div>
    <!-- Content Row -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card shadow mb-4">
          <b-overlay :show="detailsCardLoading" rounded="sm">
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <div>
                <h6 class="m-0 font-weight-bold text-primary">
                  {{ detailsCardInfo.tableTitle }}
                </h6>
              </div>
              <div>
                <b-button variant="success" size="sm" v-b-modal.country-form
                  ><i class="fas fa-sm fa-fw fa-plus"></i>Edit</b-button
                >
                <country-form
                  :isEdit="true"
                  :item="item"
                  @submited="fetchItem"
                ></country-form>
              </div>
            </div>
            <div class="card-body" v-if="!detailsCardLoading">
              <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
              <div class="row">
                <div class="col-xl-2">
                  <label>City</label>
                  <h5>{{ this.city.name }}</h5>
                </div>
                <div class="col-xl-2">
                  <label>Country</label>
                  <h5>{{ this.country.name }}</h5>
                </div>
                <div class="col-xl-2">
                  <label>Postal Code</label>
                  <h5>{{ this.city.phone_prefix }}</h5>
                </div>
              </div>
            </div>
          </b-overlay>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountryForm from "~/components/forms/CountryForm";

export default {
  components: {
    CountryForm,
  },
  data() {
    return {
      id: parseInt(this.$route.params.id),
      detailsCardInfo: {
        tableTitle: "Cities Details",
      },
      pageInfo: {
        title: "City",
        slug: "cities",
      },
      itemTitles: ["City", "Country", "Postal"],
      city: null,
      country: null,
      error: null,
      detailsCardLoading: true,
    };
  },
  methods: {
    async fetchItem() {
      try {
        this.detailsCardLoading = true;
        const response = await this.$axios.$get(
          "/" + this.pageInfo.slug + "/" + this.id
        );
        console.log(response);
        this.city = response.city;
        this.country = response.country;
        this.detailsCardLoading = false;
      } catch (error) {
        this.error = error;
        this.city = {};
        this.detailsCardLoading = false;
      }
    },
  },
  mounted() {
    this.fetchItem();
  },
};
</script>

<style>
</style>