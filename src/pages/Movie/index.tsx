import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardMovie } from "../../components/CardMovie";

const moviesURL = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;

interface MovieProps {
  movie: string;
  title: string;
}

export function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieProps>();

  const getMovies = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;

    getMovies(movieUrl);
  }, []);

  return <>{movie && <h1>{movie.title}</h1>}</>;
}
