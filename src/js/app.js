import { getMovies } from "./api/getMovies";
import { addMovie } from "./api/addMovie";

const moviesList = document.querySelector(".movies-list");

const displayMovies = (movies) => {
  const movieHTML = createMovieCard(movies);
  moviesList.innerHTML = movieHTML;
};

getMovies()
  .then((response) => response.json())
  .then((data) => {
    displayMovies(data.movies);
  })
  .catch((error) => {
    console.error("Error", error);
  });

const newMovie = {
  id: "6",
  title: "The Matrix",
  year: 1999,
  photo: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
};

addMovie(newMovie)
  .then(() => getMovies())
  .then((response) => response.json())
  .then((data) => {
    displayMovies(data.movies);
  })
  .catch((error) => {
    console.error("Error adding movie", error);
  });
