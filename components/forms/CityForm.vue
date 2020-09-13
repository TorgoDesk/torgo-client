<template>
  <!-- Form Modal -->
  <b-modal
    v-model="show"
    id="city-form"
    centered
    no-fade
    size="xl"
    :title="modalTitle"
  >
    <template v-slot:default>
      <b-form>
        <div class="row">
          <div class="col-xl-6">
            <b-form-group
              id="input-group-1"
              label="City Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="editItem.name"
                type="text"
                required
                placeholder="Enter city name"
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
                placeholder="Enter code"
              >
                <b-form-select-option v-for="country in countries" :value="country.id" :key="country.id">
                  {{country.name}}
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </div>
          <div class="col-xl-6"></div>
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
          country: "",
          code: "",
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
        country_id: "",
        created_at: "",
        updated_at: "",
        country: {},
      },
      defaultItem: {
        id: "",
        name: "",
        country_id: "",
        created_at: "",
        updated_at: "",
        country: {},
      },
      countries: null
    };
  },
  computed: {
    modalTitle() {
      if (this.isEdit) {
        return "Edit City";
      } else {
        return "Create City";
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
      this.editItem = Object.assign({}, this.item.city);
      this.defaultItem = Object.assign({}, this.item.city);
    },
  },
  methods: {
    async fetchCountries() {
      console.log("Working")
      try {
        const response = await this.$axios.$get(
          "/" + "countries/list"
        );
        this.countries = response;
      } catch (error) {
        console.log(error)
        this.error = error;
      }
    },
    cancel() {
      this.show = false;
      this.editItem = Object.assign({}, this.defaultItem);
      console.log("canceled");
    },
    async submit() {
      if (this.isEdit) {
        const response = await this.$axios.$put("/cities/" + this.item.city.id, {
          ...this.editItem,
        });
      } else {
        console.log(this.editItem)
        const response = await this.$axios.$post("/cities", {
          ...this.editItem,
        });
      }
      this.editItem = Object.assign({}, this.defaultItem);
      this.show = false;
      this.$emit("submited");
    },
  },
  mounted() {
    this.fetchCountries();
  }
};
</script>

<style>
</style>