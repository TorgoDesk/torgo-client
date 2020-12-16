<template>
  <!-- Form Modal -->
  <b-modal
    v-model="show"
    id="note-form"
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
          <div class="col-xl-12">
            <b-form-group id="input-group-1" label="Note:" label-for="input-1">
              <b-form-textarea
                id="textarea"
                v-model="editItem.content"
                placeholder="Enter something..."
                rows="3"
                size="sm"
                max-rows="6"
              ></b-form-textarea>
              <b-form-input hidden v-model="editItem.lead_id"></b-form-input>
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
    lead: null,
    editItemId: {
      type: Number,
      default: null,
    },
    item: {
      type: Object,
      default: function () {
        return {
          id: "",
          content: "",
          lead_id: "",
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
        content: "",
        lead_id: "",
        created_at: "",
        updated_at: "",
      },
      defaultItem: {
        id: "",
        content: "",
        lead_id: "",
        created_at: "",
        updated_at: "",
      },
    };
  },
  computed: {
    modalTitle() {
      if (this.isEdit) {
        return "Edit Note";
      } else {
        return "Create Note";
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
        const response = await this.$axios.$put("/notes/" + this.item.id, {
          ...this.editItem,
        });
      } else {
        console.log(this.editItem);
        const response = await this.$axios.$post("/notes", {
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