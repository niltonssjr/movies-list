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

const SET_RATE = (
  state: FavoriteState,
  { imdbID, rating }: { imdbID: string; rating: number }
) => {
  state.ratings = {
    ...state.ratings,
    [imdbID]: rating,
  };
};

const SET_FAVORITES_PAGE = (state: FavoriteState, page: number) => {
  state.listConfig.page = page;
};

export default {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_FAVORITES_PAGE,
  SET_RATE,
};
