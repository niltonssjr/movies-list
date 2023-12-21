<template>
  <v-sheet>
    <v-sheet class="my-10 d-flex flex-column justify-start align-center">
      <div class="text-h3">Search for movies!</div>
    </v-sheet>
    <search-movies class="mb-10" />
    <MoviesList :movies-list="movies" />
    <v-sheet class="d-flex-justify-center py-10">
      <PaginatorButtons
        :record-count="recordCount"
        :page="listConfig.page"
        :per-page="perPage"
        @paginate="paginate"
      />
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import MoviesList from "@/components/common/MoviesList.vue";
import SearchMovies from "@/components/page-components/home-page/SearchMovies.vue";

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
