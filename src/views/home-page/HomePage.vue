<template>
  <div>
    <div class="mt-10 mb-6 text-h3 text-center">
      Which movie are you looking for?
    </div>
    <div class="py-3 px-16">
      <search-movies class="mb-10" />
    </div>
    <MoviesList :movies-list="movies" />
    <div class="d-flex-justify-center py-10">
      <PaginatorButtons
        :record-count="recordCount"
        :page="listConfig.page"
        :per-page="perPage"
        @paginate="paginate"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MoviesList from "@/components/common/MoviesList.vue";
import SearchMovies from "./SearchMovies.vue";

import { mapState, mapActions } from "vuex";
import PaginatorButtons from "@/components/common/PaginatorButtons.vue";

export default Vue.extend({
  components: {
    MoviesList,
    SearchMovies,
    PaginatorButtons,
  },
  computed: {
    ...mapState("movies", ["movies", "recordCount", "listConfig", "perPage"]),
  },
  mounted() {
    this.listMovies();
  },
  methods: {
    ...mapActions("movies", ["actionListMovies", "actionPaginateMovies"]),
    async listMovies() {
      await this.actionListMovies();
    },
    async paginate(page: number) {
      await this.actionPaginateMovies({ page });
    },
  },
});
</script>
