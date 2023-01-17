import { useState, useEffect } from "react";

import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

import { NavBar } from "../../components/NavBar";

import { Text, TitleHome, TextLink, BoxCard } from "./styled";
import { CardMovie } from "../../components/CardMovie";
import { Skeletons } from "../../components/Skeletons";

const moviesURL = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;
const imageUrl = process.env.REACT_APP_IMG;

export interface MovieProps {
  poster_path: string;
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
        <Grid container spacing={3}>
          {topMovies.length === 0 && <Skeletons />}
          {topMovies.length > 0 &&
            topMovies.map((movie: MovieProps) => (
              <Grid item xs={3}>
                <TextLink to={`movie/${movie.id}`}>
                  <CardMovie
                    key={movie.id}
                    title={movie.title}
                    id={movie.id}
                    vote_average={movie.vote_average}
                    poster_path={movie.poster_path}
                  />
                </TextLink>
              </Grid>
            ))}
        </Grid>
      </Container>
      <Link to="movie/1">Movie</Link>
    </Box>
  );
}
