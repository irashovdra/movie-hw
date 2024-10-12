import { createMovieCard } from "./createMovieCard";

export const createMoviesList = (movies) => {
  return movies
    .map((movie) => {
      return createMovieCard(movie);
    })
    .join("");
};
