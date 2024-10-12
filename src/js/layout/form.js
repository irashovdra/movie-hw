import { addMovie } from "../api/addMovie";
import { getMovies } from "../api/getMovie";
import { createMoviesList } from "./createMovieList";
const moviesList = document.querySelector(".movies");

export const getDataFromAddModal = (event) => {
  event.preventDefault();
  const idValue = event.target.elements.id.value;
  const titleValue = event.target.elements.title.value;
  const yearValue = event.target.elements.year.value;
  const photoValue = event.target.elements.photo.value;
  const newMovie = {
    id: idValue,
    title: titleValue,
    year: yearValue,
    photo: photoValue,
  };
  addMovie(newMovie);
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
  return newMovie;
};
