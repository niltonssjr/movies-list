<template>
  <v-card
    class="pa-1 d-inline-block rounded-b-xxl black"
    :style="{ position: 'relative' }"
  >
    <favorite-button
      :style="{
        position: 'absolute',
        right: '-10px',
        top: '-10px',
        zIndex: '2',
      }"
      :checked="isFavorite"
      @toggle-check="toggleFavorite"
    />
    <v-sheet>
      <v-img
        :src="movie.poster"
        lazy-src="https://placehold.co/300x500"
        height="394"
        width="265"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-sheet>
    <v-sheet
      height="100"
      width="265"
      class="py-2 px-0 d-flex flex-column justify-start align-center black"
    >
      <v-sheet
        class="text-body-1 text-uppercase font-weight-bold py-1 px-3 white--text rounded-md black"
        :title="movie.title"
      >
        {{ movie.title }}
      </v-sheet>
    </v-sheet>
  </v-card>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { MovieType } from "@/types/movieType";
import FavoriteButton from "./FavoriteButton.vue";

export default Vue.extend({
  components: {
    FavoriteButton,
  },
  props: {
    movie: {
      type: Object as PropType<MovieType>,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleFavorite() {
      this.$emit("toggle-favorite");
    },
  },
});
</script>
