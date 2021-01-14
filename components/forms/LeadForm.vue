<template>
  <!-- Form Modal -->
  <b-modal
    v-model="show"
    id="lead-form"
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
            <b-form-group
              id="input-group-1"
              label="Lead First Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="editItem.first_name"
                type="text"
                size="sm"
                required
                placeholder="Enter first name"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-6">
            <b-form-group
              id="input-group-2"
              label="Lead Last Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="editItem.last_name"
                required
                size="sm"
                placeholder="Enter last name"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <b-form-group id="input-group-2" label="Email:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="editItem.email"
                required
                size="sm"
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-3">
            <b-form-group id="input-group-2" label="Age:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="editItem.age"
                required
                size="sm"
                placeholder="Enter age"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-3">
            <label for="example-input">Date of Birth:</label>
            <b-input-group class="mb-3">
              <b-form-input
                id="example-input"
                v-model="editItem.dob"
                type="text"
                placeholder="DD/MM/YYYY"
                autocomplete="off"
                size="sm"
              ></b-form-input>
              <b-input-group-append>
                <b-form-datepicker
                  size="sm"
                  v-model="editItem.dob"
                  button-only
                  button-variant="primary"
                  right
                  locale="en"
                  aria-controls="example-input"
                ></b-form-datepicker>
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <b-form-group
              id="input-group-2"
              label="Telephone:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="editItem.telephone"
                required
                size="sm"
                placeholder="Enter telephone number"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-6">
            <b-form-group
              id="input-group-2"
              label="Country:"
              label-for="input-2"
            >
              <b-form-select
                id="input-2"
                v-model="editItem.country_id"
                required
                size="sm"
                placeholder="Enter code"
              >
                <b-form-select-option
                  v-for="country in countries"
                  :value="country.id"
                  :key="country.id"
                >
                  {{ country.name }}
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-6">
            <b-form-group
              id="input-group-2"
              label="Description:"
              label-for="input-2"
            >
              <b-form-textarea
                id="textarea"
                v-model="editItem.description"
                placeholder="Enter something..."
                rows="3"
                size="sm"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </div>
          <div class="col-xl-6">
            <b-form-group
              id="input-group-2"
              label="Address:"
              label-for="input-2"
            >
              <b-form-textarea
                id="textarea"
                v-model="editItem.address"
                placeholder="Enter something..."
                rows="3"
                size="sm"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <b-form-group id="input-group-2" label="Status" label-for="input-2"
              ><b-form-select
                id="input-2"
                v-model="editItem.status"
                required
                size="sm"
                :options="statuses"
                value-field="id"
                text-field="name"
                placeholder="Select Status"
              >
              </b-form-select>
            </b-form-group>
          </div>
          <div class="col-xl-6">
            <b-form-group id="input-group-2" label="Rating" label-for="input-2"
              ><b-form-select
                id="input-2"
                v-model="editItem.stars_rating"
                required
                size="sm"
                placeholder="Enter code"
              >
                <b-form-select-option v-for="n in 5" :value="n" :key="n">
                  {{ n }}
                </b-form-select-option>
              </b-form-select>
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
import moment from "moment";
export default {
  props: {
    editItemId: {
      type: Number,
      default: null,
    },
    item: {
      type: Object,
      default: function () {
        return {
          id: "",
          first_name: "",
          last_name: "",
          email: "",
          country_id: "",
          description: "",
          age: "",
          dob: "",
          telephone: "",
          address: "",
          status: "",
          stars_rating: "",
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
        first_name: "",
        last_name: "",
        email: "",
        country_id: "",
        description: "",
        age: "",
        dob: "",
        telephone: "",
        address: "",
        status: "",
        stars_rating: "",
        created_at: "",
        updated_at: "",
      },
      defaultItem: {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        country_id: "",
        description: "",
        age: "",
        dob: "",
        telephone: "",
        address: "",
        status: "",
        stars_rating: "",
        created_at: "",
        updated_at: "",
      },
      statuses: [
        {
          name: "Initiation",
          id: 1,
        },
        {
          name: "Negotiation",
          id: 2,
        },
        {
          name: "Conversion",
          id: 3,
        },
        {
          name: "Converted",
          id: 4,
        },
        {
          name: "Lost",
          id: 5,
        },
      ],
      countries: null,
    };
  },
  computed: {
    modalTitle() {
      if (this.isEdit) {
        return "Edit Lead";
      } else {
        return "Create Lead";
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
      var date = moment(this.item.dob);
      this.editItem = Object.assign({}, this.item);
      this.defaultItem = Object.assign({}, this.item);
      this.item.dob = date.format("YYYY-MM-DD");
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
        const response = await this.$axios.$put("/leads/" + this.item.id, {
          ...this.editItem,
        });
      } else {
        const response = await this.$axios.$post("/leads", {
          ...this.editItem,
        });
      }
      this.editItem = Object.assign({}, this.defaultItem);
      this.show = false;
      this.$emit("submited");
    },
    async fetchCountries() {
      try {
        const response = await this.$axios.$get("/" + "countries/list");
        this.countries = response;
      } catch (error) {
        console.log(error);
        this.error = error;
      }
    },
  },
  mounted() {
    this.fetchCountries();
  },
};
</script>

<style>
</style>
