import { MovieType } from "@/types/movieType";
import { State } from "./state";

const SET_MOVIES_LIST = (state: State, moviesList: Array<MovieType>) => {
  state.movies = moviesList.map((movie: MovieType) => Object.freeze(movie));
};

export default {
  SET_MOVIES_LIST,
};
