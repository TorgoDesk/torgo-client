<template>
  <!-- Form Modal -->
  <b-modal
    id="welcoming-modal"
    v-model="show"
    centered
    no-fade
    hide-footer
    size="md"
  >
    <template v-slot:default>
      <div class="text-center">
        <img
          class="img-fluid px-3 px-sm-4 mb-4"
          style="width: 25rem"
          src="~/assets/img/undraw_balloons_vxx5.svg"
          alt=""
        />
      </div>
      <h1>Hey {{ user.name }}!</h1>
      <p>
        Welcome to Torgo. We're super excited to have you on board! Please take
        a moment to update your profile
      </p>
      <div class="text-right">
        <span style="cursor: pointer" @click="cancel()" class="mr-2"
          >Later</span
        >
        <b-button to="/profile" size="md" variant="success"> Take me </b-button>
      </div>
    </template>
  </b-modal>
  <!-- Form Modal End -->
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      show: false,
      modalTitle: "Welcome Saahiththiyan",
    };
  },
  computed: {},
  watch: {},
  methods: {
    cancel() {
      this.show = false;
    },
  },
  mounted() {},
};
</script>

<style>
.modal-header {
  border-bottom: none;
}
</style>