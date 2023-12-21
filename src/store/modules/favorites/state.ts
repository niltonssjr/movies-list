import { MovieType } from "@/types/movieType";

export type FavoriteState = {
  favorites: Array<MovieType>;
};

export default {
  favorites: [],
} as FavoriteState;
