export const createMovieCard = ({ id, title, year, photo }) => {
  return `<li class="movie">
   <p class="movie__id">${id}</p>
      <h2 class="movie__title">${title}</h2>
      <p class="movie__year">${year}</p>
      <img src="${photo}" alt="${title}" class="movie__photo">
      <button class="delete__btn" id="${id}" type="button">Delete</button>
      <button class="update__btn" id="${id}" type="button">Update</button>
    </li>`;
};
