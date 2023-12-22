import { MovieType } from "@/types/movieType";
import { MovieStateType } from "./state";

const SET_MOVIES_LIST = (
  state: MovieStateType,
  moviesList: Array<MovieType>
) => {
  state.movies = moviesList.map((movie: MovieType) => Object.freeze(movie));
};

const SET_MOVIES_SEARCH = (state: MovieStateType, search: string) => {
  state.listConfig.search = search;
};

const SET_RECORD_COUNT = (state: MovieStateType, recordCount: number) => {
  state.recordCount = recordCount;
};

const SET_MOVIES_PAGE = (state: MovieStateType, page: number) => {
  state.listConfig.page = page;
};

export default {
  SET_MOVIES_LIST,
  SET_MOVIES_SEARCH,
  SET_RECORD_COUNT,
  SET_MOVIES_PAGE,
};
