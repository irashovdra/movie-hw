export const createMovieCard = (movies) => {
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
