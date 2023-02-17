import { useState, useEffect, useContext } from "react";

import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";

import { CardMovie } from "../../components/CardMovie";
import { Skeletons } from "../../components/Skeletons";
import { SaveContext } from "../../components/Save/context/indexContext";

import { TitleHome } from "./styled";

const moviesURL = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;

export interface MovieProps {
  poster_path: string;
  title: string;
  id: number;
  vote_average: number;
}

export function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const { favorites } = useContext(SaveContext);

  const getTopRatedMovies = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data.results);
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <Box>
      <pre>
        {JSON.stringify(
          favorites.map((detali) => detali.title),
          undefined,
          2
        )}
      </pre>
      <Container>
        <TitleHome>Os Filmes mais bem avalidados(pela a TMDB):</TitleHome>
        <Grid container spacing={3}>
          {topMovies.length === 0 && <Skeletons />}
          {topMovies.length > 0 &&
            topMovies.map((movie: MovieProps) => (
              <Grid item xs={3}>
                <CardMovie
                  key={movie.id}
                  title={movie.title}
                  id={movie.id}
                  vote_average={movie.vote_average}
                  poster_path={movie.poster_path}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}
