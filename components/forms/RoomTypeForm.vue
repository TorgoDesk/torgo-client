<template>
  <!-- Form Modal -->
  <b-modal
    v-model="show"
    id="room-type-form"
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
              label="Room Type:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="editItem.name"
                type="text"
                size="sm"
                required
                placeholder="Enter room type"
              ></b-form-input>
            </b-form-group>
          </div>
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
          description: "",
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
        description: "",
        created_at: "",
        updated_at: "",
      },
      defaultItem: {
        id: "",
        name: "",
        description: "",
        created_at: "",
        updated_at: "",
      },
    };
  },
  computed: {
    modalTitle() {
      if (this.isEdit) {
        return "Edit Room Type";
      } else {
        return "Create Room Type";
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
        const response = await this.$axios.$put("/room-types/" + this.item.id, {
          ...this.editItem,
        });
      } else {
        console.log(this.editItem);
        const response = await this.$axios.$post("/room-types", {
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