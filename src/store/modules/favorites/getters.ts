import { MovieType } from "@/types/movieType";
import { FavoriteState } from "./state";

const getFavoritesIds = (state: FavoriteState) =>
  state.favorites.map((movie: MovieType) => movie.imdbID);

const getFavoritesRecordCount = (state: FavoriteState) => {
  return state.favorites.length;
};

const getFavoritesPage = (state: FavoriteState) => {
  const { perPage, page } = state.listConfig;
  const startPosition: number = (page - 1) * perPage;
  return state.favorites
    .slice(startPosition, startPosition + perPage)
    .map((movie: MovieType) => ({
      ...movie,
      ratings: state.ratings[movie.imdbID] || 0,
    }));
};

export default {
  getFavoritesIds,
  getFavoritesRecordCount,
  getFavoritesPage,
};
