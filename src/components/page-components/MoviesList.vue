<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="(movie, index) in moviesList" :key="index">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { MovieType } from "@/types/movieType";

export default Vue.extend({
  props: {
    moviesList: {
      type: Array as PropType<Array<MovieType>>,
      default: () => [],
    },
  },
});
</script>
