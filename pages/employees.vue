<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">User Statistics</h1>
      <a
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        ><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a
      >
    </div>

    <!-- Content Row -->
    <div class="row">
      <!-- Users Total Count -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >
                  Total Users
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{ userMetrics.total }}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-users fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Users joined last month -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-success text-uppercase mb-1"
                >
                  Users joined (Native)
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{userMetrics.native}}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-user fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Users signed in with OAuth platforms -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-success text-uppercase mb-1"
                >
                  Users joined (Google)
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{userMetrics.google}}
                </div>
              </div>
              <div class="col-auto">
                <i class="fab fa-google fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Users signed in with OAuth platforms -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-success text-uppercase mb-1"
                >
                  Users joined (Facebook)
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{userMetrics.facebook}}
                </div>
              </div>
              <div class="col-auto">
                <i class="fab fa-facebook fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Row -->

    <div class="row">
      <!-- Area Chart -->
      <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 class="m-0 font-weight-bold text-primary">User list</h6>
            <div class="dropdown no-arrow">
              <a
                class="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div class="dropdown-header">Dropdown Header:</div>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
          <!-- Card Body -->
          <div class="card-body">
            <p>Under Construction</p>
          </div>
        </div>
      </div>

      <!-- Pie Chart -->
      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 class="m-0 font-weight-bold text-primary">Users Breakdown</h6>
            <div class="dropdown no-arrow">
              <a
                class="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div class="dropdown-header">Dropdown Header:</div>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
          <!-- Card Body -->
          <div class="card-body">
            <pie-chart
              class="chart-pie pt-4 pb-2"
              :options="pieOptions"
              :chart-data="pieData"
            ></pie-chart>
            <div class="mt-4 text-center small">
              <span class="mr-2">
                <i class="fas fa-circle text-primary"></i>  Native
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-success"></i> Google
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-info"></i> Facebook
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.container-fluid -->
</template>

<script>
import SideBarPartial from "~/components/partials/SideBarPartial";
import NavBarPartial from "~/components/partials/NavBarPartial";
import PieChart from "~/components/charts/PieChart";
export default {
  middleware: "auth",
  components: {
    SideBarPartial,
    NavBarPartial,
    PieChart,
  },
  data() {
    return {
      pageInfo: {
        slug: "users",
      },
      error: null,
      pieOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        cutoutPercentage: 80,
      },
      pieData: {},
      userMetrics : {
        total : 0,
        native : 0,
        google : 0,
        facebook : 0,
      }
    };
  },
  methods: {
    async fetchItems() {
      try {
        this.userMetrics = await this.$axios.$get(
          "/" +
          this.pageInfo.slug +
          "/metrics"
        );
        this.pieData = {
          labels: ["Native", "Google", "Facebook"],
          datasets:[{
            data: [this.userMetrics.native, this.userMetrics.google, this.userMetrics.facebook],
            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
            hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        };
        // this.pieData.datasets[0].data.push(this.userMetrics.native)
        // this.pieData.datasets[0].data.push(this.userMetrics.google)
        // this.pieData.datasets[0].data.push(this.userMetrics.facebook)
      } catch (error) {
        this.error = error;
      }
    },
  },
  mounted() {
    this.fetchItems();
  },
};
</script>

<style>
</style>
