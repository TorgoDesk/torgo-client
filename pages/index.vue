<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      <a
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        ><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a
      >
    </div>

    <!-- Content Row -->
    <div class="row">
      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <b-overlay :show="!currentDate" rounded="sm">
          <div class="card bg-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div
                    class="text-xs font-weight-bold text-white text-uppercase mb-1"
                  >
                    {{ currentDate }} ({{ currentDay }})
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-100">
                    {{ currentTime }}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </b-overlay>
      </div>

      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card bg-info shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-white text-uppercase mb-1"
                >
                  Colombo
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-100">
                  Mostly Sunny
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-cloud-sun fa-2x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-info shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-info text-uppercase mb-1"
                >
                  Weekly Goal
                </div>
                <div class="row no-gutters align-items-center">
                  <div class="col-auto">
                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      50%
                    </div>
                  </div>
                  <div class="col">
                    <div class="progress progress-sm mr-2">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style="width: 50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pending Requests Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-warning shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                >
                  Pending Bookings
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-comments fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Row -->

    <div class="row">
      <!-- Pie Chart -->
      <div class="col-xl-4 col-lg-5">
        <b-overlay :show="!pieData">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <h6 class="m-0 font-weight-bold text-primary">
                Your Leads Breakdown
              </h6>
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
                :chartData="pieData"
              ></pie-chart>
              <div class="mt-4 text-center small">
                <span class="mr-2">
                  <i class="fas fa-circle text-primary"></i> Initiated
                </span>
                <span class="mr-2">
                  <i class="fas fa-circle text-success"></i> Converted
                </span>
                <span class="mr-2">
                  <i class="fas fa-circle text-warning"></i> In Negotiation
                </span>
                <span class="mr-2">
                  <i class="fas fa-circle text-danger"></i> Lost
                </span>
              </div>
            </div>
          </div>
        </b-overlay>
      </div>
      <!-- Line Chart -->
      <div class="col-xl-8 col-lg-5">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 class="m-0 font-weight-bold text-primary">
              Your New Leads (Last 7 Days)
            </h6>
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
            <line-chart
              class="chart-pie pt-4 pb-2"
              :options="lineOptions"
              :chartData="lineData"
            ></line-chart>
            <div class="mt-4 text-center small">
              <span class="mr-2">
                Overall lead accumulation for the past 7 days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Row -->
    <div class="row">
      <!-- Content Column -->
      <div class="col-lg-6 mb-4">
        <!-- Project Card Example -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
          </div>
          <div class="card-body">
            <h4 class="small font-weight-bold">
              Server Migration <span class="float-right">20%</span>
            </h4>
            <div class="progress mb-4">
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 class="small font-weight-bold">
              Sales Tracking <span class="float-right">40%</span>
            </h4>
            <div class="progress mb-4">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style="width: 40%"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 class="small font-weight-bold">
              Customer Database <span class="float-right">60%</span>
            </h4>
            <div class="progress mb-4">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 60%"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 class="small font-weight-bold">
              Payout Details <span class="float-right">80%</span>
            </h4>
            <div class="progress mb-4">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style="width: 80%"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 class="small font-weight-bold">
              Account Setup <span class="float-right">Complete!</span>
            </h4>
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 100%"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-4">
        <!-- Illustrations -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
          </div>
          <div class="card-body">
            <div class="text-center">
              <img
                class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style="width: 25rem"
                src="~/assets/img/undraw_posting_photo.svg"
                alt=""
              />
            </div>
            <p>
              Add some quality, svg illustrations to your project courtesy of
              <a target="_blank" rel="nofollow" href="https://undraw.co/"
                >unDraw</a
              >, a constantly updated collection of beautiful svg images that
              you can use completely free and without attribution!
            </p>
            <a target="_blank" rel="nofollow" href="https://undraw.co/"
              >Browse Illustrations on unDraw &rarr;</a
            >
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
import LineChart from "~/components/charts/LineChart";
import moment from "moment";
export default {
  middleware: "auth",
  components: {
    SideBarPartial,
    NavBarPartial,
    PieChart,
    LineChart,
  },
  data() {
    return {
      items: null,
      currentDate: null,
      currentTime: null,
      currentDay: null,
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
      lineOptions: {
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
    };
  },
  computed: {
    pieData: function () {
      // console.log(this.items);
      try {
        return {
          labels: ["In Negotiation", "Initiated", "Won", "Lost"],
          datasets: [
            {
              data: [
                this.items.leadsInNegotiation,
                this.items.leadsInitiated,
                this.items.leadsConverted,
                this.items.leadsLost,
              ],
              backgroundColor: ["#f6c23e", "#4e73df", "#1cc88a", "#e74a3b"],
              hoverBackgroundColor: [
                "#d6a936",
                "#2e59d9",
                "#17a673",
                "#e74a3b",
              ],
              hoverBorderColor: "rgba(234, 236, 244, 1)",
            },
          ],
        };
      } catch (error) {}
    },
    lineData: function () {
      if (this.items != null) {
        // wait till the items data is fetched from the api otherwise an error is thrown
        let dateLabels = [];
        let leadCountData = [];
        this.items.leadsLast7Days.forEach(({ day, count }) => {
          // loop through the leadsLast7Days array and destructure each object element as day and count
          dateLabels.unshift(day); // add days to the front of dateLabels array
          leadCountData.unshift(count);
        });
        return {
          labels: [...dateLabels], // spread the dateLabels array to fill the labels
          datasets: [
            {
              data: [...leadCountData],
              label: "Leads",
              borderColor: "#3e95cd",
              fill: false,
            },
          ],
        };
      }
    },
  },
  methods: {
    async fetchData() {
      const items = await this.$axios.$get("/dashboard");
      this.items = items;
      // console.log(this.items);
    },
    getNow: function () {
      this.currentDate = moment().format("LL");
      this.currentTime = moment().format("LT");
      this.currentDay = moment().format("dddd");
    },
  },
  mounted() {
    this.getNow();
    setInterval(this.getNow, 60000);
    this.fetchData();
  },
};
</script>

<style>
</style>