export const deleteMovie = (id) => {
  const options = {
    method: "DELETE",
  };
  return fetch(`http://localhost:3000/movies/${id}`, options);
};
