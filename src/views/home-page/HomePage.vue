<template>
  <div>
    <div class="mt-10 mb-6 text-h6 text-md-h4 text-lg-h3 text-center pa-2">
      Which movie are you looking for?
    </div>
    <div class="py-3 px-16">
      <search-movies class="mb-10" />
    </div>
    <movies-list :movies-list="movies" v-if="movies.length" />
    <no-movies-found v-else />
    <div class="d-flex-justify-center py-10">
      <paginator-buttons
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
import NoMoviesFound from "@/components/common/NoMoviesFound.vue";

export default Vue.extend({
  components: {
    MoviesList,
    SearchMovies,
    PaginatorButtons,
    NoMoviesFound,
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
