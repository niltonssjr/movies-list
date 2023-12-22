<template>
  <v-app>
    <nav-bar />
    <v-main>
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import NavBar from "./NavBar.vue";
export default Vue.extend({
  components: {
    NavBar,
  },
  methods: {
    navigateTo(route: { name: string }) {
      this.$router.push(route);
    },
  },
});
</script>
