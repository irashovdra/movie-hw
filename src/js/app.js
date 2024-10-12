import { deleteMovie } from "./api/deleteMovie";
import { getMovies } from "./api/getMovie";
import { createMoviesList } from "./layout/createMovieList";
import { getDataFromAddModal } from "./layout/form";
import { getDataFromUpdateForm } from "./layout/updateForm";
const moviesList = document.querySelector(".movies");
const form = document.querySelector(".form");
const updateForm = document.querySelector(".update-form");

getMovies()
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const movie = createMoviesList(data);
    moviesList.insertAdjacentHTML("beforeend", movie);

    const deleteBtn = document.querySelector(".delete__btn");
    deleteBtn.addEventListener("click", (event) => {
      const id = event.target.id;
      console.log(id);
      deleteProduct(id)
        .then(() => console.log("Movie deleted"))
        .catch((error) => console.log("Error:", error));
    });
  })
  .catch((error) => {
    console.error("Error", error);
  });

form.addEventListener("submit", getDataFromAddModal);

updateForm.addEventListener("submit", getDataFromUpdateForm);
