<template>
  <DebounceTextInput v-model="search" label="Find amazing movies here!" />
</template>
<script lang="ts">
import Vue from "vue";
import DebounceTextInput from "@/components/common/DebounceTextInput.vue";
import { mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      search: "" as string,
    };
  },
  watch: {
    search: {
      handler(newValue) {
        this.searchMovies(newValue);
      },
    },
  },
  components: { DebounceTextInput },
  methods: {
    ...mapActions("movies", ["actionSearchMovies"]),
    searchMovies(searchText: string) {
      this.actionSearchMovies({ search: searchText });
    },
  },
});
</script>
