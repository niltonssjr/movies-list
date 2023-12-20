import { faker } from "@/libraries/faker";
import { MovieType } from "@/types/movieType";

export function MoviesFactory(): MovieType {
  return {
    title: faker.word.words(4),
    imdbID: faker.number.int().toString(),
    poster: faker.internet.avatar(),
    type: "movie",
    year: faker.date.past().getFullYear().toString(),
  };
}
