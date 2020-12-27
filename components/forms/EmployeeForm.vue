<template>
  <!-- Form Modal -->
  <b-modal
    v-model="show"
    id="employee-form"
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
              label="User Email:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="editItem.email"
                type="email"
                size="sm"
                required
                placeholder="Enter user email"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-6">
            <b-form-group
              id="input-group-2"
              label="User Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="editItem.name"
                type="text"
                size="sm"
                required
                placeholder="Enter user name"
              ></b-form-input>
            </b-form-group>
            <!-- <b-form-group
              id="input-group-2"
              label="Employee Name:"
              label-for="input-2"
            >
              <b-form-select
                id="input-2"
                v-model="editItem.name"
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
            </b-form-group> -->
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
    item: {
      type: Object,
      default: function () {
        return {
          email: "",
          name: ""
        };
      },
    },
  },
  data() {
    return {
      show: false,
      editItem: {
        email: "",
        name: ""
      },
      defaultItem: {
        email: "",
        name: ""
      }
    };
  },
  computed: {
    modalTitle() {
      return "Create User";
    },
    submitButton() {
      return "Save";
    },
  },
  methods: {
    cancel() {
      this.show = false;
      this.editItem = Object.assign({}, this.defaultItem);
    },
    async submit() {
      console.log(this.editItem);
      const response = await this.$axios.$post("/users", {
        ...this.editItem,
      });
      this.editItem = Object.assign({}, this.defaultItem);
      this.show = false;
      this.$emit("submited");
    }
  },
};
</script>

<style>
</style>