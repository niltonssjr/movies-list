import { MovieType } from "@/types/movieType";
import { State } from "./state";

const SET_MOVIES_LIST = (state: State, moviesList: Array<MovieType>) => {
  state.movies = moviesList.map((movie: MovieType) => Object.freeze(movie));
};

const SET_MOVIES_SEARCH = (state: State, search: string) => {
  state.listConfig.search = search;
};

const SET_RECORD_COUNT = (state: State, recordCount: number) => {
  state.recordCount = recordCount;
};

const SET_MOVIES_PAGE = (state: State, page: number) => {
  state.listConfig.page = page;
};

export default {
  SET_MOVIES_LIST,
  SET_MOVIES_SEARCH,
  SET_RECORD_COUNT,
  SET_MOVIES_PAGE,
};
