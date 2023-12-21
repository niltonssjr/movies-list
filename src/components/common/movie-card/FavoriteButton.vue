<template>
  <v-sheet
    class="rounded-circle white pa-1"
    elevation="6"
    title="Add to favorites"
    :style="{ cursor: 'pointer' }"
    @click="toggleChecked"
  >
    <v-icon large :color="heartColor">mdi-heart</v-icon>
  </v-sheet>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    heartColor(): string {
      return this.checked ? "red" : "red lighten-5";
    },
  },
  methods: {
    toggleChecked() {
      this.$emit("toggle-check");
    },
  },
});
</script>
