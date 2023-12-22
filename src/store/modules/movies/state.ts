import { MovieType } from "@/types/movieType";
const defaultSearch = process.env.VUE_APP_DEFAULT_SEARCH;

export interface MovieStateType {
  movies: Array<MovieType>;
  listConfig: {
    search: string;
    page: number;
  };
  recordCount: number;
  perPage: number;
  defaultSearch: string;
}
export default {
  movies: [],
  listConfig: {
    search: defaultSearch,
    page: 1,
  },
  recordCount: 1,
  perPage: 10,
  defaultSearch,
} as MovieStateType;
