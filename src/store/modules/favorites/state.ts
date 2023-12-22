import { MovieType } from "@/types/movieType";

export type FavoriteState = {
  favorites: Array<MovieType>;
  listConfig: {
    page: number;
    perPage: number;
  };
  ratings: Record<string, number>;
};

export default {
  favorites: [],
  listConfig: {
    page: 1,
    perPage: 10,
  },
  ratings: {},
} as FavoriteState;
