<template>
  <div class="col-xl-3 col-md-6 mb-4">
    <div :class="'card ' + currentStatus.color + ' shadow h-100 py-2'">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div
              class="text-xs font-weight-bold text-white text-uppercase mb-1"
            >
              Current Status
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-100">
              {{ currentStatus.text }}
            </div>
          </div>
          <div class="col-auto">
            <i
              :class="'fas ' + currentStatus.icon + ' fa-2x text-gray-100'"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    currentStatus: function () {
      if (this.status == 1) {
        return {
          text: "Initiation",
          color: "bg-primary",
          icon: "fa-exclamation-circle",
        };
      } else if (this.status == 2) {
        return {
          text: "Negotiation",
          color: "bg-primary",
          icon: "fa-exclamation-circle",
        };
      } else if (this.status == 3) {
        return {
          text: "Conversion",
          color: "bg-primary",
          icon: "fa-exclamation-circle",
        };
      } else if (this.status == 4) {
        return {
          text: "Converted",
          color: "bg-success",
          icon: "fa-check-circle",
        };
      } else if (this.status == 5) {
        return {
          text: "Lost",
          color: "bg-danger",
          icon: "fa-check-circle",
        };
      } else {
        return {
          text: "No Status",
          color: "bg-secondary",
          icon: "fa-exclamation-circle",
        };
      }
    },
  },
};
</script>

<style>
</style>