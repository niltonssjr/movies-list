import { MovieType } from "@/types/movieType";
import { FavoriteStateType } from "./state";

const getFavoritesIds = (state: FavoriteStateType) =>
  state.favorites.map((movie: MovieType) => movie.imdbID);

const getFavoritesRecordCount = (state: FavoriteStateType) => {
  return state.favorites.length;
};

const getFavoritesPage = (state: FavoriteStateType) => {
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
