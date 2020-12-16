<template>
  <div class="dropdown-list">
    <div class="note-item d-flex align-items-center">
      <div class="dropdown-list-image mr-3">
        <img
          class="rounded-circle"
          style="height: 2rem; width: 2rem"
          :src="note.user.profile.profile_pic_url"
          alt=""
        />
        <div class="status-indicator bg-success"></div>
      </div>
      <div class="font-weight-bold">
        <div class="text-truncate text-gray-600">
          {{ note.content }}
        </div>
        <div class="small text-gray-500">
          {{ note.user.name }} ·
          <span class="text-primary">{{ note.createdFromNow }} ago</span>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="row bg-gray-100 p-2 rounded mt-2">
    <div class="col-xl-2 text-center">
      <div class="p-2">
        <img
          style="height: 2rem; width: 2rem"
          class="img-profile rounded-circle"
          src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
        />
      </div>
      <span class="d-none d-lg-inline text-gray-600 small">{{
        note.user.name
      }}</span>
    </div>
    <div class="col-xl-10">
      <div>
        {{ note.content }}
      </div>
      <div class="text-gray-500 h6 text-right">on {{ note.created_at }}</div>
    </div>
  </div> -->
</template>

<script>
export default {
  props: ["note"],
  computed: {},
};
</script>

<style>
.note-item {
  display: block;
  width: 100%;
  padding: 0.25rem;
  clear: both;
  font-weight: 400;
  color: #3a3b45;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
</style>