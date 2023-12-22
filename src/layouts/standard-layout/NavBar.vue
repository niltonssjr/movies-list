<template>
  <v-app-bar app elevation="2" color="white">
    <v-container class="d-flex flex-row justify-space-between align-center">
      <v-toolbar-title><navbar-logo /></v-toolbar-title>
      <v-sheet class="d-flex flex-row justify-end align-center">
        <icon-button
          icon="mdi-movie"
          label="Search"
          @click="navigateTo({ name: 'Home' })"
        />
        <v-badge bordered color="primary" content="235" overlap>
          <icon-button
            icon="mdi-heart"
            label="My favorites"
            icon-color="red"
            @click="navigateTo({ name: 'Favorites' })"
          />
        </v-badge>
      </v-sheet>
    </v-container>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
import { IconButton } from "@/components/theme/buttons";
import NavbarLogo from "./NavbarLogo.vue";

export default Vue.extend({
  components: {
    IconButton,
    NavbarLogo,
  },
  methods: {
    navigateTo(route: { name: string }) {
      this.$router.push(route);
    },
  },
});
</script>
