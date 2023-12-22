<template>
  <v-sheet>
    <v-sheet class="my-10 d-flex flex-column justify-start align-center">
      <div class="text-h3">
        <v-icon color="red" large>mdi-heart</v-icon>My Favorite Movies
      </div>
    </v-sheet>
    <MoviesList :movies-list="getFavoritesPage" />
    <v-sheet class="d-flex-justify-center py-10">
      <PaginatorButtons
        :record-count="getFavoritesRecordCount"
        :page="listConfig.page"
        :per-page="listConfig.perPage"
        @paginate="paginate"
      />
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import MoviesList from "@/components/common/MoviesList.vue";

import { mapState, mapActions, mapGetters } from "vuex";
import PaginatorButtons from "@/components/common/PaginatorButtons.vue";

export default Vue.extend({
  components: {
    MoviesList,
    PaginatorButtons,
  },
  computed: {
    ...mapGetters("favorites", ["getFavoritesPage", "getFavoritesRecordCount"]),
    ...mapState("favorites", ["listConfig"]),
  },
  methods: {
    ...mapActions("favorites", ["actionPaginateFavorites"]),
    async paginate(page: number) {
      await this.actionPaginateFavorites({ page });
    },
  },
});
</script>
