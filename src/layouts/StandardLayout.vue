<template>
  <v-app>
    <v-app-bar app elevation="2" dense color="white">
      <v-container class="d-flex flex-row justify-space-between align-center">
        <v-toolbar-title><navbar-logo /></v-toolbar-title>
        <v-sheet class="d-flex flex-row justify-end align-center">
          <icon-button icon="mdi-movie" label="Search" />
          <icon-button icon="mdi-heart" label="My favorites" icon-color="red" />
        </v-sheet>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import { IconButton } from "@/components/theme/buttons";
import NavbarLogo from "@/components/layout-components/NavbarLogo.vue";
export default Vue.extend({
  components: {
    IconButton,
    NavbarLogo,
  },
});
</script>
