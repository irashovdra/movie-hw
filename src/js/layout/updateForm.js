import { updateMovie } from "../api/updateMovie";
import { getMovies } from "../api/getMovie";
import { createMoviesList } from "./createMovieList";
const moviesList = document.querySelector(".movies");

export const getDataFromUpdateForm = (event) => {
  event.preventDefault();

  const updatedMovie = {
    id: event.target.elements.id.value,
    title: event.target.elements.title.value,
    year: event.target.elements.year.value,
    photo: event.target.elements.photo.value,
  };
  updateMovie(updatedMovie.id, updatedMovie)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  getMovies()
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const movie = createMoviesList(data);
      moviesList.insertAdjacentHTML("beforeend", movie);
    })
    .catch((error) => {
      console.error("Error", error);
    });
  return updatedMovie;
};
