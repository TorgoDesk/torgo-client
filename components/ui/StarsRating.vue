<template>
  <span>
    <i
      v-for="n in stars"
      :key="`stars_${n}`"
      class="fas fa-star fa-sm fa-fw text-warning"
    ></i
    ><i
      v-for="m in grayStars"
      :key="`grayStars_${m}`"
      class="fas fa-star fa-sm fa-fw text-gray-400"
    ></i>
  </span>
</template>

<script>
export default {
  props: {
    stars: Number,
  },
  data() {
    return {};
  },
  computed: {
    grayStars: function () {
      return 5 - this.stars;
    },
  },
};
</script>

<style>
</style>
