<template>
  <div class="card shadow mb-4">
    <!-- Card Header -->

    <b-overlay :show="false" rounded="sm">
      <div
        class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
      >
        <h6 class="m-0 font-weight-bold text-primary">{{ cardTitle }}</h6>

        <div>
          <b-button variant="success" size="sm" v-b-modal="formName"
            ><i class="fas fa-sm fa-fw fa-plus"></i>Add New</b-button
          >
          <b-button
            variant="secondary"
            size="sm"
            v-b-tooltip.hover.top
            title="Filter"
            ><i class="fas fa-sm fa-fw fa-filter"></i
          ></b-button>
          <b-button
            variant="secondary"
            size="sm"
            v-b-tooltip.hover
            title="Print"
            ><i class="fas fa-sm fa-fw fa-print"></i
          ></b-button>
          <b-button
            variant="secondary"
            size="sm"
            v-b-tooltip.hover
            title="Export as Excel"
            ><i class="fas fa-sm fa-fw fa-file-excel"></i
          ></b-button>
          <b-button
            variant="secondary"
            size="sm"
            v-b-tooltip.hover
            title="Import .csv file"
            ><i class="fas fa-sm fa-fw fa-file-upload"></i
          ></b-button>
          <b-button variant="success" size="sm" v-b-tooltip.hover title="Sync"
            ><i class="fas fa-sm fa-fw fa-sync-alt"></i
          ></b-button>
        </div>
      </div>
      <!--  Card Header End -->
      <!-- Card Body -->
      <div class="card-body">
        <slot name="card-body"></slot>
      </div>
    </b-overlay>
    <!-- Card Body End -->
  </div>
</template>

<script>
export default {
  props: ["cardTitle", "formName"],
};
</script>

<style>
/* With out the stype below the tool-tip pop-up will move to the left corner of each button. https://github.com/bootstrap-vue/bootstrap-vue/issues/1732  */
.tooltip {
  top: 0;
}
</style>