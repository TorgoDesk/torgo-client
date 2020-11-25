<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <side-bar-partial></side-bar-partial>

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <nav-bar-partial></nav-bar-partial>

        <Nuxt />
        <!-- /.container-fluid -->
        <!-- End of Main Content -->
        <b-alert
          v-model="showConnectionAlert"
          class="position-fixed fixed-bottom m-0 rounded-0"
          style="z-index: 2000"
          variant="danger"
          dismissible
        >
          You seem to be offline! Some features may not work properly.
        </b-alert>
      </div>
      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website {{ year }}</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: "2020",
    };
  },
  computed: {
    showConnectionAlert() {
      return !this.$store.getters["connected"];
    },
  },
  created() {
    var vm = this;
    window.addEventListener("offline", () => {
      vm.$store.dispatch("setConnected", false);
    });
    window.addEventListener("online", () => {
      vm.$store.dispatch("setConnected", true);
    });
  },
};
</script>
