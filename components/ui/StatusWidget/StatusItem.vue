<template>
  <div :class="'col-xl-2 text-center ' + textColor">
    {{ statusText }}
    <i :class="'fas fa-sm fa-fw ' + icon"></i>
  </div>
</template>

<script>
export default {
  props: ["statusText", "status"],
  data() {
    return {};
  },
  computed: {
    icon: function () {
      if (this.status == "done") {
        return "fa-check-circle";
      }
      return "fa-exclamation-circle";
    },
    textColor: function () {
      if (this.status == "done") {
        return "text-success";
      } else if (this.status == "inProgress") {
        return "text-primary";
      } else if (this.status == "lost") {
        return "text-danger";
      }
      return "";
    },
  },
};
</script>

<style>
</style>