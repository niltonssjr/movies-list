import { httpService } from "@/libraries/http";
import { MovieType } from "@/types/movieType";

const list = async (filter = {}) => {
  try {
    const {
      Search,
      totalResults: recordCount,
      Response,
    } = (await httpService.get("/", { params: filter })).data;
    const moviesList: Array<MovieType> =
      Response === "True"
        ? Search.map(
            (movie: any): MovieType => ({
              imdbID: movie.imdbID,
              year: movie.Year,
              type: movie.Type,
              title: movie.Title,
              poster: movie.Poster,
            })
          )
        : [];
    return Promise.resolve({ moviesList, recordCount });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const MoviesServices = {
  list,
};
