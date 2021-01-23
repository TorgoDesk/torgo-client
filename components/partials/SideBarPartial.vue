<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">Torgo Desk</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li :class="'nav-item ' + linkActive(dashboard.link).activeClass">
      <nuxt-link class="nav-link" :to="dashboard.link"
        ><i class="fas fa-fw fa-columns"></i>
        <span>{{ dashboard.name }}</span></nuxt-link
      >
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Operations</div>

    <!-- Nav Item - Dictionaries Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapseBookingMaster"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-list"></i>
        <span>{{ bookingsMaster.name }}</span>
      </a>
      <div
        id="collapseBookingMaster"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <div v-for="(item, index) in bookingsMaster.subSections" :key="index">
            <h6 class="collapse-header">{{ item.name }}:</h6>
            <nuxt-link
              v-for="(item, index) in item.modules"
              :key="index"
              class="collapse-item"
              :to="item.link"
              ><i :class="item.iconClass + ' text-primary'"></i>
              {{ item.name }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Advanced</div>

    <!-- Nav Item - Dictionaries Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>{{ dictionaries.name }}</span>
      </a>
      <div
        id="collapsePages"
        class="collapse show"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <div v-for="(item, index) in dictionaries.subSections" :key="index">
            <h6 class="collapse-header">{{ item.name }}:</h6>
            <nuxt-link
              v-for="(item, index) in item.modules"
              :key="index"
              class="collapse-item"
              :to="item.link"
              ><i :class="item.iconClass + ' text-primary'"></i>
              {{ item.name }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </li>

    <!-- Nav Item - Organization Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapseOrganization"
        aria-expanded="false"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-couch"></i>
        <span>Organization</span>
      </a>
      <div
        id="collapseOrganization"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <div v-for="(item, index) in organization.subSections" :key="index">
            <h6 class="collapse-header">{{ item.name }}:</h6>
            <nuxt-link
              v-for="(item, index) in item.modules"
              :key="index"
              class="collapse-item"
              :to="item.link"
              ><i :class="item.iconClass + ' text-primary'"></i>
              {{ item.name }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
export default {
  data() {
    return {
      dashboard: { name: "Dashboard", link: "/" },
      bookingsMaster: {
        name: "Bookings Master",
        subSections: [
          {
            name: "Leads",
            modules: [
              {
                name: "Leads",
                link: "/leads",
                iconClass: "fas fa-fw fa-users",
                colorClass: "badge badge-primary",
              },
            ],
          },
          {
            name: "Bookings",
            modules: [
              {
                name: "Bookings",
                link: "/bookings",
                iconClass: "fas fa-fw fa-plane",
              },
              {
                name: "Templates",
                link: "/error/wip",
                iconClass: "fas fa-fw fa-cubes",
              },
            ],
          },
        ],
      },
      dictionaries: {
        name: "Dictionaries",
        subSections: [
          {
            name: "Locations",
            modules: [
              {
                name: "Cities",
                link: "/cities",
                iconClass: "fas fa-fw fa-city",
              },
              {
                name: "Countries",
                link: "/countries",
                iconClass: "fas fa-fw fa-globe-americas",
              },
            ],
          },
          {
            name: "Hospitality",
            modules: [
              {
                name: "Hotels",
                link: "/hotels",
                iconClass: "fas fa-fw fa-hotel",
              },
              {
                name: "Room Types",
                link: "/room-types",
                iconClass: "fas fa-fw fa-bed",
              },
              {
                name: "Restaurants",
                link: "/error/wip",
                iconClass: "fas fa-fw fa-utensils",
              },
            ],
          },
          {
            name: "Transports",
            modules: [
              {
                name: "Suppliers",
                link: "/error/wip",
                iconClass: "fas fa-fw fa-users",
              },
              {
                name: "Vehicles",
                link: "/error/wip",
                iconClass: "fas fa-fw fa-car",
              },
              {
                name: "Drivers",
                link: "/error/wip",
                iconClass: "fas fa-fw fa-user-astronaut",
              },
              {
                name: "Flights",
                link: "/error/wip",
                iconClass: "fas fa-fw fa-plane",
              },
            ],
          },
        ],
      },
      organization: {
        name: "Organization",
        subSections: [
          {
            name: "Basic",
            modules: [
              {
                name: "Employees",
                link: "/employees",
                iconClass: "fas fa-fw fa-users",
              },
              {
                name: "Company Information",
                link: "/error/wip",
                iconClass: "fas fa-fw fa-building",
              },
              {
                name: "Roles & Rights",
                link: "/error/wip",
                iconClass: "fas fa-fw fa-user-tag",
              },
              {
                name: "Departments",
                link: "/error/wip",
                iconClass: "fas fa-fw fa-mail-bulk",
              },
            ],
          },
          {
            name: "Access Controls",
            modules: [
              {
                name: "Roles & Rights",
                link: "/error/wip",
                iconClass: "fas fa-fw fa-user-tag",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    linkActive(path) {
      var active = "active";
      if (this.$route.path === path) {
        return {
          activeClass: "active",
        };
      } else {
        return {
          activeClass: "",
        };
      }
    },
  },
};
</script>

<style>
</style>
