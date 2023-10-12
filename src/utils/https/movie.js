import axios from "axios";

export const getPopular = async () => {
  return axios.get("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDA2M2YyNzYyNmFjZDliZmVlMDkzODI0MDc5NThhYSIsInN1YiI6IjY1MjZiNjBiMWYzZTYwMDExYzQ4MmVlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcWff572fxMO_6hrloPiSZ50j_utFhnFeDEcgk-zFL4",
    },
  });
};
