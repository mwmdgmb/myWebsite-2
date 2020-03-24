import axios from "axios";

const URL = "http://localhost:3000";

const MOVIE_DATA = [];

const Category_data = [
  { id: "1", name: "drama" },
  { id: "2", name: "action" },
  { id: "3", name: "history" },
  { id: "4", name: "fantasy" }
];

export const getCategory = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Category_data);
      // reject("Connot fetch data !!!")
    }, 1000);
  });
};

export const getMovies = () => {
  return axios.get(`${URL}/api/v1/movies`).then(res => {
    return res.data;
  });
};

export const createMovie = movie => {
  movie.id = Math.random()
    .toString(36)
    .substr(2, 5);
  return axios.post(`${URL}/api/v1/movies`, movie).then(res => res.data);
};

export const getMovieById = id => {
  return axios.get(`${URL}/api/v1/movies/${id}`).then(res => res.data);
};

export const deleteMovies = id => {
  return axios.delete(`${URL}/api/v1/movies/${id}`).then(res => res.data);
};
