<template>
  <v-btn
    plain
    @click="$emit('click')"
    class="d-flex align-center"
    :class="buttonColor"
  >
    <v-icon :color="iconColor" size>{{ icon }}</v-icon>
    <v-sheet class="ml-2" v-if="label">{{ label }}</v-sheet>
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
    buttonColor: {
      type: String,
      default: "transparent",
    },
  },
});
</script>
