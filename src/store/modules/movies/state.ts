import { MovieType } from "@/types/movieType";
const defaultSearch = process.env.VUE_APP_DEFAULT_SEARCH;
const placeholderMovies: Array<MovieType> = [
  { imdbID: "1", poster: "http://bad.image", title: "", year: "", type: "" },
  { imdbID: "2", poster: "http://bad.image", title: "", year: "", type: "" },
  { imdbID: "3", poster: "http://bad.image", title: "", year: "", type: "" },
  { imdbID: "4", poster: "http://bad.image", title: "", year: "", type: "" },
  { imdbID: "5", poster: "http://bad.image", title: "", year: "", type: "" },
  { imdbID: "6", poster: "http://bad.image", title: "", year: "", type: "" },
  { imdbID: "7", poster: "http://bad.image", title: "", year: "", type: "" },
  { imdbID: "8", poster: "http://bad.image", title: "", year: "", type: "" },
];

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
  movies: placeholderMovies,
  listConfig: {
    search: defaultSearch,
    page: 1,
  },
  recordCount: 1,
  perPage: 10,
  defaultSearch,
} as MovieStateType;
