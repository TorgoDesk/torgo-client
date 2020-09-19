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
    <li class="nav-item">
      <a class="nav-link" href="index.html">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a
      >
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Interface</div>

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
        <i class="fas fa-fw fa-folder"></i>
        <span>Bookings Master</span>
      </a>
      <div
        id="collapseBookingMaster"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Bookings:</h6>
          <nuxt-link
            v-for="(item, index) in bookings"
            :key="index"
            class="collapse-item"
            :to="item.link"
            >{{ item.name }}</nuxt-link
          >
        </div>
      </div>
    </li>

    <!-- Nav Item - Utilities Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-wrench"></i>
        <span>Utilities</span>
      </a>
      <div
        id="collapseUtilities"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Custom Utilities:</h6>
          <a class="collapse-item" href="utilities-color.html">Colors</a>
          <a class="collapse-item" href="utilities-border.html">Borders</a>
          <a class="collapse-item" href="utilities-animation.html"
            >Animations</a
          >
          <a class="collapse-item" href="utilities-other.html">Other</a>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Advanced</div>

    <!-- Nav Item - Dictionaries Collapse Menu -->
    <li class="nav-item active">
      <a
        class="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>Dictionaries</span>
      </a>
      <div
        id="collapsePages"
        class="collapse show"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Globals:</h6>
          <nuxt-link
            v-for="(item, index) in dictionaries"
            :key="index"
            class="collapse-item"
            :to="item.link"
            >{{ item.name }}</nuxt-link
          >
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
        <i class="fas fa-fw fa-folder"></i>
        <span>Organization</span>
      </a>
      <div
        id="collapseOrganization"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Basic:</h6>
          <nuxt-link
            v-for="(item, index) in organization"
            :key="index"
            class="collapse-item"
            :to="item.link"
            >{{ item.name }}</nuxt-link
          >
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
      bookings: [
        { name: "Custom Booking", link: "/cities" },
        { name: "Package Booking", link: "/countries" },
      ],
      dictionaries: [
        { name: "Cities", link: "/cities" },
        { name: "Countries", link: "/countries" },
        { name: "Hotels", link: "/hotels" },
        { name: "Nationalities", link: "/nationalities" },
        { name: "Curencies", link: "/curencies" },
      ],
      organization: [
        { name: "Employees", link: "/employees" },
        { name: "Company Information", link: "/company-information" },
        { name: "Roles & Rights", link: "/roles-and-rights" },
        { name: "Departments", link: "/departments" },
      ],
    };
  },
};
</script>

<style>
</style>