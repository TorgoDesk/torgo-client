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
      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >
                  Earnings (Monthly)
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  $40,000
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Earnings (Monthly) Card Example -->
      <status-card :status="item.status"></status-card>

      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-info shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-info text-uppercase mb-1"
                >
                  Weekly Goal
                </div>
                <div class="row no-gutters align-items-center">
                  <div class="col-auto">
                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      50%
                    </div>
                  </div>
                  <div class="col">
                    <div class="progress progress-sm mr-2">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style="width: 50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pending Requests Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >
                  Bookings
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{ totalBookings }}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-comments fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
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
                <b-button variant="success" size="sm" v-b-modal.lead-form
                  ><i class="fas fa-sm fa-fw fa-edit"></i> Edit</b-button
                >
                <lead-form
                  :isEdit="true"
                  :item="item"
                  @submited="fetchItem"
                ></lead-form>
              </div>
            </div>
            <div class="card-body" v-if="!detailsCardLoading">
              <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
              <div class="row">
                <div class="col-xl-2">
                  <label>First Name</label>
                  <h5>{{ this.item.first_name }}</h5>
                </div>
                <div class="col-xl-2">
                  <label>Last Name</label>
                  <h5>{{ this.item.last_name }}</h5>
                </div>
                <div class="col-xl-2">
                  <label>Age</label>
                  <h5>{{ this.item.age }}</h5>
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
                  <label>Country</label>
                  <h5 v-if="item.country">{{ this.item.country.name }}</h5>
                </div>
                <div class="col-xl-2">
                  <label>Rating</label>
                  <h5>
                    <stars-rating :stars="item.stars_rating"></stars-rating>
                  </h5>
                </div>
                <div class="col-xl-2">
                  <label>Date of Birth</label>
                  <h5 v-if="item.dob">{{ this.item.dob }}</h5>
                </div>
                <div class="col-xl-4">
                  <label>Description</label>
                  <h5>{{ this.item.description }}</h5>
                </div>
              </div>
            </div>
          </b-overlay>
        </div>
      </div>
    </div>
    <!-- Content Row -->
    <div class="row">
      <div class="col-xl-6">
        <div class="card shadow mb-4">
          <b-overlay :show="detailsCardLoading" rounded="sm">
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <div>
                <h6 class="m-0 font-weight-bold text-primary">
                  {{ notesCardInfo.title }}
                </h6>
              </div>
              <div>
                <b-button variant="success" size="sm" v-b-modal.note-form
                  ><i class="fas fa-sm fa-fw fa-plus"></i> Add</b-button
                >
              </div>
            </div>
            <div class="card-body" v-if="!detailsCardLoading">
              <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
              <!-- todo: stylized small scrollbar -->
              <note
                v-for="note in item.notes"
                :key="note.id"
                :note="note"
              ></note>
            </div>
          </b-overlay>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="card shadow mb-4">
          <b-overlay :show="detailsCardLoading" rounded="sm">
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <div>
                <h6 class="m-0 font-weight-bold text-primary">
                  {{ statusCardInfo.title }}
                </h6>
              </div>
              <div>
                <b-button hidden size="sm"
                  ><i class="fas fa-sm fa-fw fa-plus"></i> Add</b-button
                >
              </div>
            </div>
            <div class="card-body" v-if="!detailsCardLoading">
              <!-- todo: status widget -->
              <status-widget :status="item.status"></status-widget>
            </div>
          </b-overlay>
        </div>
        <div class="card shadow mb-4">
          <b-overlay :show="detailsCardLoading" rounded="sm">
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <div>
                <h6 class="m-0 font-weight-bold text-primary">
                  {{ bookingsCard.title }}
                </h6>
              </div>
              <div>
                <b-button variant="success" size="sm" v-b-modal.booking-form
                  ><i class="fas fa-sm fa-fw fa-plus"></i> Add</b-button
                >
              </div>
            </div>
            <div class="card-body" v-if="!detailsCardLoading">
              <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
              <table class="table table-sm table-hover">
                <thead>
                  <tr class="bg-primary text-light">
                    <th
                      v-for="(value, key) in bookingHeaders"
                      :key="key"
                      scope="col"
                    >
                      {{ value }}
                    </th>
                    <th scope="col" style="width: 3%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="booking in item.bookings" :key="booking.id">
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
                      {{ booking.from_date }}
                    </td>
                    <td>
                      {{ booking.to_date }}
                    </td>
                    <td>
                      <div v-if="booking.owner" class="dropdown-list-image">
                        <img
                          class="rounded-circle"
                          style="height: 2rem; width: 2rem"
                          :src="booking.owner.profile.profile_pic_url"
                          alt=""
                        />
                        <span class="ml-1">{{ booking.owner.name }}</span>
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
                        :to="'/bookings/' + booking.id"
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
                            href="javascript:;"
                            @click="deleteBookingItem(booking.id)"
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
          </b-overlay>
        </div>
      </div>
    </div>
    <note-form @submited="fetchItem" :lead="item"></note-form>
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
      bookingHeaders: ["Progress", "From", "To", "Owner", "Booking"],
      id: parseInt(this.$route.params.id),
      detailsCardInfo: {
        tableTitle: "Lead Details",
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
        title: "Lead",
        slug: "leads",
      },
      itemTitles: [
        "First Name",
        "Last Name",
        "Email",
        "Age",
        "Telephone",
        "Country",
        "Description",
      ],
      item: {
        status: null,
      },
      error: null,
      detailsCardLoading: true,
    };
  },
  computed: {
    totalBookings: function () {
      if (this.item.bookings) {
        return this.item.bookings.length;
      }
      return 0;
    },
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
