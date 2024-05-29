import axios from "axios";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5 * 1000,
});

export { api };
