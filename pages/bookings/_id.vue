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
                <b-button variant="success" size="sm" v-b-modal.booking-form
                  ><i class="fas fa-sm fa-fw fa-edit"></i> Edit</b-button
                >
                <!-- <lead-form
                  :isEdit="true"
                  :item="item"
                  @submited="fetchItem"
                ></lead-form> -->
              </div>
            </div>
            <div class="card-body" v-if="!detailsCardLoading">
              <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
              <h4 class="text-gray-800">Basic</h4>
              <div class="row rounded p-1 mb-2">
                <div class="col-xl-2">
                  <label class="text-gray-800">Booking Id</label>
                  <h5>{{ this.item.id }}</h5>
                </div>
                <div class="col-xl-2">
                  <label class="text-gray-800">Customer Name</label>
                  <nuxt-link :to="'/leads/' + this.item.lead.id">
                    <h5>
                      {{ this.item.lead.first_name }}
                      {{ this.item.lead.last_name }}
                    </h5>
                  </nuxt-link>
                </div>
                <div class="col-xl-2">
                  <label class="text-gray-800">Owner Name</label>
                  <h5>
                    {{ this.item.owner.name }}
                  </h5>
                </div>
                <div class="col-xl-2">
                  <label class="text-gray-800">Country</label>
                  <nuxt-link :to="'/countries/' + this.item.lead.country.id">
                    <h5>{{ this.item.lead.country.name }}</h5>
                  </nuxt-link>
                </div>
                <div class="col-xl-2">
                  <label class="text-gray-800">Date of birth</label>
                  <h5>{{ this.item.lead.dob }}</h5>
                </div>
              </div>
              <h4 class="text-gray-800">Pax Breakdown</h4>
              <div class="row rounded p-1 mb-2">
                <div class="col-xl-2">
                  <label class="text-gray-800">Total Pax Count</label>
                  <h5>{{ this.item.pax_count }}</h5>
                </div>
                <div class="col-xl-2">
                  <label class="text-gray-800">Adult</label>
                  <h5>
                    {{ this.item.adult_count }}
                  </h5>
                </div>
                <div class="col-xl-2">
                  <label class="text-gray-800">Child</label>
                  <h5>{{ this.item.child_count }}</h5>
                </div>
                <div class="col-xl-2">
                  <label class="text-gray-800">Infant</label>
                  <h5>{{ this.item.infant_count }}</h5>
                </div>
              </div>
              <h4 class="text-gray-800">Travel Information</h4>
              <div class="row rounded p-1 mb-2">
                <div class="col-xl-2">
                  <label class="text-gray-800">From</label>
                  <h5>{{ this.item.from_date }}</h5>
                </div>
                <div class="col-xl-2">
                  <label class="text-gray-800">To</label>
                  <h5>
                    {{ this.item.to_date }}
                  </h5>
                </div>
              </div>
            </div>
          </b-overlay>
        </div>
      </div>
    </div>
    <booking-form @submited="fetchItem" :lead="item"></booking-form>
  </div>
</template>

<script>
import LeadForm from "~/components/forms/LeadForm";
import NoteForm from "~/components/forms/NoteForm";
import BookingForm from "~/components/forms/BookingForm";
import Note from "~/components/ui/Note";
import StatusWidget from "~/components/ui/StatusWidget/StatusWidget";
import StatusCard from "~/components/ui/StatusCard";

export default {
  components: {
    LeadForm,
    Note,
    NoteForm,
    StatusWidget,
    StatusCard,
  },
  data() {
    return {
      id: parseInt(this.$route.params.id),
      detailsCardInfo: {
        tableTitle: "Booking Details",
      },
      notesCardInfo: {
        title: "Notes",
      },
      bookingsCard: {
        title: "Bookings",
      },
      statusCardInfo: {
        title: "Status",
      },
      pageInfo: {
        title: "Booking",
        slug: "bookings",
      },
      item: {
        status: null,
      },
      error: null,
      detailsCardLoading: true,
    };
  },
  methods: {
    async deleteBookingItem(deleteId) {
      try {
        const deletedItem = await this.$axios.$delete("/bookings/" + deleteId);
        this.fetchItem();
      } catch (error) {
        console.log(error);
      }
    },
    generateProgressBarData(value) {
      return {
        value: value,
        variant: value < 50 ? "primary" : "success",
      };
    },
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
.scroll {
  height: 500px;
  max-height: 500px;
  overflow-y: auto;
}
</style>
