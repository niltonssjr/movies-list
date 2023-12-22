import { MovieType } from "@/types/movieType";

export type FavoriteState = {
  favorites: Array<MovieType>;
  listConfig: {
    page: number;
    perPage: number;
  };
};

export default {
  favorites: [],
  listConfig: {
    page: 1,
    perPage: 10,
  },
} as FavoriteState;
