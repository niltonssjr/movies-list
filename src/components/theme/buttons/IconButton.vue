<template>
  <v-btn plain @click="$emit('click')" class="d-flex align-center">
    <v-icon :color="iconColor">{{ icon }}</v-icon>
    <v-sheet class="ml-2">{{ label }}</v-sheet>
  </v-btn>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "primary",
    },
  },
});
</script>
