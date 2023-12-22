<template>
  <v-sheet class="d-flex justify-center align-center">
    <icon-button
      icon="mdi-arrow-left-bold-circle"
      buttonColor="primary"
      iconColor="white"
      v-once
      class="mr-3"
      v-if="showPriorButton"
      @click="goToPreviousPage"
    />
    <icon-button
      icon="mdi-arrow-right-bold-circle"
      buttonColor="primary"
      iconColor="white"
      v-once
      v-if="showNextButton"
      @click="goToNextPage"
    />
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import { IconButton } from "../theme/buttons";

export default Vue.extend({
  components: {
    IconButton,
  },
  props: {
    recordCount: {
      type: [Number, String],
      default: 1,
    },
    page: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    showPriorButton(): boolean {
      return Number(this.recordCount) > this.perPage && Number(this.page) > 1;
    },
    showNextButton(): boolean {
      const maxPage: number = Math.ceil(
        Number(this.recordCount) / Number(this.perPage)
      );
      return (
        Number(this.recordCount) > this.perPage && Number(this.page) < maxPage
      );
    },
  },
  methods: {
    paginate(pageNumber: number) {
      this.$emit("paginate", pageNumber);
    },
    goToPreviousPage() {
      this.paginate(this.page - 1);
    },
    goToNextPage() {
      this.paginate(this.page + 1);
    },
  },
});
</script>
