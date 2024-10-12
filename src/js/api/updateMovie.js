export const updateMovie = (id, updatedMovie) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(updatedMovie),

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  console.log(id, updatedMovie);
  return fetch(`http://localhost:3000/movies/${id}`, options);
};
