import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(apiPath, searchQuery = "") {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${
    import.meta.env.VITE_API_KEY
  }&query=${searchQuery}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(url);
        const results = await response.data.results;
        setData(results);
      } catch (e) {
        console.error(e);
      }
    }

    fetchMovies();
  }, [url]);

  return { data };
}
