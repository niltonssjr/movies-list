<template>
  <standard-layout>
    <router-view />
  </standard-layout>
</template>
<script lang="ts">
import Vue from "vue";
import StandardLayout from "@/layouts/StandardLayout.vue";
export default Vue.extend({
  components: {
    StandardLayout,
  },
});
</script>
