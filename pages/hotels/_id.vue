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
                <hotel-form
                  :isEdit="true"
                  :item="item"
                  @submited="fetchItem"
                ></hotel-form>
              </div>
            </div>
            <div class="card-body" v-if="!detailsCardLoading">
              <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
              <div class="row">
                <div class="col-xl-2">
                  <label>Hotel Name</label>
                  <h5>{{ this.item.name }}</h5>
                </div>
                <div class="col-xl-2">
                  <label>Telephone</label>
                  <h5>{{ this.item.telephone }}</h5>
                </div>
                <div class="col-xl-2">
                  <label>Email</label>
                  <h5>{{ this.item.email }}</h5>
                </div>
                <div class="col-xl-2">
                  <label>Address</label>
                  <h5>{{ this.item.address }}</h5>
                </div>
                <div class="col-xl-2">
                  <label>City</label>
                  <h5>{{ this.item.city.name }}</h5>
                </div>
                <div class="col-xl-2">
                  <label>Country</label>
                  <h5>{{ this.item.country.name }}</h5>
                </div>
                <div class="col-xl-2">
                  <label>Website</label>
                  <h5>{{ this.item.website }}</h5>
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
import HotelForm from "~/components/forms/HotelForm";

export default {
  components: {
    HotelForm,
  },
  data() {
    return {
      id: parseInt(this.$route.params.id),
      detailsCardInfo: {
        tableTitle: "Hotel Details",
      },
      pageInfo: {
        title: "Hotel",
        slug: "hotels",
      },
      itemTitles: [
        "Hotel Name",
        "Email",
        "Telephone",
        "Address",
        "Country",
        "City",
        "Website",
      ],
      item: null,
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
        this.item = response;
        this.detailsCardLoading = false;
      } catch (error) {
        this.error = error;
        this.item = {};
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
