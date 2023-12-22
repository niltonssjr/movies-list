<template>
  <v-text-field
    v-model="inputValue"
    :label="label"
    :full-width="true"
    class="light-grey"
    rounded
    dense
  ></v-text-field>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      debounceControl: 0 as number,
      debounceTimeInMillisseconds: 500 as number,
      inputValue: "" as string,
    };
  },
  watch: {
    value: {
      handler(newValue) {
        this.inputValue = newValue;
      },
    },
    inputValue: {
      handler() {
        clearTimeout(this.debounceControl);
        this.debounceControl = setTimeout(() => {
          this.$emit("input", this.inputValue);
        }, this.debounceTimeInMillisseconds);
      },
    },
  },
});
</script>
