import { MovieType } from "@/types/movieType";
import { Commit } from "vuex";
const actionPaginateFavorites = (
  { commit }: { commit: Commit },
  { page }: { page: number }
) => {
  commit("SET_FAVORITES_PAGE", page);
};

const actionAddToFavorites = (
  { commit }: { commit: Commit },
  { movie }: { movie: MovieType }
) => {
  commit("ADD_TO_FAVORITES", movie);
  commit("SET_RATE", { imdbID: movie.imdbID, rating: 5 });
};

const actionRemoveFromFavorites = (
  { commit }: { commit: Commit },
  { movie }: { movie: MovieType }
) => {
  commit("REMOVE_FROM_FAVORITES", movie);
};

export default {
  actionPaginateFavorites,
  actionAddToFavorites,
  actionRemoveFromFavorites,
};
