<template>
  <!-- Form Modal -->
  <b-modal
    v-model="show"
    id="profile-form"
    centered
    no-fade
    size="xl"
    :title="modalTitle"
    :header-bg-variant="'primary'"
    :header-text-variant="'white'"
  >
    <template v-slot:default>
      <b-form>
        <div class="row">
          <div class="col-xl-4">
            <b-form-group
              id="input-group-2"
              label="First Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="editItem.first_name"
                required
                size="sm"
                placeholder="Enter first name"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-4">
            <b-form-group
              id="input-group-2"
              label="Middle Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="editItem.middle_name"
                required
                size="sm"
                placeholder="Enter middle name"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-4">
            <b-form-group
              id="input-group-2"
              label="Last Name:"
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
        <div class="row"></div>

        <div class="row">
          <div class="col-xl-2">
            <b-form-group
              id="input-group-2"
              label="Suffix:"
              label-for="input-2"
            >
              <b-form-select
                id="input-2"
                v-model="editItem.suffix"
                required
                size="sm"
                placeholder="Enter code"
              >
                <b-form-select-option
                  v-for="(suffix, index) in suffixes"
                  :value="suffix"
                  :key="index"
                >
                  {{ suffix }}
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </div>
          <div class="col-xl-3">
            <b-form-group id="input-group-2" label="Alias:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="editItem.alias"
                required
                size="sm"
                placeholder="Enter alias"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-3">
            <b-form-group
              id="input-group-2"
              label="Company Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="editItem.company_name"
                required
                size="sm"
                placeholder="Enter company name"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-4">
            <b-form-group id="input-group-2" label="Title:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="editItem.title"
                required
                size="sm"
                placeholder="Enter job title"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-4">
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
          <div class="col-xl-4">
            <b-form-group
              id="input-group-2"
              label="Telephone Number:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="editItem.phone"
                required
                size="sm"
                placeholder="Enter telephone number"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-xl-4">
            <b-form-group
              id="input-group-2"
              label="Department:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="editItem.department"
                required
                size="sm"
                placeholder="Enter department"
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
    item: {
      type: Object,
      default: function () {
        return {
          id: "",
          first_name: "",
          last_name: "",
          middle_name: "",
          suffix: "",
          alias: "",
          phone: "",
          address: "",
          company_name: "",
          title: "",
          department: "",
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
        middle_name: "",
        suffix: "",
        alias: "",
        phone: "",
        address: "",
        company_name: "",
        title: "",
        department: "",
        created_at: "",
        updated_at: "",
      },
      defaultItem: {
        id: "",
        first_name: "",
        last_name: "",
        middle_name: "",
        suffix: "",
        alias: "",
        phone: "",
        address: "",
        company_name: "",
        title: "",
        department: "",
        created_at: "",
        updated_at: "",
      },
      suffixes: ["Mr", "Mrs", "Miss", "Rev"],
    };
  },
  computed: {
    modalTitle() {
      if (this.isEdit) {
        return "Update Profile";
      } else {
        return "Create Profile";
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
  },
  methods: {
    cancel() {
      this.show = false;
      this.editItem = Object.assign({}, this.defaultItem);
      console.log("canceled");
    },
    async submit() {
      if (this.isEdit) {
        const response = await this.$axios.$put("/profiles/" + this.item.id, {
          ...this.editItem,
        });
      } else {
        const response = await this.$axios.$post("/profiles", {
          ...this.editItem,
        });
      }
      this.editItem = Object.assign({}, this.defaultItem);
      this.show = false;
      this.$emit("submited");
    },
  },
  mounted() {
    this.editItem = Object.assign({}, this.item);
    this.defaultItem = Object.assign({}, this.item);
  },
};
</script>

<style>
</style>
