<template>
  <!-- Form Modal -->
  <b-modal
    v-model="show"
    id="hotel-form"
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
              label="Hotel Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="editItem.name"
                type="text"
                size="sm"
                required
                placeholder="Enter hotel name"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-6">
            <b-form-group
              id="input-group-2"
              label="Telephone Number:"
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
          <div class="col-xl-6">
            <b-form-group
              id="input-group-2"
              label="Website:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="editItem.website"
                required
                size="sm"
                placeholder="Enter website"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <b-form-group id="input-group-2" label="City:" label-for="input-2">
              <b-form-select
                id="input-2"
                v-model="editItem.city_id"
                required
                size="sm"
                placeholder="Enter code"
              >
                <b-form-select-option
                  v-for="city in filteredCities"
                  :value="city.id"
                  :key="city.id"
                >
                  {{ city.name }}
                </b-form-select-option>
              </b-form-select>
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
          name: "",
          telephone: "",
          email: "",
          country_id: "",
          city_id: "",
          website: "",
          address: "",
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
        name: "",
        telephone: "",
        email: "",
        country_id: "",
        city_id: "",
        website: "",
        address: "",
        stars_rating: "",
        created_at: "",
        updated_at: "",
      },
      defaultItem: {
        id: "",
        name: "",
        telephone: "",
        email: "",
        country_id: "",
        city_id: "",
        website: "",
        address: "",
        stars_rating: "",
        created_at: "",
        updated_at: "",
      },
      countries: null,
      cities: null,
    };
  },
  computed: {
    modalTitle() {
      if (this.isEdit) {
        return "Edit Hotel";
      } else {
        return "Create Hotel";
      }
    },
    submitButton() {
      if (this.isEdit) {
        return "Update";
      } else {
        return "Save";
      }
    },
    filteredCities() {
      var vm = this;
      try {
        return this.cities.filter(function (el) {
          if (el.country_id === vm.editItem.country_id) {
            return el;
          }
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
  watch: {
    item() {
      this.editItem = Object.assign({}, this.item);
      this.defaultItem = Object.assign({}, this.item);
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
        const response = await this.$axios.$put("/hotels/" + this.item.id, {
          ...this.editItem,
        });
      } else {
        const response = await this.$axios.$post("/hotels", {
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
    async fetchCities() {
      try {
        const response = await this.$axios.$get("/" + "cities/list");
        this.cities = response;
      } catch (error) {
        console.log(error);
        this.error = error;
      }
    },
  },
  mounted() {
    this.fetchCities();
    this.fetchCountries();
  },
};
</script>

<style>
</style>
