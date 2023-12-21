import { MovieType } from "@/types/movieType";
import { FavoriteState } from "./state";

const getFavoritesIds = (state: FavoriteState) =>
  state.favorites.map((movie: MovieType) => movie.imdbID);

export default {
  getFavoritesIds,
};
