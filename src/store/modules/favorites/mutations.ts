import { MovieType } from "@/types/movieType";
import { FavoriteState } from "./state";

const ADD_TO_FAVORITES = (state: FavoriteState, movie: MovieType) => {
  state.favorites.push(movie);
};

const REMOVE_FROM_FAVORITES = (
  state: FavoriteState,
  receivedMovie: MovieType
) => {
  const movieIndex: number = state.favorites.findIndex(
    (movie: MovieType) => movie.imdbID === receivedMovie.imdbID
  );
  state.favorites.splice(movieIndex, 1);
};

export default {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
};
