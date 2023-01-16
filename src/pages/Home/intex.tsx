import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

import { NavBar } from "../../components/NavBar";

import { Text, TitleHome } from "./styled";

const moviesURL = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;

interface MovieProps {
  title: string;
  id: number;
  vote_average: number;
}

export function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <Box>
      {/* <NavBar /> */}
      <Container>
        <TitleHome>Os Filmes mais bem avalidados(pela a TMDB):</TitleHome>
        {topMovies.length === 0 && <></>}
        {topMovies.length > 0 &&
          topMovies.map((movie: MovieProps) => (
            <Text key={movie.id}>{movie.title}</Text>
          ))}
      </Container>
      <Link to="movie/1">Movie</Link>
    </Box>
  );
}
