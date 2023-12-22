<template>
  <div class="text-center mt-1">
    <v-rating
      v-model="localRate"
      background-color="white"
      color="yellow accent-4"
      dense
      min="1"
      max="5"
      full-icon="mdi-star"
      empty-icon="mdi-star"
      size="18"
    ></v-rating>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    value: {
      type: [String, Number],
      default: 5,
    },
  },
  data() {
    return {
      localRate: 3 as number,
    };
  },
  watch: {
    value: {
      handler() {
        this.localRate = Number(this.value);
      },
      immediate: true,
    },
    localRate: {
      handler() {
        this.$emit("input", this.localRate);
      },
    },
  },
});
</script>
