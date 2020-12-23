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
                  <label>Last Age</label>
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
            <div class="card-body scroll" v-if="!detailsCardLoading">
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
              <status-widget :status="this.item.status"></status-widget>
            </div>
          </b-overlay>
        </div>
      </div>
    </div>
    <note-form @submited="fetchItem" :lead="item"></note-form>
  </div>
</template>

<script>
import LeadForm from "~/components/forms/LeadForm";
import NoteForm from "~/components/forms/NoteForm";
import Note from "~/components/ui/Note";
import StatusWidget from "~/components/ui/StatusWidget/StatusWidget";

export default {
  components: {
    LeadForm,
    Note,
    NoteForm,
    StatusWidget,
  },
  data() {
    return {
      id: parseInt(this.$route.params.id),
      detailsCardInfo: {
        tableTitle: "Lead Details",
      },
      notesCardInfo: {
        title: "Notes",
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
.scroll {
  height: 500px;
  max-height: 500px;
  overflow-y: auto;
}
</style>
