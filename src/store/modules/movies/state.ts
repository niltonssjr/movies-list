import { MovieType } from "@/types/movieType";
const defaultSearch = "avengers";

export interface State {
  movies: Array<MovieType>;
  listConfig: {
    search: string;
    page: number;
  };
}
export default {
  movies: [],
  listConfig: {
    search: defaultSearch,
    page: 1,
  },
} as State;
