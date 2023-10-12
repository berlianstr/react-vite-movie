import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { fetchDataFromApi } from "../../utils/https/api";

export default function useLandingPageViewModel() {
  const { data, loading } = useFetch("/movie/popular");
  const [heroBanner, setHeroBanner] = useState([]);
  const [dataNewRelease, setDataNewRelease] = useState([]);
  const [dataWesternMovie, setDataWesternMovie] = useState([]);

  const getDataWestern = () => {
    fetchDataFromApi(`/movie/top_rated`).then((res) => {
      setDataWesternMovie(res.results);
    });
  };

  useEffect(() => {
    getDataWestern();
  }, []);

  const getDataNewRelease = () => {
    fetchDataFromApi(`/movie/upcoming`).then((res) => {
      setDataNewRelease(res.results);
    });
  };
  useEffect(() => {
    getDataNewRelease();
  }, []);
  // const [query, setQuery] = useState("");
  useEffect(() => {
    const bg =
      "https://image.tmdb.org/t/p/w500" +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setHeroBanner(bg);
  }, [data]);
  return {
    data,
    heroBanner,
    dataNewRelease,
    dataWesternMovie,
  };
}
