<template>
  <div class="row">
    <div class="col-xl-2 text-center"></div>
    <status-item
      :statusText="statuses.initiation.text"
      :status="statuses.initiation.status"
    ></status-item>
    <div class="col-xl-1 text-center">
      <i class="fas fa-sm fa-fw fa-long-arrow-alt-right"></i>
    </div>
    <status-item
      :statusText="statuses.negotiation.text"
      :status="statuses.negotiation.status"
    ></status-item>
    <div class="col-xl-1 text-center">
      <i class="fas fa-sm fa-fw fa-long-arrow-alt-right"></i>
    </div>
    <status-item
      :statusText="statuses.conversion.text"
      :status="statuses.conversion.status"
    ></status-item>
    <div class="col-xl-2 text-center"></div>
  </div>
</template>

<script>
import StatusItem from "~/components/ui/StatusWidget/StatusItem";
export default {
  props: ["status"],
  components: {
    StatusItem,
  },
  data() {
    return {};
  },
  computed: {
    statuses: function () {
      return {
        initiation: {
          text: "Initiation",
          status:
            this.status == 1 ? "inProgress" : this.status > 1 ? "done" : "",
        },
        negotiation: {
          text: "Negotiation",
          status:
            this.status == 2 ? "inProgress" : this.status > 2 ? "done" : "",
        },
        conversion: {
          text: this.status == 5 ? "Lost" : "Conversion",
          status:
            this.status == 3
              ? "inProgress"
              : this.status > 3
              ? this.status == 5
                ? "lost"
                : "done"
              : "",
        },
      };
    },
  },
};
</script>

<style>
</style>