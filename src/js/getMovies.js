function getMovies() {
  fetch("http://localhost:3000/movies")
    .then((response) => response.json())
    .then((data) => {
      displayMovies(data.movies);
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

const createMovieCard = (movies) => {
  const movieCard = movies
    .map((movie) => {
      return `
        <li class="movies__item">
         <h2>${movie.title} (${movie.year})</h2>
            <img src="${movie.photo}" alt="${movie.title}" width="200">
        </li>`;
    })
    .join("");
  return movieCard;
};

getMovies();
