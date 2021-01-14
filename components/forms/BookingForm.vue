<template>
  <!-- Form Modal -->
  <b-modal
    v-model="show"
    id="booking-form"
    centered
    no-fade
    size="lg"
    :title="modalTitle"
    :header-bg-variant="'primary'"
    :header-text-variant="'white'"
  >
    <template v-slot:default>
      <b-form>
        <div class="row">
          <div class="col-xl-6">
            <b-form-group id="input-group-1" label="From:" label-for="input-1">
              <b-form-datepicker
                size="sm"
                id="from-date"
                value-as-date
                v-model="editItem.from_date"
                class="mb-2"
              ></b-form-datepicker>
            </b-form-group>
          </div>
          <div class="col-xl-6">
            <b-form-group id="input-group-2" label="To:" label-for="input-2">
              <b-form-datepicker
                size="sm"
                value-as-date
                id="to-date"
                v-model="editItem.to_date"
                class="mb-2"
              ></b-form-datepicker>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4">
            <b-form-group id="input-group-1">
              <label for="input-2"
                >Total Pax Count:
                <i
                  class="fas fa-sm fa-fw fa-question-circle"
                  v-b-tooltip.hover
                  title="Total pax count"
                ></i
              ></label>
              <b-form-input
                id="input-1"
                v-model="editItem.pax_count"
                type="text"
                size="sm"
                required
                placeholder="Enter pax count"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-2">
            <b-form-group id="input-group-1">
              <label for="input-2"
                >Adult:
                <i
                  class="fas fa-sm fa-fw fa-question-circle"
                  v-b-tooltip.hover
                  title="Breakdown of adult count"
                ></i
              ></label>
              <b-form-input
                id="input-1"
                v-model="editItem.adult_count"
                type="text"
                size="sm"
                required
                placeholder="Enter pax count"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-2">
            <b-form-group id="input-group-1" label-for="input-1">
              <label for="input-1"
                >Child:
                <i
                  class="fas fa-sm fa-fw fa-question-circle"
                  v-b-tooltip.hover
                  title="Breakdown of child count"
                ></i
              ></label>
              <b-form-input
                id="input-1"
                v-model="editItem.child_count"
                type="text"
                size="sm"
                required
                placeholder="Enter pax count"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-2">
            <b-form-group id="input-group-1">
              <label for="input-2"
                >Infant:
                <i
                  class="fas fa-sm fa-fw fa-question-circle"
                  v-b-tooltip.hover
                  title="Breakdown of infant count"
                ></i
              ></label>
              <b-form-input
                id="input-2"
                v-model="editItem.infant_count"
                type="text"
                size="sm"
                required
                placeholder="Enter infant count"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
      </b-form>
    </template>
    <template v-slot:modal-footer>
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="success" @click="submit()">
        <i class="fas fa-sm fa-fw fa-save"></i> {{ submitButton }}
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        <i class="fas fa-sm fa-fw fa-exclamation-triangle"></i> Cancel
      </b-button>
    </template>
  </b-modal>
  <!-- Form Modal End -->
</template>

<script>
export default {
  props: {
    editItemId: {
      type: Number,
      default: null,
    },
    lead: null,
    item: {
      type: Object,
      default: function () {
        return {
          id: "",
          pax_count: "",
          adult_count: "",
          child_count: "",
          infant_count: "",
          lead_id: "",
          from_date: "",
          to_date: "",
          created_at: "",
          updated_at: "",
        };
      },
    },

    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
      editItem: {
        id: "",
        pax_count: "",
        adult_count: "",
        child_count: "",
        infant_count: "",
        lead_id: "",
        from_date: "",
        to_date: "",
        created_at: "",
        updated_at: "",
      },
      defaultItem: {
        id: "",
        pax_count: "",
        adult_count: "",
        child_count: "",
        infant_count: "",
        lead_id: "",
        from_date: "",
        to_date: "",
        created_at: "",
        updated_at: "",
      },
      countries: null,
    };
  },
  computed: {
    modalTitle() {
      if (this.isEdit) {
        return "Edit Booking";
      } else {
        return "Create Booking";
      }
    },
    submitButton() {
      if (this.isEdit) {
        return "Update";
      } else {
        return "Save";
      }
    },
  },
  watch: {
    item() {
      this.editItem = Object.assign({}, this.item);
      this.defaultItem = Object.assign({}, this.item);
    },
    lead() {
      this.editItem.lead_id = this.lead.id;
      this.defaultItem.lead_id = this.lead.id;
    },
  },
  methods: {
    cancel() {
      this.show = false;
      this.editItem = Object.assign({}, this.defaultItem);
      console.log("canceled");
    },
    async submit() {
      if (this.isEdit) {
        const response = await this.$axios.$put("/bookings/" + this.item.id, {
          ...this.editItem,
        });
      } else {
        const response = await this.$axios.$post("/bookings", {
          ...this.editItem,
        });
      }
      this.editItem = Object.assign({}, this.defaultItem);
      this.show = false;
      this.$emit("submited");
    },
  },
  mounted() {},
};
</script>

<style>
</style>
