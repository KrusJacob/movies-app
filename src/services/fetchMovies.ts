import axios from "axios";

const API = process.env.API_MOVIES;
const URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
const type = "TOP_POPULAR_MOVIES";

export const fetchMovies = (page = 1) => {
  const res = axios
    .get(`${URL}collections?type=${type}&page=${page}`, {
      headers: {
        "X-API-KEY": "17bf5436-5834-4929-9063-26c3a7074ea0",
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);

  return res;
};

export const fetchMoviesById = (id: string) => {
  const res = axios
    .get(`${URL}${id}`, {
      headers: {
        "X-API-KEY": "17bf5436-5834-4929-9063-26c3a7074ea0",
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);

  return res;
};

export const fetchTrailerById = (id: string) => {
  const res = axios
    .get(`${URL}${id}/videos`, {
      headers: {
        "X-API-KEY": "17bf5436-5834-4929-9063-26c3a7074ea0",
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);

  return res;
};

// ("https://kinopoiskapiunofficial.tech/api/v2.2/films/535341/videos");
