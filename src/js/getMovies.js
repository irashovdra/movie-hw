function getMovies() {
  fetch("http://localhost:3000/movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayMovies(data.movies);
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

// function displayMovies(movies) {
//   const movieList = document.querySelector(".movies-list");
//   movieList.innerHTML = "";

//   movies.forEach((movie) => {
//     const movieItem = document.createElement("li");
//     movieItem.classList.add("movie-item");
//     movieItem.innerHTML = `
// <h2>${movie.title} (${movie.year})</h2>
// <img src="${movie.photo}" alt="${movie.title}" width="200">
//         `;
//     movieList.appendChild(movieItem);
//   });
// }
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
