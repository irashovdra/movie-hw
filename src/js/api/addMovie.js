export const addMovie = (movie) => {
  const options = {
    method: "POST",

    body: JSON.stringify(movie),

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return fetch("http://localhost:3000/movies", options);
};
