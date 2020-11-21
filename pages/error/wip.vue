/*
  * This a page to show work in progress

*/


<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- 404 Error Text -->
    <div class="text-center">
      <div class="text-center">
        <img
          class="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style="width: 25rem"
          src="~/assets/img/undraw_work_in_progress_uhmv.svg"
          alt=""
        />
      </div>
      <p class="lead text-gray-800 mb-5">Page Is Under Construction</p>
      <p class="text-gray-500 mb-0">
        It looks like you found a glitch in the matrix...
      </p>
      <nuxt-link class="nav-link" to="/"> &larr; Back to Dashboard </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
};
</script>

<style>
</style>