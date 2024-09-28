function addMovie(newMovie) {
  fetch("http://localhost:3000/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMovie),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

const newMovie = {
  id: 5,
  title: "Inception",
  year: 2010,
  photo: "https://m.media-amazon.com/images/I/51-c7mlLOLL._AC_.jpg",
};

addMovie(newMovie);
